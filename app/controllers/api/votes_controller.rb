class Api::VotesController < ApplicationController
  def create
    vote = Vote.new(vote_params)
    if vote.save
      if vote.votable_type == "Question"
        @question = Question.find(vote.votable_id)
        render "/api/questions/show"
      else
        @answer = Answer.find(vote.votable_id)
        render "/api/answers/show"
      end
    else
      render json: vote.errors.full_messages, status: 422
    end
  end

  def destroy
    vote = Vote.find(params[:id])
    vote.destroy
    if vote.votable_type == "Question"
      @question = Question.find(vote.votable_id)
      render "/api/questions/show"
    else
      @answer = Answer.find(vote.votable_id)
      render "/api/answers/show"
    end
  end

  private

  def vote_params
    params.require(:vote).permit(:voter_id, :votable_id, :votable_type, :up)
  end
end
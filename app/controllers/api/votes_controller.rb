class Api::VotesController < ApplicationController
  def create
    vote = Vote.new(vote_params)
    if vote.save
      @question = vote_question(vote)
      render "/api/questions/show"
    else
      render json: vote.errors.full_messages, status: 422
    end
  end

  def destroy
    vote = Vote.find(params[:id])
    vote.destroy
    @question = vote_question(vote)
    render "/api/questions/show"
  end

  private

  def vote_params
    params.require(:vote).permit(:voter_id, :votable_id, :votable_type, :up)
  end

  def vote_question(vote)
    vote.votable_type == "Question" ?
        Question.find(vote.votable_id) : Answer.find(vote.votable_id).question
  end
end
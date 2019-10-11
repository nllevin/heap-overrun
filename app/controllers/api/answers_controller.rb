class Api::AnswersController < ApplicationController
  def index
    @answers = Question.find(params[:question_id]).answers
  end

  def create
    @answer = Answer.new(answer_params)
    @answer.author_id = current_user.id
    if @answer.save
      render :show
    else
      render json: @answer.errors.full_messages, status: 422
    end
  end

  def update
    @answer = Answer.find(params[:id])
    if @answer.update(answer_params)
      render :show
    else
      render json: @answer.errors.full_messages, status: 422
    end
  end

  def destroy
    @answer = Answer.find(params[:id])
    @answer.destroy
    render :show
  end

  private

  def answer_params
    params.require(:answer).permit(:body, :question_id)
  end
end
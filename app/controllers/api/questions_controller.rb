class Api::QuestionsController < ApplicationController
  def create
    @question = Question.new(question_params)
    @question.author_id = current_user.id
    @question.tag_ids = params[:question][:tags].map(&:downcase).uniq.map do |tag_name|
      tag = Tag.find_by(title: tag_name)
      tag ? tag.id : Tag.create(title: tag_name).id
    end

    if @question.save
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def update
    @question = Question.find(params[:id])
    if @question.update(question_params)
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def show
    @question = Question.includes(:views, :votes, :tags, { answers: [{ comments: :author }, :votes] }, { comments: :author }).find(params[:id])
    if !@question
      render json: "Sorry, question not found", status: 404
    end
    user_id = current_user ? current_user.id : nil
    @question.views.create(user_id: user_id)
  end

  def index
    if params[:search] == "true"
      @questions = Question.search(params[:query]).includes(:answers, :views, :votes, :comments, :tags, :author)
    else
      @questions = Question.all.includes(:answers, :views, :votes, :comments, :tags, :author)
    end
  end

  def destroy
    @question = Question.find(params[:id])
    @question.destroy
    render :show
  end

  private

  def question_params
    params.require(:question).permit(:title, :body)
  end
end
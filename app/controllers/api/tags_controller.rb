class Api::TagsController < ApplicationController
  def create
    @tag = Tag.new(tag_params)
    if @tag.save
      render json: @tag
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def index
    @tags = Tag.includes(:taggings)
      .where("title ILIKE ?", "%#{params[:inputVal]}%").limit(6)
      .where.not(title: params[:selectedTags])
  end

  private

  def tag_params
    params.require(:tag).permit(:title, :description)
  end
end
class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      errors = []
      @user.errors.each do |attribute, error|
        if attribute == :password_digest
          errors << "Password can't be blank"
        else
          errors << attribute.to_s.capitalize + " " + error
        end
      end
      render json: errors, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
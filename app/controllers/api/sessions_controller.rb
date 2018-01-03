class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @user
      login!(@user)
      render 'api/users/show.json.jbuilder', user: @user
    else
      render json: ["This username/password combination does not exist"], status: 422
    end
  end

  def destroy
    if logout
      render json: {}
    else
      render json: ["No one is logged in"], status: 404
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end

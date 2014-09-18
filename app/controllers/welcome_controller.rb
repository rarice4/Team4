class WelcomeController < ApplicationController
  before_action :authenticate_user!

  def index
    @posts = Post.all
    # @user = User.find params[:id]
  end
  
  private
    def user_params
      params.require(:user).permit(:email, :id)
    end
end

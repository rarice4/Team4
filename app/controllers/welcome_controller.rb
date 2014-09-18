class WelcomeController < ApplicationController
  before_action :authenticate_user!
  def index
    @posts = Post.all
    respond_to do |format|
      format.json { render json: @posts.as_json }
    end
  end
  
end

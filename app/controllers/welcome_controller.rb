class WelcomeController < ApplicationController
  before_action :authenticate_user!
  respond_to :json, :html
  def index
    @posts = Post.all
  end
  
end

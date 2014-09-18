class PostsController < ApplicationController

  def index
    @user = User.find params[:user_id]
    @posts = Post.all
  
    respond_to do |format|
      format.json { render json: @user.posts.as_json }
    end
  end

  def new
    @user = User.find params[:user_id]
    @post = Post.new

  end
  def show
    @posts = Post.all
  end


  def create
    @user = User.find params[:user_id]
    @post = Post.create post_params
    respond_to do |format|
      format.json { render json: @user.post.as_json }
    end

    if @post.save

    else
      render :new
    end
  end

  def edit
    @user = User.find params[:user_id]
    @post = Post.find params[:id]
    respond_to do |format|
      format.json { render json: @user.post.as_json }
    end
  end

  def update
    @user = User.find params[:user_id]
    @post = Post.find params[:id]
    @post.update_attributes post_params
    respond_to do |format|
      format.json { render json: @user.post.as_json }
    end
  end

  def destroy
    @user = User.find params[:user_id]
    @post = Post.find params[:id]
    @Post.delete
    respond_to do |format|
      format.json { render json: @user.post.as_json }
    end
  end
  def all
    @posts = Post.all
    respond_to do |format|
      format.json { render json: @posts.as_json }
    end
  end

  private
    def post_params
      params.require(:post).permit(:problem, :user_id, :date, :location)
    end


end

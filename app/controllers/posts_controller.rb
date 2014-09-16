class PostsController < ApplicationController
  def index
    @posts = Post.all
    @post = Post.find params[:id]
  end
  def new
    @post = Post.new
  end
  

  def create
    @post = Post.create post_params
    if @post.save
    
    else
      render :new
    end
  end
  def edit
    @post = Post.find params[:id]
  end
  def update
    @post = Post.find params[:id]
    @post.update_attributes post_params
  end
  def destroy
    @post = Post.find params[:id]
    @Post.delete
  end

private
  def post_params
    params.require(:post).permit(:problem, :user_id, :date, :location)
  end
end


end

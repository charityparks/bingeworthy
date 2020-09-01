class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  
  # GET /users
  def index
    @users = User.all.reverse
    render json: @users, include: [:shows]
    # render json: @users.as_json(include: {show:{only: [:show, :comments]}})
    # render json: users, include: [:show, :comments]
  end

  # GET /users/1
  def show
    render json: @user, include: [:shows]
    # render json: users.to_json(include: [:show, :comments])

  end

  def create
    user = User.find_or_create_by(username: params[:username])
    @user.shows.build(show: params[:show], comments: params[:comments])
    if @user.save
    
      # render json: @user, :include => {:show => {:only => :comments}}
      render json: @user, include: [:shows], status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end 
 
     # PATCH/PUT/users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:username, :show, comments)
    end
  end


class Admin::UsersController < AdminController
  before_action :authorize_admin!

  def index
    @users = User.page(params[:page])
  end

  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(position_params)
    if @user.save
      flash[:notice] = 'User created successfully'
      redirect_to admin_users_path
    else
      render action: :new
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update(position_params)
      flash[:notice] = 'User updated successfully'
      redirect_to admin_users_path
    else
      render action: :edit
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    redirect_to admin_users_path
  end

  private

  def position_params
    params.require(:user).permit(
      :name, :email, :password, :password_confirmation, :role
    )
  end

end

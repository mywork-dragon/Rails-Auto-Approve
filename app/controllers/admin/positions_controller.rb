class Admin::PositionsController < AdminController
  before_action :authorize_marketer!
  

  def index
    @positions = Position.page(params[:page])
  end

  def show
    @position = Position.find(params[:id])
  end

  def new
    @position = Position.new
  end

  def create
    @position = Position.new(position_params)
    if @position.save
      flash[:notice] = 'Position created successfully'
      redirect_to admin_positions_path
    else
      render action: :new
    end
  end

  def edit
    @position = Position.find(params[:id])
  end

  def update
    @position = Position.find(params[:id])
    if @position.update(position_params)
      flash[:notice] = 'Position updated successfully'
      redirect_to admin_positions_path
    else
      render action: :edit
    end
  end

  def destroy
    @position = Position.find(params[:id])
    @position.destroy
    redirect_to admin_positions_path
  end


  private

  def position_params
    params.require(:position).permit(
      :title, :content, :location, :url, :email, :state
    )
  end
end

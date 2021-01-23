class Admin::LandingsController < AdminController
  def index
    @landing = Landing.page(params[:page])
  end

  #TODO - remove this and convert the show action instead
  def google_landing_page
  end

  def show
    @landing = Landing.find(params[:id])
  end

  def new
    @landing = Landing.new
  end

  def create
    @landing = Landing.new(landing_params)
    if @landing.save
      flash[:notice] = 'Landing created successfully'
      redirect_to admin_landing_path(@landing)
    else
      render action: :new
    end
  end

  def edit
    @landing = Landing.find(params[:id])
  end

  def update
    @landing = Landing.find(params[:id])
    if @landing.update(landing_params)
      flash[:notice] = 'Landing updated successfully'
      redirect_to admin_landing_path(@landing)
    else
      render action: :edit
    end
  end

  def destroy
    @landing = Landing.find(params[:id])
    @landing.destroy
    redirect_to admin_landings_path
  end

  private

  def landing_params
    params.require(:landing).permit(
      :title, :content, :location, :url, :email, :state
    )
  end
end

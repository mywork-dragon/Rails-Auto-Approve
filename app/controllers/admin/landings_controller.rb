class Admin::LandingsController < AdminController
  def index
    @themes = Theme.all
    @landings = Landing.page(params[:page])
  end

  def selected_theme_index
    @landings = Landing.where(theme: (params[:theme_name]))
  end

  #TODO - remove this and use the show action instead
  def google_landing_page
  end

  #TODO - remove this and use the edit action instead
  def google_landing_page_edit
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
    params.require(:landing).permit(:theme, :path, :state, config: {})
  end
end

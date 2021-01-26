class Admin::ReviewSitesController < AdminController
  def index
    @sites = ReviewSite.page(params[:page])
  end

  def show
    @site = ReviewSite.find(params[:id])
  end

  def new
    @site = ReviewSite.new
  end

  def create
    @site = ReviewSite.new(site_params)
    if @site.save
      flash[:notice] = 'Review site created successfully'
      redirect_to admin_review_sites_path
    else
      render action: :new
    end
  end

  def edit
    @site = ReviewSite.find(params[:id])
  end

  def update
    @site = ReviewSite.find(params[:id])
    if @site.update(site_params)
      flash[:notice] = 'Review site updated successfully'
      redirect_to admin_review_sites_path
    else
      render action: :edit
    end
  end

  def destroy
    @site = ReviewSite.find(params[:id])
    @site.destroy
    redirect_to admin_review_sites_path
  end

  private

  def site_params
    params.require(:review_site).permit(:name, :logo)
  end
end

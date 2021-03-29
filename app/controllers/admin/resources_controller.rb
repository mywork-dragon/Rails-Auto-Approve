class Admin::ResourcesController < AdminController
  before_action :authorize_marketer!
  def index
    @resources = Resource.all
  end

  def new
    @resource = Resource.new
  end
  

  def create
    @resource = Resource.new(resource_params)
    @resource.user_id = current_user.id

    if @resource.save
      flash[:notice] = 'Resource created successfully'
      redirect_to admin_resources_path
    else
      render action: :new
    end
  end

  def edit
    @resource = Resource.find(params[:id])
  end


  def update
    @resource = Resource.find(params[:id])
    if @resource.update(resource_params)
      flash[:notice] = 'Resource updated successfully'
      redirect_to admin_resources_path
    else
      render action: :edit
    end
  end


  def destroy
    @resource = Resource.find(params[:id])

    @resource.destroy
    redirect_to admin_resources_path
  end


  private

  def resource_params
    params.require(:resource).permit(:title, :subTitle, :cover, :content,:slug, :resource_category_id, :state)
  end
end
  
class Admin::ResourceCategoryController < AdminController
  before_action :authorize_marketer!

  def index
    @resource_categories = ResourceCategory.all
  end

  def new
    @resource_category = ResourceCategory.new
  end


  def create
    @resource_category = ResourceCategory.new(resource_params)
    if @resource_category.save
      flash[:notice] = 'Category created successfully'
      redirect_to admin_resource_category_index_path
    else
      render action: :new
    end
  end

  def edit
    @resource_category = ResourceCategory.find(params[:id])
  end


  def update
    @resource_category = ResourceCategory.find(params[:id])
    if @resource_category.update(resource_params)
      flash[:notice] = 'Category updated successfully'
      redirect_to admin_resource_category_index_path
    else
      render action: :edit
    end
  end

  private

  def resource_params
    params.require(:resource_category).permit(:name, :state, :slug)
  end
end
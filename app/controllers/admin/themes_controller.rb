class Admin::ThemesController < AdminController
  before_action :authorize_marketer!

  def index
    @stats = Landing.group(:theme).count
    @themes = Theme.all
  end

  def show
    if Theme.available.include?(params[:id])
      @landings = Landing.where(theme: params[:id]).page(params[:page])
    else
      render status: :not_found
    end
  end

  def fields
    if Theme.available.include?(params[:id])
      @theme = Theme.new(params[:id])
      render json: @theme.variables
    else
      render status: :not_found
    end
  end
end

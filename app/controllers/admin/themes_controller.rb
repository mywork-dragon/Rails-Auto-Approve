class Admin::ThemesController < AdminController
  def index
    @stats = Landing.group(:theme).count
    @themes = Theme.all
  end

  def show
    if Theme.available.include?(params[:id])
      @theme = Theme.new(params[:id])
      render json: @theme.variables
    else
      render status: :not_found
    end
  end
end

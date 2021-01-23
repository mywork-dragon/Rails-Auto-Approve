class Admin::ThemesController < AdminController
  def index
    @themes = Landing.group(:theme).count
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

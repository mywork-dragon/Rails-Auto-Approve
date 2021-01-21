class Admin::ThemesController < AdminController
  def index
    @themes = Landing.group(:theme).count
  end
end

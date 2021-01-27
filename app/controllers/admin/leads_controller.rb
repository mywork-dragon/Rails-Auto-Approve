class Admin::LeadsController < AdminController
  before_action :authorize_marketer!

  def index
    @leads = Lead.page(params[:page])
  end

  def show
    @lead = Lead.find(params[:id])
  end

  def sync
  end
end

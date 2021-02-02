class ApplicationController < ActionController::Base
  before_action :parse_utm_source!

  private

  def parse_utm_source!
    return unless params[:utm_source].present?
    cookies[:utm_source] = {
      value: params[:utm_source],
      expires: 14.days.from_now
    }
  end
end

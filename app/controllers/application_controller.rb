class ApplicationController < ActionController::Base
  before_action :parse_utm_source!
  before_action :parse_affiliate_id!

  private

  def parse_affiliate_id!
    return unless params[:subid].present?
    cookies[:affiliate] = {
      value: params[:subid],
      expires: 14.days.from_now
    }
  end

  def parse_utm_source!
    return unless params[:utm_source].present?
    cookies[:utm_source] = {
      value: params[:utm_source],
      expires: 14.days.from_now
    }
  end
end

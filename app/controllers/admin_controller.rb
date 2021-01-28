class AdminController < ApplicationController
  before_action :authenticate_user!
  layout 'admin'

  class UnauthorizedError < StandardError;end

  rescue_from UnauthorizedError do |exception|
    render status: :unauthorized
  end

  private

  def authorize_admin!
    return if current_user.admin?
    head :unauthorized
  end

  def authorize_marketer!
    return if current_user.admin? || current_user.marketer?
    head :unauthorized
  end
end

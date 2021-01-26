class LandingsController < ApplicationController
  layout 'landing'

  # Show the landing page
  def show
    @landing = Landing.find_by(path: "/#{params[:id]}")
    unless can_view_landing?(@landing)
      render status: :not_found and return
    end
  end

  private

  # Check if a landing page can be viewed
  #
  # 1. If the page is active, then it can be seen
  # 2. If a user is signed in, then they can preview it
  #
  # @return [Boolean]
  def can_view_landing?(landing)
    landing.present? && landing.active? || user_signed_in?
  end
end

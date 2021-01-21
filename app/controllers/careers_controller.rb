class CareersController < ApplicationController
  def show
    @careers = Position.active
  end
end

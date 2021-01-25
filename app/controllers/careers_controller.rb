class CareersController < ApplicationController
  def show
    @position = Position.active.find(params[:id])
  end
end

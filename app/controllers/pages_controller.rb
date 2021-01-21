class PagesController < ApplicationController
  def index
    body_class "home-wrapper"
    @reviews = Review.last(8)
  end

  def auto_refinance
  end

  def auto_lease_purchase
  end

  def motorcycle_refinance
  end

  def faq
  end
end

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
  
  def why_auto_approve
  end

  def faq
  end

  def contact_us
  end
  
  def terms_of_service
  end

  def legal_stuff
  end

  def page_not_found
  end
end

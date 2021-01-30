class PagesController < ApplicationController
  def index
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
    @faq = Faq.all
  end

  def congratulations
  end

  def contact_us
  end
  
  def terms_of_service
  end

  def privacy_policy
  end

  def page_not_found
  end
end

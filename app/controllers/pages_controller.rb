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

  def contact_us
  end
  
  def terms_of_service
  end

  def privacy_policy
  end

  def page_not_found
  end

  def resources
    @resource_categories = ResourceCategory.where(state: 1)
    
    if params['filter']
      @filterCategory = ResourceCategory.where("state = 1 and slug in (?)", params['filter'].split(',') ).select(:id)
      @resources = Resource.page(params[:page]).where("state = 1 and resource_category_id in (?)", @filterCategory)
    else
      @resources = Resource.page(params[:page]).where(state: 1)
    end

  end

  def resource_detail
    @resource = Resource.where(slug: params['slug']).last
  end
end

module ReviewsHelper
  # Get recemt reviews
  #
  # @param limit [Integer]
  # @return [Review::ActiveRecord_Relation]
  def recent_reviews(limit)
    @recent_reviews ||= Review.includes(:review_site).recent.limit(limit)
  end
end
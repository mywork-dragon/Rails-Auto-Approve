module ReviewsHelper
  # Get recemt reviews
  #
  # @param limit [Integer]
  # @return [Review::ActiveRecord_Relation]
  def recent_reviews(limit)
    @recent_reviews ||= Review.includes(:review_site).recent.limit(limit)
  end

  # Get Hash of rating counts
  #
  # @param review [Review]
  # @return [Hash]
  def review_stars(review)
    {
      active: review.rating,
      blank: Review::RATINGS.last - review.rating
    }
  end
end
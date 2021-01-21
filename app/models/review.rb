class Review < ApplicationRecord
  belongs_to :review_site

  # Permitted ratings
  RATINGS = [1, 2, 3, 4, 5].freeze

  validates :name, :location, length: { maximum: 50 }, presence: true
  validates :content, length: { maximum: 100 }, presence: true
  validates :rating, inclusion: RATINGS
end

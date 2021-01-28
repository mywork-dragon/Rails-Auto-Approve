class Review < ApplicationRecord
  belongs_to :review_site

  # Permitted ratings
  RATINGS = [1, 2, 3, 4, 5].freeze

  scope :recent, -> { order(created_at: :desc) }

  validates :review_site, presence: true
  validates :name, presence: true
  validates :content, presence: true
  validates :rating, inclusion: RATINGS
  validates :url, url: true
end

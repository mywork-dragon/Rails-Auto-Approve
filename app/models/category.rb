class Category < ApplicationRecord
  extend FriendlyId

  friendly_id :name
  has_many :category_posts, dependent: :destroy
  has_many :posts, through: :category_posts

  mount_uploader :cover, CoverUploader
  enum state: { pending: 0, active: 1, archived: 2 }

  validates :name, length: { maximum: 50 }, presence: true
  validates :teaser, length: { maximum: 255 }, presence: true
end

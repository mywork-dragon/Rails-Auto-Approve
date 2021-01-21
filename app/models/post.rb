class Post < ApplicationRecord
  has_many :category_posts, dependent: :destroy
  has_many :categories, through: :category_posts
  belongs_to :user

  mount_uploader :cover, CoverUploader
  scope :published, -> { where('publish_at <= ?', Time.now.utc) }

  validates :title, length: { maximum: 100 }, presence: true
  validates :content, :teaser, :cover, presence: true, if: :publish_at?
  validates :teaser, length: { maximum: 255 }

  # Check if published
  #
  # @return [Boolean]
  def published?
    publish_at.present? && publish_at < Time.now.utc
  end
end

class ReviewSite < ApplicationRecord
  has_many :reviews, dependent: :destroy

  mount_uploader :logo, LogoUploader

  validates :name, length: { maximum: 100 }, presence: true
  validates :logo, presence: true
end

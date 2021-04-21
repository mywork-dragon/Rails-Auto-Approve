class Resource < ApplicationRecord
  
  belongs_to :resource_category
  
  belongs_to :user
  mount_uploader :cover, CoverUploader
  enum state: { pedding: 0, live: 1, archived: 2 }
  
  validates :title, length: { maximum: 100 }, presence: true
  validates :subTitle, length: { maximum: 100 }, presence: true
  validates :content, :cover, presence: true
  validates :slug, length: { maximum: 255 }, format: { without: /\A\// }, presence: true
end

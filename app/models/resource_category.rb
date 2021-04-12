class ResourceCategory < ApplicationRecord
  extend FriendlyId

  friendly_id :name
  has_many :resources, dependent: :destroy
  

  enum state: { pedding: 0, live: 1, archived: 2 }

  validates :name, length: { maximum: 50 }, presence: true
  validates :slug, length: { maximum: 255 }, format: { without: /\A\// }, presence: true
end

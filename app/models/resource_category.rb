class ResourceCategory < ApplicationRecord
  extend FriendlyId

  friendly_id :name
  has_many :resources

  enum state: { pedding: 0, live: 1, archived: 2 }

  validates :name, length: { maximum: 50 }, presence: true
end

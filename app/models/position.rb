class Position < ApplicationRecord
  enum state: { active: 0, archived: 1 }

  validates :title, :location, length: { maximum: 255 }, presence: true
  validates :content, presence: true
  validates :url, url: true, length: { maximum: 255 }, unless: :email?
  validates :email, length: { maximum: 255 }, format: { with: Devise.email_regexp }, unless: :url?
end

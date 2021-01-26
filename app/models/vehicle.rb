class Vehicle < ApplicationRecord
  enum state: { active: 0, archived: 1 }

  validates :make, :model, length: { maximum: 100 }, presence: true
  validates :make, uniqueness: { case_sensitive: false }
end

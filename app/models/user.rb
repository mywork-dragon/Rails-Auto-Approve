class User < ApplicationRecord
  has_many :posts, dependent: :destroy
  has_many :resources, dependent: :destroy

  enum role: { copywriter: 0, marketer: 1, admin: 2 }

  devise :database_authenticatable, :registerable, :confirmable,
    :recoverable, :rememberable, :validatable, :trackable,
    :timeoutable, :lockable

  validates :name, length: { maximum: 25 }, presence: true
  validates :email, length: { maximum: 255 }
end

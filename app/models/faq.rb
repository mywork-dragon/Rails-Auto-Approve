class Faq < ApplicationRecord
  validates :question, :answer, length: { maximum: 255 }, presence: true
end

require "test_helper"

describe ReviewSite do
  extend MediaHelper

  context 'associations' do
    should have_many(:reviews)
  end

  context 'validations' do
    should allow_value('Name').for(:name)
    should_not allow_value(nil).for(:name)
    should allow_value(media('image.jpg')).for(:logo)
    should_not allow_value(nil).for(:logo)
  end
end

require "test_helper"

describe Post do
  extend MediaHelper

  context 'associations' do
    should have_many(:category_posts)
    should have_many(:categories).through(:category_posts)
    should belong_to(:user)
  end

  context 'validations' do
    should_not allow_value(nil).for(:user)
    should allow_value('Title').for(:title)
    should_not allow_value(nil).for(:title)
    should allow_value(nil, 'Teaser').for(:teaser)
    should allow_value(nil, 'Content').for(:content)
    should allow_value(nil, media('image.jpg')).for(:cover)
    should allow_value(nil, 1.day.ago, 1.day.from_now).for(:publish_at)
  end
end

require "test_helper"

describe Category do
  extend MediaHelper
  include SlugHelper

  context 'associations' do
    should have_many(:category_posts)
    should have_many(:posts).through(:category_posts)
  end

  context 'validations' do
    should allow_value('Name').for(:name)
    should_not allow_value(nil).for(:name)
    should allow_value('Teaser').for(:teaser)
    should_not allow_value(nil).for(:teaser)
    should allow_value(nil, media('image.jpg')).for(:cover)
  end
end

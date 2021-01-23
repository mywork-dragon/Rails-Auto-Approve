require "test_helper"

describe Review do
  context 'associations' do
    should belong_to(:review_site)
  end

  context 'validations' do
    should_not allow_value(nil).for(:review_site)
    should allow_value('John').for(:name)
    should_not allow_value(nil).for(:name)
    should allow_value('Seattle, WA').for(:location)
    should_not allow_value(nil).for(:location)
    should allow_value('Content').for(:content)
    should_not allow_value(nil).for(:content)
    should allow_value(*Review::RATINGS).for(:rating)
    should_not allow_value(nil, 1000).for(:rating)
  end
end

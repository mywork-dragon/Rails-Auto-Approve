require "test_helper"

describe Position do
  context 'validations' do
    should allow_value('Title').for(:title)
    should_not allow_value(nil).for(:title)
    should allow_value('Content').for(:content)
    should_not allow_value(nil).for(:content)
    should allow_value('Seattle').for(:location)
    should_not allow_value(nil).for(:location)
  end
end

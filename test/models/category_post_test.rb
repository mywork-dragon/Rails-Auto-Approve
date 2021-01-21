require "test_helper"

describe CategoryPost do
  context 'associations' do
    should belong_to(:category)
    should belong_to(:post)
  end

  context 'validations' do
    should_not allow_value(nil).for(:category)
    should_not allow_value(nil).for(:post)
  end
end

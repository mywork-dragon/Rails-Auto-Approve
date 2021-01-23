require "test_helper"

describe Vehicle do
  context 'associations' do
  end

  context 'validations' do
    should allow_value('Chevy').for(:make)
    should_not allow_value(nil).for(:make)
    should allow_value('Silverado').for(:model)
    should_not allow_value(nil).for(:model)
  end
end

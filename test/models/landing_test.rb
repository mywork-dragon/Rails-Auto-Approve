require "test_helper"

describe Landing do
  context 'associations' do
    should have_many(:leads)
  end

  context 'validations' do
    should allow_value(*Theme.available).for(:theme)
    should_not allow_value(nil, 'invalid-theme').for(:theme)
    should allow_value('/some/path/here').for(:path)
    should_not allow_value(nil, 'some/path/here').for(:path)
  end
end

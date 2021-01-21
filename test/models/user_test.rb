require "test_helper"

describe User do
  context 'associations' do
    should have_many(:posts)
  end

  context 'validations' do
    should allow_value('John').for(:name)
    should_not allow_value(nil).for(:name)
    should allow_value('john@doe.org').for(:email)
    should_not allow_value(nil, 'invalid-email').for(:email)
  end
end

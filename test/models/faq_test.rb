require "test_helper"

describe Faq do
  context 'validations' do
    should allow_value('Question').for(:question)
    should_not allow_value(nil).for(:question)
    should allow_value('Question').for(:answer)
    should_not allow_value(nil).for(:answer)
  end
end

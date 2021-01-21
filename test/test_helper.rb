ENV['RAILS_ENV'] ||= 'test'
require_relative '../config/environment'
require 'rails/test_help'
require 'minitest/rails'

Dir[Rails.root.join('test', 'support', '**', '*')].each { |f| require f }

class ActiveSupport::TestCase
  parallelize(workers: :number_of_processors)
end

Shoulda::Matchers.configure do |config|
  config.integrate do |with|
    with.test_framework :minitest
    with.library :rails
  end
end
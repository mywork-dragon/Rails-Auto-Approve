source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.7.2"

gem "rails", "~> 6.0.3", ">= 6.0.3.4"

gem "bootsnap", ">= 1.4.2", require: false
gem "carrierwave"
gem "chronic"
gem "cloudinary"
gem "devise"
gem "figaro"
gem "friendly_id"
gem "httparty"
gem "liquid"
gem "kaminari"
gem "money-rails"
gem "pg", ">= 0.18", "< 2.0"
gem "phonelib"
gem "puma", "~> 4.1"
gem "simple_form"
gem "slim"
gem "turbolinks", "~> 5"
gem "validate_url"
gem "webpacker", "~> 4.0"
gem "slim-rails"

group :development, :test do
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]
  gem "ffaker"
  gem "fabrication"
end

group :development do
  gem "capistrano"
  gem "capistrano-passenger"
  gem "capistrano-rails"
  gem "capistrano-rvm"
  gem "capistrano-yarn"
  gem "listen", "~> 3.2"
  gem "guard"
  gem "guard-minitest"
  gem "pry", "~> 0.13.1"
  gem "rufo", require: false
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
  gem "web-console", ">= 3.3.0"
end

group :test do
  gem "capybara", ">= 2.15"
  gem "minitest-rails"
  gem "mocha"
  gem "selenium-webdriver"
  gem "shoulda"
  gem "webdrivers"
end

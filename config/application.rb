require_relative 'boot'

require "rails"

require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_text/engine"
require "action_view/railtie"
require "rails/test_unit/railtie"

Bundler.require(*Rails.groups)

module AutoApprove
  class Application < Rails::Application
    config.load_defaults 6.0
    config.autoload_paths += [Rails.root.join('lib')]
    config.action_mailer.default_url_options = { host: ENV['base_host'] }
    config.generators do |g|
      g.assets false
      g.helper false
      g.test_framework :minitest, spec: true, fixture_replacement: :fabrication
      g.fixture_replacement :fabrication, dir: "test/fabricators"
    end
    config.to_prepare do
      Devise::SessionsController.layout 'sessions'
      Devise::ConfirmationsController.layout 'sessions'
      Devise::UnlocksController.layout 'sessions'
      Devise::PasswordsController.layout 'sessions'
    end
  end
end

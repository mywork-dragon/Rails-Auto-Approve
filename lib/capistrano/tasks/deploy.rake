
namespace :deploy do
  desc 'Runs webpacker compile on the app servers'
  task :webpacker_compile do
    on roles(:app) do
      within current_path do
        with rails_env: fetch(:rails_env) do
          execute :bundle, "exec rake webpacker:compile "
        end
      end
    end
  end
end
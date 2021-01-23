Rails.application.routes.draw do
  devise_for :users,
    path: '',
    path_names: { sign_in: 'sign_in', sign_out: 'sign_out'}

  namespace :admin do
    
    resources :categories
    resources :faq
    #TODO - remove this and convert mockup to show/edit actions
    get 'landings/google-landing-page' => 'landings#google_landing_page', as: :google_landing_page
    get 'landings/google-landing-page-edit' => 'landings#google_landing_page_edit', as: :google_landing_page_edit
    resources :landings do
      collection do 
        get '/theme/:name' => 'landings#selected_theme_index', as: :theme_landings
      end
    end
    resources :leads, only: [:index, :show] do
      post :sync, on: :member
    end
    resources :positions
    resources :reviews
    resources :themes, only: [:index, :show]
    resources :users
  end

  resources :leads, only: :create
  resources :careers, path: 'join-our-team', only: [:index, :show]

  get '/admin' => 'admin/dashboard#show', as: :admin
  get '/auto-refinance' => 'pages#auto_refinance', as: :auto_refinance
  get '/auto-lease-purchase' => 'pages#auto_lease_purchase', as: :auto_lease_purchase
  get '/motorcycle-refinance' => 'pages#motorcycle_refinance', as: :motorcycle_refinance
  get '/why-auto-approve' => 'pages#why_auto_approve', as: :why_auto_approve
  get '/faq' => 'pages#faq', as: :faq
  get '/contact-us' => 'pages#contact_us', as: :contact_us
  get '/terms-of-service' => 'pages#terms_of_service', as: :terms_of_service
  get '/legal-stuff' => 'pages#legal_stuff', as: :legal_stuff
  get '/page-not-found' => 'pages#page_not_found', as: :page_not_found

  get '*id', to: 'landings#show', as: :landing
  root 'pages#index'
end

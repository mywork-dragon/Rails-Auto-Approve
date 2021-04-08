Rails.application.routes.draw do
  devise_for :users,
    path: '',
    path_names: { sign_in: 'sign_in', sign_out: 'sign_out'}

  namespace :admin do
    
    resources :categories
    
    resources :faq

    resources :landings
    resources :leads, only: [:index, :show] do
      post :sync, on: :member
    end
    resources :positions
    get 'positions/:id/copy' => 'positions#copy', as: 'copy_positions'
    
    resources :reviews
    get 'reviews/:id/copy' => 'reviews#copy', as: 'copy_reviews'
    resources :review_sites

    resources :themes, only: [:index, :show] do
      get :fields, on: :member
    end

    resources :users

    resources :resources
    get 'resources/:id/copy' => 'resources#copy', as: 'copy_resource'

    resources :resource_category
  end

  resources :leads, only: [:create] do
    put :step2, on: :member
    put :step3, on: :member
  end
  resources :contacts, only: :create
  resources :careers, path: 'join-our-team', only: [:index, :show]

  get '/admin' => 'admin/dashboard#show', as: :admin
  get '/auto-refinance' => 'pages#auto_refinance', as: :auto_refinance
  get '/auto-lease-purchase' => 'pages#auto_lease_purchase', as: :auto_lease_purchase
  get '/motorcycle-refinance' => 'pages#motorcycle_refinance', as: :motorcycle_refinance
  get '/why-auto-approve' => 'pages#why_auto_approve', as: :why_auto_approve
  get '/faq' => 'pages#faq', as: :faq
  get '/contact-us' => 'pages#contact_us', as: :contact_us
  get '/terms-of-service' => 'pages#terms_of_service', as: :terms_of_service
  get '/privacy-policy' => 'pages#privacy_policy', as: :privacy_policy
  get '/page-not-found' => 'pages#page_not_found', as: :page_not_found
  get '/resources' => 'pages#resources', as: :resources
  get '/resource-detail/:slug' => 'pages#resource_detail', as: :resource_detail

  match "/404", to: "errors#not_found", via: :all, as: :not_found
  match "/500", to: "errors#internal_server_error", via: :all, as: :internal_error

  post '/admin/attachment/upload' => 'admin/attachments#uploadImages'


  get '*id', to: 'landings#show', as: :landing
  root 'pages#index'
end

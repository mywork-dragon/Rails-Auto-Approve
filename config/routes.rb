Rails.application.routes.draw do
  devise_for :users

  namespace :admin do
    resource :dashboard, only: :show
    resources :categories
    resources :faq
    resources :landings
    resources :leads, only: [:index, :show] do
      post :sync, on: :member
    end
    resources :positions
    resources :reviews
    resources :themes, only: [:index]
    resources :users
  end

  resources :leads, only: :create
  resources :careers, path: 'join-our-team', only: [:index, :show]

  get '/auto-refinance' => 'pages#auto_refinance', as: :auto_refinance
  get '/auto-lease-purchase' => 'pages#auto_lease_purchase', as: :auto_lease_purchase
  get '/motorcycle-refinance' => 'pages#motorcycle_refinance', as: :motorcycle_refinance
  get '/faq' => 'pages#faq', as: :faq
 
  get '*id', to: 'landings#show', as: :landing
  root 'pages#index'
end

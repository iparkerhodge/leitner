Rails.application.routes.draw do
  # Static Pages
  root 'home#index'
  get '/how-it-works', to: 'about#index'
  get '/manage', to: 'manage#index'

  # Sign Up
  post 'signup', to: 'users#create', defaults: { format: :json }
  get 'signup', to: 'users#new'

  # Confirmations
  resources :confirmations, only: %i[create edit new], param: :confirmation_token

  # Sessions
  post 'login', to: 'sessions#create', defaults: { format: :json }
  delete 'logout', to: 'sessions#destroy'
  get 'login', to: 'sessions#new'

  # Active Sessions
  resources :active_sessions, only: [:destroy] do
    collection do
      delete 'destroy_all'
    end
  end

  # Passwords
  resources :passwords, only: %i[create edit new update], param: :password_reset_token

  # Account
  put 'account', to: 'users#update'
  get 'account', to: 'users#edit'
  delete 'account', to: 'users#destroy'
end

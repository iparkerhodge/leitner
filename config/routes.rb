Rails.application.routes.draw do
  # Static Pages
  root 'home#index'
  get '/how-it-works', to: 'about#index'
  get '/manage', to: 'manage#index'

  # Sign Up
  post 'sign_up', to: 'users#create'
  get 'sign_up', to: 'users#new'

  # Confirmations
  resources :confirmations, only: %i[create edit new], param: :confirmation_token

  # Sessions
  post 'login', to: 'sessions#create'
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

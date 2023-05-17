Rails.application.routes.draw do
  root "home#index"
  get '/how-it-works', to: 'about#index'
  get '/manage', to: 'manage#index'
end

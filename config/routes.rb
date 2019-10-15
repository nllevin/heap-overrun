Rails.application.routes.draw do
  root "static_pages#root"
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :questions, only: [:create, :destroy, :update, :show, :index] do
      resources :answers, only: [:index]
      resources :comments, only: [:index]
    end
    resources :answers, only: [:create, :destroy, :update] do
      resources :comments, only: [:index]
    end

    resources :comments, only: [:create, :destroy, :update]
    resources :votes, only: [:create, :destroy]
  end
end

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create, :index]
    resource :session, only: [:create, :destroy, :show]
    resources :destinations, only: [:index, :create, :show] do
      resources :users, only: [:create] do
        resources :reviews, only: [:edit, :update, :create, :show]
      end
    end
    resources :hostings, only: [:create, :show, :index, :update, :destroy]
    resources :reviews, only: [:create, :show, :index, :update, :destroy]
  end

  root to: 'static_pages#root'

end

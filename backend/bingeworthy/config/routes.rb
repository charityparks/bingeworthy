Rails.application.routes.draw do
  resources :users
  resources :shows
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/search/:shows', to: 'shows#search'
  get '/search/:users', to: 'users#search' 
  
end



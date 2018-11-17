Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/presents', to: 'presents#index'
  get '/presents/:id', to: 'presents#show'
  post '/presents', to: 'presents#create'
  delete '/presents/:id', to: 'presents#delete'
  put '/presents/:id', to: 'presents#update'
end

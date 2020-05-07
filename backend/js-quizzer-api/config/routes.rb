Rails.application.routes.draw do
  resources :questions, only: :index
  resources :subcategories, only: :index
  resources :categories, only: :index
  resources :answers, only: :index
  resources :quizzes, only: :index
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

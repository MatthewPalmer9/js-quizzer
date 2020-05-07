Rails.application.routes.draw do
  resources :questions
  resources :subcategories
  resources :categories
  resources :answers
  resources :quizzes
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

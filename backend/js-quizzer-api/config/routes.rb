Rails.application.routes.draw do
  resources :questions, only: :index
  resources :subcategories, only: :index
  resources :categories, only: [:index, :show]
  resources :answers, only: :index
  resources :quizzes, only: :index

  get '/subcategories/sports' => "subcategories#sports"
  get '/subcategories/movies' => "subcategories#movies"
  get '/subcategories/video_games' => "subcategories#video_games"
  
  # Sports Routes #
  get '/quizzes/football' => "quizzes#football"
  get '/quizzes/basketball' => "quizzes#basketball"
  get '/quizzes/soccer' => "quizzes#soccer"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

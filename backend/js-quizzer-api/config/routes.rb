Rails.application.routes.draw do
  resources :questions, only: :index
  resources :subcategories, only: :index
  resources :categories, only: [:index, :show]
  resources :answers, only: :index
  resources :quizzes, only: :index

  # Subcategory Routes
  get '/subcategories/sports' => "subcategories#sports"
  get '/subcategories/movies' => "subcategories#movies"
  get '/subcategories/video_games' => "subcategories#video_games"
  
  # Sports Quiz Routes #
  get '/quizzes/football' => "quizzes#football"
  get '/quizzes/basketball' => "quizzes#basketball"
  get '/quizzes/soccer' => "quizzes#soccer"

    # Sports Quiz Question Routes
    get '/questions/football' => "questions#football"

  # Quiz Answers Routes
  get '/answers/football' => "answers#football"


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

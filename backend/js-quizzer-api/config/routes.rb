Rails.application.routes.draw do
  resources :finishedquizzes, only: [:index, :delete, :create]
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
  post '/quizzes/football' => "quizzes#create_football"
  get '/quizzes/basketball' => "quizzes#basketball"
  get '/quizzes/soccer' => "quizzes#soccer"
  get '/quizzes/action' => "quizzes#action"
  get '/quizzes/fantasy' => "quizzes#fantasy"
  get '/quizzes/horror' => "quizzes#horror"
  get '/quizzes/fps' => "quizzes#fps"
  get '/quizzes/rpg' => "quizzes#rpg"
  get '/quizzes/fighter' => "quizzes#fighter"

    # Sports Quiz Question Routes
    get '/quizzes/football/questions' => "quizzes#football_questions"
    get '/quizzes/basketball/questions' => "quizzes#basketball_questions"
    get '/quizzes/soccer/questions' => "quizzes#soccer_questions"
    get '/quizzes/action/questions' => "quizzes#action_questions"
    get '/quizzes/fantasy/questions' => "quizzes#fantasy_questions"
    get '/quizzes/horror/questions' => "quizzes#horror_questions"
    get '/quizzes/fps/questions' => "quizzes#fps_questions"
    get '/quizzes/rpg/questions' => "quizzes#rpg_questions"
    get '/quizzes/fighter/questions' => "quizzes#fighter_questions"

  # Quiz Answers Routes
  get '/quizzes/football/questions/answers' => "quizzes#football_answers"
  get '/quizzes/basketball/questions/answers' => "quizzes#basketball_answers"
  get '/quizzes/soccer/questions/answers' => "quizzes#soccer_answers"
  get '/quizzes/action/questions/answers' => "quizzes#action_answers"
  get '/quizzes/fantasy/questions/answers' => "quizzes#fantasy_answers"
  get '/quizzes/horror/questions/answers' => "quizzes#horror_answers"
  get '/quizzes/fps/questions/answers' => "quizzes#fps_answers"
  get '/quizzes/rpg/questions/answers' => "quizzes#rpg_answers"
  get '/quizzes/fighter/questions/answers' => "quizzes#fighter_answers"

# Finished Quizzes
get '/finishedquizzes' => "finishedquizzes#index"
delete '/finishedquizzes/:id' => "finishedquizzes#destroy"
post '/finishedquizzes' => "finishedquizzes#create"

end

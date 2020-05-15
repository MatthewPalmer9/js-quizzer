class QuizzesController < ApplicationController
    def index 
        render :json => Quiz.all.to_json(:except => [:created_at, :updated_at])
    end 

    def football 
        render :json => Quiz.where(:subcategory_id => 1).to_json(:except => [:created_at, :updated_at])
    end

    def football_questions
        render :json => Question.where(:subcategory_id => 1).to_json(:except => [:created_at, :updated_at])
    end 

    def football_answers
        render :json => Answer.where(:quiz_id => 1).to_json(:except => [:created_at, :updated_at])
    end 

    def basketball
        render :json => Quiz.where(:subcategory_id => 2).to_json(:except => [:created_at, :updated_at])
    end 

    def basketball_questions
        render :json => Question.where(:subcategory_id => 2).to_json(:except => [:created_at, :updated_at])
    end 

    def basketball_answers
        render :json => Answer.where(:quiz_id => 2).to_json(:except => [:created_at, :updated_at])
    end 

    def soccer
        render :json => Quiz.where(:subcategory_id => 3).to_json(:except => [:created_at, :updated_at])
    end 

    def soccer_questions
        render :json => Question.where(:subcategory_id => 3).to_json(:except => [:created_at, :updated_at])
    end 

    def soccer_answers
        render :json => Answer.where(:quiz_id => 3).to_json(:except => [:created_at, :updated_at])
    end 

    def action
        render :json => Quiz.where(:subcategory_id => 4).to_json(:except => [:created_at, :updated_at])
    end

    def action_questions
        render :json => Question.where(:subcategory_id => 4).to_json(:except => [:created_at, :updated_at])
    end 

    def action_answers
        render :json => Answer.where(:quiz_id => 4).to_json(:except => [:created_at, :updated_at])
    end 

    def fantasy
        render :json => Quiz.where(:subcategory_id => 5).to_json(:except => [:created_at, :updated_at])
    end
    
    def fantasy_questions
        render :json => Question.where(:subcategory_id => 5).to_json(:except => [:created_at, :updated_at])
    end 

    def fantasy_answers
        render :json => Answer.where(:quiz_id => 5).to_json(:except => [:created_at, :updated_at])
    end 

    def horror
        render :json => Quiz.where(:subcategory_id => 6).to_json(:except => [:created_at, :updated_at])
    end 

    def horror_questions
        render :json => Question.where(:subcategory_id => 6).to_json(:except => [:created_at, :updated_at])
    end 

    def horror_answers
        render :json => Answer.where(:quiz_id => 6).to_json(:except => [:created_at, :updated_at])
    end 

    def fps
        render :json => Quiz.where(:subcategory_id => 7).to_json(:except => [:created_at, :updated_at])
    end 

    def fps_questions
        render :json => Question.where(:subcategory_id => 7).to_json(:except => [:created_at, :updated_at])
    end 

    def fps_answers
        render :json => Answer.where(:quiz_id => 7).to_json(:except => [:created_at, :updated_at])
    end 

    def rpg
        render :json => Quiz.where(:subcategory_id => 8).to_json(:except => [:created_at, :updated_at])
    end 

    def rpg_questions
        render :json => Question.where(:subcategory_id => 8).to_json(:except => [:created_at, :updated_at])
    end 

    def rpg_answers
        render :json => Answer.where(:quiz_id => 8).to_json(:except => [:created_at, :updated_at])
    end 

    def fighter
        render :json => Quiz.where(:subcategory_id => 9).to_json(:except => [:created_at, :updated_at])
    end

    def fighter_questions
        render :json => Question.where(:subcategory_id => 9).to_json(:except => [:created_at, :updated_at])
    end 

    def fighter_answers
        render :json => Answer.where(:quiz_id => 9).to_json(:except => [:created_at, :updated_at])
    end 
end

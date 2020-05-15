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
end

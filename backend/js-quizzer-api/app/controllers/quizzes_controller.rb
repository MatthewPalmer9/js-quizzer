class QuizzesController < ApplicationController
    def index 
        render :json => Quiz.all.to_json(:except => [:created_at, :updated_at])
    end 

    def football 
        render :json => Quiz.where(:subcategory_id => 1).to_json(:except => [:created_at, :updated_at])
    end 

    def basketball
        render :json => Quiz.where(:subcategory_id => 2).to_json(:except => [:created_at, :updated_at])
    end 

    def soccer
        render :json => Quiz.where(:subcategory_id => 3).to_json(:except => [:created_at, :updated_at])
    end 
end

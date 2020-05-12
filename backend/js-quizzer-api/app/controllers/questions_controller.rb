class QuestionsController < ApplicationController
    def index 
        render :json => Question.all.to_json(:except => [:created_at, :updated_at])
    end 

    def football 
        render :json => Question.where(:subcategory_id => 1).to_json(:except => [:created_at, :updated_at])
    end 
end

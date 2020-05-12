class AnswersController < ApplicationController
    def index
        render :json => Answer.all.to_json(:except => [:created_at, :updated_at])
    end 

    def football 
        render :json => Answer.where(:quiz_id => 1).to_json(:except => [:created_at, :updated_at])
    end 
end

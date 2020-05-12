class QuestionsController < ApplicationController
    def index 
        render :json => Question.all.to_json(:except => [:created_at, :updated_at])
    end 
end

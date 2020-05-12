class AnswersController < ApplicationController
    def index
        render :json => Answer.all.to_json(:except => [:created_at, :updated_at])
    end 
end

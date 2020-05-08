class QuizzesController < ApplicationController
    def index 
        render :json => Quiz.all.to_json(:except => [:created_at, :updated_at])
    end 
end

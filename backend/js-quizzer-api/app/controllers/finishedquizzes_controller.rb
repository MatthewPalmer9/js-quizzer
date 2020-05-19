class FinishedquizzesController < ApplicationController
    def index
        render :json => Finishedquiz.all.to_json(:except => [:created_at, :updated_at])
    end

    def destroy
        Finishedquiz.find(params[:id]).destroy
        render :json => {id: params[:id]}
    end

    def create 
        Finishedquiz.create(name: params[:name])
    end 
end

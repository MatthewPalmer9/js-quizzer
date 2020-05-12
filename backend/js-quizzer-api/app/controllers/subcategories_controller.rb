class SubcategoriesController < ApplicationController
    def index
        render :json => Subcategory.all.to_json(:except => [:created_at, :updated_at])
    end 

    def sports
        render :json => Subcategory.where(:category_id => 1).to_json(:except => [:created_at, :updated_at])
    end 

    def movies
        render :json => Subcategory.where(:category_id => 2).to_json(:except => [:created_at, :updated_at])
    end 

    def video_games 
        render :json => Subcategory.where(:category_id => 3).to_json(:except => [:created_at, :updated_at])
    end 
end

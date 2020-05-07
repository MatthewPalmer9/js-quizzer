class Question < ApplicationRecord
    has_one :category
    has_one :subcategory 
    belongs_to :quiz
    has_one :answer
end

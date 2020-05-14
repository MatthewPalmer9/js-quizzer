class Quiz < ApplicationRecord
    has_many :questions
    has_many :answers, through: :questions
    has_one :category
    has_one :subcategory 
end

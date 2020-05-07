class Quiz < ApplicationRecord
    has_many :questions
    has_one :category
    has_one :subcategory 
end

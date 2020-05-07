class CreateQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :questions do |t|
      t.string :name
      t.integer :category_id
      t.integer :subcategory_id
      t.integer :quiz_id
      t.integer :answer_id

      t.timestamps
    end
  end
end

class CreateAnswers < ActiveRecord::Migration[6.0]
  def change
    create_table :answers do |t|
      t.string :description
      t.integer :question_id
      t.integer :quiz_id 

      t.timestamps
    end
  end
end

class CreateFinishedquizzes < ActiveRecord::Migration[6.0]
  def change
    create_table :finishedquizzes do |t|
      t.string :name

      t.timestamps
    end
  end
end

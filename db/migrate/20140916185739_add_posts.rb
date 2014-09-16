class AddPosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.text :problem
      t.integer :user_id
      t.date :date
      t.text :location  
      t.timestamps
    end
  end
end

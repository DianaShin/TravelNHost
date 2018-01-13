class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.string :title, null: false
      t.string :body, null: false
      t.integer :host_id, null: false
      t.integer :guest_id, null: false

      t.timestamps
    end
    add_index :reviews, :host_id
  end
end

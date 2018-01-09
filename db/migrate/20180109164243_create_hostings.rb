class CreateHostings < ActiveRecord::Migration[5.1]
  def change
    create_table :hostings do |t|
      t.integer :host_id, null: false
      t.integer :guest_id, null: false
      t.integer :destination_id, null: false
      t.string :status, null: false

      t.timestamps
    end
      add_index :hostings, :host_id, unique: true
      add_index :hostings, :guest_id, unique: true
      add_index :hostings, :destination_id
  end
end

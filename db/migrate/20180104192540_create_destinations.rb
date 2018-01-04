class CreateDestinations < ActiveRecord::Migration[5.1]
  def change
    create_table :destinations do |t|
      t.string :name, null: false
      t.string :country, null: false
      t.float :lat, null: false
      t.float :long, null: false
      t.timestamps
    end
  end
end

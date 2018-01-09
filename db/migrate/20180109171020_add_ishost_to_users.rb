class AddIshostToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :isHost, :boolean, default: true
  end
end

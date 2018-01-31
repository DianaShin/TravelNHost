class AddDefaultValueToUsers < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :first_name, :string, default: ""
    change_column :users, :first_name, :string, default: ""
  end
end

class AddDefaultToStatusForHostings < ActiveRecord::Migration[5.1]
  def change
    change_column :hostings, :status, :string, default: "pending"
  end
end

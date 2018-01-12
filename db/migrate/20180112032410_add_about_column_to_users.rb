class AddAboutColumnToUsers < ActiveRecord::Migration[5.1]
  def change
      add_column :users, :about, :text, default: "I love to travel, meet locals, and be hospitable!"
  end
end

class AddStartDateAndEndDateToHostings < ActiveRecord::Migration[5.1]
  def change
      add_column :hostings, :start_date, :date
      add_column :hostings, :end_date, :date 
  end
end

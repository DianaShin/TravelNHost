class AddIndexOnHostIdGuestIdWithoutUniquessConstraint < ActiveRecord::Migration[5.1]
  def change
    add_index :hostings, :guest_id
    add_index :hostings, :host_id 
  end
end

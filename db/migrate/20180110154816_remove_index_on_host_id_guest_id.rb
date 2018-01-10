class RemoveIndexOnHostIdGuestId < ActiveRecord::Migration[5.1]
  def change
    remove_index :hostings, :guest_id
    remove_index :hostings, :host_id 
  end
end

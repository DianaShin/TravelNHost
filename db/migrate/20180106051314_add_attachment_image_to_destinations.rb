class AddAttachmentImageToDestinations < ActiveRecord::Migration[5.1]
  def self.up
    change_table :destinations do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :destinations, :image
  end
end

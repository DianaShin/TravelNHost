class Destination < ApplicationRecord
  validates :name, :country, :lat, :long, :image_url, :hero_url, presence: true
  has_many :users

  has_attached_file :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*Z/
end

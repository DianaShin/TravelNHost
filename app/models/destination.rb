class Destination < ApplicationRecord
  validates :name, :country, :lat, :long, presence: true
  has_many :users
end

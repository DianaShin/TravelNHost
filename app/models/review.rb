class Review < ApplicationRecord
  validates :title, :body, :host_id, :guest_id, presence: true

  belongs_to :guest,
    foreign_key: :guest_id,
    primary_key: :id,
    class_name: :User,
    optional: true

  belongs_to :host,
    foreign_key: :host_id,
    primary_key: :id,
    class_name: :User,
    optional: true

end

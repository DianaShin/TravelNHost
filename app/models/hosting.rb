class Hosting < ApplicationRecord
  STATUS_TYPES = %w(accepted pending declined).freeze
  validates :status, inclusion: STATUS_TYPES
  validates :host_id, :guest_id, :destination_id, :start_date, :end_date, presence: true

####
  belongs_to :host,
    foreign_key: :host_id,
    primary_key: :id,
    class_name: :User,
    optional: true

  belongs_to :guest,
    foreign_key: :guest_id,
    primary_key: :id,
    class_name: :User,
    optional: true

  def approve!
    raise 'not pending' unless self.status == 'pending'
    self.status = 'accepted'
    self.save!
  end

  def approved?
    self.status == 'accepted'
  end

  def deny!
    self.status = 'denied'
    self.save!
  end

  def denied?
    self.status == 'denied'
  end

  def pending?
    self.status == 'pending'
  end

end

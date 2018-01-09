class Hosting < ApplicationRecord
  STATUS_TYPES = %w(accepted pending declined).freeze
  validates :status, inclusion: STATUS_TYPES
  validates :host_id, :guest_id, :destination_id, :start_date, :end_date, presence: true
  validate :start_must_come_before_end

  belongs_to :host
  belongs_to :guest

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

  def hoster
    hosting.host_id = @current_user.id
  end

  def hosted
    hosting.guest_id = @current_user.id
  end 

  def start_must_come_before_end
    return if start_date < end_date
    errors[:start_date] << 'must come before end date'
    errors[:end_date] << 'must come after start date'
  end

end

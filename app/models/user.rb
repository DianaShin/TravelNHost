class User < ApplicationRecord
  attr_reader :password

  validates :username, :password_digest, :session_token, :first_name, :last_name, :lat, :lng, :gender, :age, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_attached_file :image, default_url: "profile.png"

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  belongs_to :destination, optional: true
  has_many :hostings,
    foreign_key: :host_id

  has_many :guested_hostings,
    foreign_key: :guest_id,
    class_name: :Hosting

  after_initialize :ensure_session_token

  ##Write a method for getting all of my guests and write a method for getting all of my upcoming travels.

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

   def all_hostings
     Hosting.where('hostings.host_id = ? or hostings.guest_id = ?', self.id, self.id)
   end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

end

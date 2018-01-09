json.host do
  @destination.users.each do |user|
      json.set! user.id do
        json.extract! user, :id, :username, :first_name, :last_name, :lat, :lng, :gender, :age
        json.image_url image_url(user.image.url)
      end
  end

# json.partial! '/api/destinations/destination', destination: @destination

json.destination do
  json.extract! @destination, :id, :long, :lat, :user_ids, :name, :country, :hero_url
end

json.hosts do
  @destination.users.each do |user|
      json.set! user.id do
        json.extract! user, :id, :username, :first_name, :last_name
      end
  end
end

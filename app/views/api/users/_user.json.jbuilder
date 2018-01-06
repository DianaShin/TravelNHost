# json.extract! user, :username, :id
json.username user.username
json.id user.id
json.first_name user.first_name
json.last_name user.last_name
json.destination_id user.destination_id
json.image_url asset_path(user.image.url)

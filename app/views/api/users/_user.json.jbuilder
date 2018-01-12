# json.extract! user, :username, :id
json.username user.username
json.id user.id
json.first_name user.first_name
json.last_name user.last_name
json.destination_id user.destination_id
json.image_url asset_path(user.image.url)
json.age user.age
json.gender user.gender
json.destination user.destination
json.hosting_ids user.all_hostings.ids
json.about user.about


##For hosts show page, because fetchHost goes through /api/users GET, this is what is rendered on Host Show page

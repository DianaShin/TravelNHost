json.extract! review, :id, :host_id, :guest_id, :title, :body
guest = review.guest

json.author_name guest.first_name.concat(' ').concat(guest.last_name)
json.author_location guest.destination.name.concat(', ').concat(guest.destination.country)
json.author_id guest.id

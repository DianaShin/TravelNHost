@destinations.each do |destination|
  json.set! destination.id do
    json.partial! 'destination', destination: destination
  end
end

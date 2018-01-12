json.hostings do
  @hostings.each do |hosting|
    json.set! hosting.id do
      json.extract! hosting, :host_id, :guest_id, :start_date, :end_date, :status, :destination_id
    end
  end
end

json.guests do
  @hostings.map(&:guest).each do |guest|
    json.set! guest.id do
      json.extract! guest, :first_name, :last_name, :destination_id
    end
  end
end

json.hosts do
  @hostings.map(&:host).each do |host|
    json.set! host.id do
      json.extract! host, :first_name, :last_name
    end
  end
end

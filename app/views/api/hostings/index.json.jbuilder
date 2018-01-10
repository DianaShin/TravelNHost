@hostings.each do |hosting|
  json.set! hosting.id do
    json.extract! hosting, :host_id, :guest_id, :start_date, :end_date, :status
  end
end

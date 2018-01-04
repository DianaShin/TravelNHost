# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# t.string :name, null: false
# t.string :country, null: false
# t.float :lat, null: false
# t.float :long, null: false

Destination.delete_all

User.delete_all

Destination.create!(
  name: 'Istanbul',
  country: 'Turkey',
  lat: 41.0442095,
  long: 28.9679681
)

Destination.create!(
  name: 'Cappadocia',
  country: 'Turkey',
  lat: 38.6418462,
  long: 33.7107975
)

Destination.create!(
  name: 'Dubrovnik',
  country: 'Croatia',
  lat: 42.645815,
  long: 18.0590277
)

Destination.create!(
  name: 'Chefchaouen',
  country: 'Morocco',
  lat: 35.1710529,
  long: -6.3915866
)

Destination.create!(
  name: 'Mostar',
  country: 'Bosnia and Herzegovina',
  lat: 43.3396111,
  long: 17.786221
)

Destination.create!(
  name: 'Granada',
  country: 'Spain',
  lat: 37.1810095,
  long: -3.6262913
)

Destination.create!(
  name: 'Barcelona',
  country: 'Spain',
  lat: 41.3948976,
  long: 2.0787276
)

Destination.create!(
  name: 'Cairo',
  country: 'Egypt',
  lat: 30.0596185,
  long: 31.1884238
)

Destination.create!(
  name: 'Petra',
  country: 'Jordan',
  lat: 30.328459,
  long: 35.4421735
)

Destination.create!(
  name: 'Sarajevo',
  country: 'Bosnia and Herzegovina',
  lat: 43.8938852,
  long: 18.2429066
)

Destination.create!(
  name: 'Marrakesh',
  country: 'Morocco',
  lat: 31.6347485,
  long: -8.0778936
)

Destination.create!(
  name: 'Prague',
  country: 'Czech Republic',
  lat: 50.0598058,
  long: 14.32554
)

Destination.create!(
  name: 'London',
  country: 'United Kingdom',
  lat: 51.5287352,
  long: -0.3817816
)

Destination.create!(
  name: 'Venice',
  country: 'Italy',
  lat: 45.4546252,
  long: 11.9716646
)

Destination.create!(
  name: 'Copenhagen',
  country: 'Denmark',
  lat: 55.6713812,
  long: 12.4537409
)

Destination.create!(
  name: 'Amsterdam',
  country: 'Netherlands',
  lat: 52.354775,
  long: 4.7585395
)

Destination.create!(
  name: 'Stockholm',
  country: 'Sweden',
  lat: 59.326242,
  long: 17.8419701
)

User.create!(
  username: 'guest',
  password: 'password'
)

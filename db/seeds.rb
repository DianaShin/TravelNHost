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

Destination.destroy_all
User.destroy_all

Istanbul = Destination.create!(
  name: 'Istanbul',
  country: 'Turkey',
  lat: 41.0442095,
  long: 28.9679681
)

Cappadocia = Destination.create!(
  name: 'Cappadocia',
  country: 'Turkey',
  lat: 38.6418462,
  long: 33.7107975
)

Dubrovnik = Destination.create!(
  name: 'Dubrovnik',
  country: 'Croatia',
  lat: 42.645815,
  long: 18.0590277
)

Chefchaouen = Destination.create!(
  name: 'Chefchaouen',
  country: 'Morocco',
  lat: 35.1710529,
  long: -6.3915866
)

Mostar = Destination.create!(
  name: 'Mostar',
  country: 'Bosnia and Herzegovina',
  lat: 43.3396111,
  long: 17.786221
)

Granada = Destination.create!(
  name: 'Granada',
  country: 'Spain',
  lat: 37.1810095,
  long: -3.6262913
)

Barcelona = Destination.create!(
  name: 'Barcelona',
  country: 'Spain',
  lat: 41.3948976,
  long: 2.0787276
)

Cairo = Destination.create!(
  name: 'Cairo',
  country: 'Egypt',
  lat: 30.0596185,
  long: 31.1884238
)

Petra = Destination.create!(
  name: 'Petra',
  country: 'Jordan',
  lat: 30.328459,
  long: 35.4421735
)

Sarajevo = Destination.create!(
  name: 'Sarajevo',
  country: 'Bosnia and Herzegovina',
  lat: 43.8938852,
  long: 18.2429066
)

Marrakesh = Destination.create!(
  name: 'Marrakesh',
  country: 'Morocco',
  lat: 31.6347485,
  long: -8.0778936
)

Prague = Destination.create!(
  name: 'Prague',
  country: 'Czech Republic',
  lat: 50.0598058,
  long: 14.32554
)

London = Destination.create!(
  name: 'London',
  country: 'United Kingdom',
  lat: 51.5287352,
  long: -0.3817816
)

Venice = Destination.create!(
  name: 'Venice',
  country: 'Italy',
  lat: 45.4546252,
  long: 11.9716646
)

Copenhagen = Destination.create!(
  name: 'Copenhagen',
  country: 'Denmark',
  lat: 55.6713812,
  long: 12.4537409
)

Amsterdam = Destination.create!(
  name: 'Amsterdam',
  country: 'Netherlands',
  lat: 52.354775,
  long: 4.7585395
)

Stockhom = Destination.create!(
  name: 'Stockholm',
  country: 'Sweden',
  lat: 59.326242,
  long: 17.8419701
)



##### Need to figure out whether to just update User model or create a new Host model

## need to add image_url later
Mehmet = User.create!(
  username: 'mehmet',
  password: 'Istanbul',
  destination_id: Istanbul.id,
  first_name: 'Mehmet',
  last_name: 'Gunsur',
  # isHost: true,
  # hostRating: 0,
  # imageUrl:
  # gender: 'male',
  # age: 38,
  # about: "Come visit! I can teach you all about Ottoman history and show you around the world's most beautiful city."
)

Mustafa = User.create!(
  username: 'mustafa',
  password: 'Istanbul',
  destination_id: Istanbul.id,
  first_name: 'Mustafa',
  last_name: 'Akkaya',
  # isHost: true,
  # hostRating: 0,
  # imageUrl:
  # gender: 'male',
  # age: 28,
  # about: "I'm an engineer by day, and a musician by night. If you stay with me, we can hop around the hottest music venues in the city."
)

Nilufer = User.create!(
  username: 'nilufer',
  password: 'Istanbul',
  destination_id: Istanbul.id,
  first_name: 'Nilufer',
  last_name: 'Karagul',
  # isHost: true,
  # hostRating: 0,
  # imageUrl:
  # gender: 'female',
  # age: 26,
  # about: "I'm a student at Bogazici University, and would love to make friends from around the world."
)

Nejla = User.create!(
  username: 'nejla',
  password: 'Istanbul',
  destination_id: Istanbul.id,
  first_name: 'Nejla',
  last_name: 'Kahveci',
  # isHost: true,
  # hostRating: 0,
  # imageUrl:
  # gender: 'female',
  # age: 26,
  # about: "I'm a student at Bogazici University, and would love to make friends from around the world."
)

Burak = User.create!(
  username: 'burak',
  password: 'Istanbul',
  destination_id: Istanbul.id,
  first_name: 'Burak',
  last_name: 'Gulluoglu',
  # isHost: true,
  # hostRating: 0,
  # imageUrl:
  # gender: 'male',
  # age: 22,
  # about: "Last year, I spent a semester in London at UCL through the ESN network, and I want to keep practicing my English."
)

Aylin = User.create!(
  username: 'aylin',
  password: 'Istanbul',
  destination_id: Istanbul.id,
  first_name: 'Aylin',
  last_name: 'Adalet',
  # isHost: true,
  # hostRating: 0,
  # imageUrl:
  # gender: 'female',
  # age: 26,
  # about: "I'm a student at Bogazici University, and would love to make friends from around the world."
)

###

Omar = User.create!(
  username: 'omar',
  password: 'petra1',
  destination_id: Istanbul.id,
  first_name: 'Omar',
  last_name: 'Sharif',
  # isHost: true,
  # hostRating: 0,
  # imageUrl:
  # gender: 'male',
  # age: 26,
  # about: "Petra is Jordan's greatest treasure. Come check it out. You'll feel like Indiana Jones."
)

Mohammad = User.create!(
  username: 'mohammad',
  password: 'petra1',
  destination_id: Istanbul.id,
  first_name: 'Mohammad',
  last_name: 'Ahmad',
  # isHost: true,
  # hostRating: 0,
  # imageUrl:
  # gender: 'male',
  # age: 23,
  # about: "Don't just come to Petra to ride a camel. Experience real Bedouin life when you visit Petra."
)

Wael = User.create!(
  username: 'wael',
  password: 'petra1',
  destination_id: Istanbul.id,
  first_name: 'Wael',
  last_name: 'Shaker',
  # isHost: true,
  # hostRating: 0,
  # imageUrl:
  # gender: 'male',
  # age: 25,
  # about: "Don't just come to Petra to ride a camel. Experience real Bedouin life."
)

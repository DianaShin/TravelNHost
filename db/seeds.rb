# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Destination.destroy_all
User.destroy_all
Hosting.destroy_all

Istanbul = Destination.create!(
  name: 'Istanbul',
  country: 'Turkey',
  lat: 41.0442095,
  long: 28.9679681,
  image_url: "https://s3.amazonaws.com/travelnhost/homeIndexPhotos/Istanbul4.jpg",
  hero_url: "https://s3.amazonaws.com/travelnhost/DestinationShowPageHeros/IstanbulHero2.png"
)

Cappadocia = Destination.create!(
  name: 'Cappadocia',
  country: 'Turkey',
  lat: 38.6418462,
  long: 34.691322,
  image_url: "https://s3.amazonaws.com/travelnhost/homeIndexPhotos/cappadocia.jpg",
  hero_url: "https://s3.amazonaws.com/travelnhost/DestinationShowPageHeros/CappadociaHero2.png"
)

Dubrovnik = Destination.create!(
  name: 'Dubrovnik',
  country: 'Croatia',
  lat: 42.645815,
  long: 18.0590277,
  image_url: "https://s3.amazonaws.com/travelnhost/homeIndexPhotos/dubrovnik.jpg",
  hero_url: "https://s3.amazonaws.com/travelnhost/DestinationShowPageHeros/DubrovnikHero-01.png"
)

Chefchaouen = Destination.create!(
  name: 'Chefchaouen',
  country: 'Morocco',
  lat: 35.1672641,
  long: -5.2729123,
  image_url: "https://s3.amazonaws.com/travelnhost/homeIndexPhotos/Chefchaouen-Morocco-2.jpg",
  hero_url: "https://s3.amazonaws.com/travelnhost/DestinationShowPageHeros/chefchaouenHero-01.png"
)

Mostar = Destination.create!(
  name: 'Mostar',
  country: 'Bosnia and Herzegovina',
  lat: 43.3396111,
  long: 17.786221,
  image_url: "https://s3.amazonaws.com/travelnhost/homeIndexPhotos/mostar.jpg",
  hero_url: "https://s3.amazonaws.com/travelnhost/DestinationShowPageHeros/MostarHero-01.png"
)

Granada = Destination.create!(
  name: 'Granada',
  country: 'Spain',
  lat: 37.1810095,
  long: -3.6262913,
  image_url: "https://s3.amazonaws.com/travelnhost/homeIndexPhotos/granada.jpg",
  hero_url: "https://s3.amazonaws.com/travelnhost/DestinationShowPageHeros/GranadaHero-01.png"
)

Barcelona = Destination.create!(
  name: 'Barcelona',
  country: 'Spain',
  lat: 41.3948976,
  long: 2.0787276,
  image_url: "https://s3.amazonaws.com/travelnhost/homeIndexPhotos/Barcelona_cropped2.jpg",
  hero_url: "https://s3.amazonaws.com/travelnhost/DestinationShowPageHeros/BarcelonaHero-01.png"
)

Cairo = Destination.create!(
  name: 'Cairo',
  country: 'Egypt',
  lat: 30.0596185,
  long: 31.1884238,
  image_url: "https://s3.amazonaws.com/travelnhost/homeIndexPhotos/pyramids.jpg",
  hero_url: "https://s3.amazonaws.com/travelnhost/DestinationShowPageHeros/CairoHero-01.png"
)

Petra = Destination.create!(
  name: 'Petra',
  country: 'Jordan',
  lat: 30.328459,
  long: 35.4421735,
  image_url: "https://s3.amazonaws.com/travelnhost/homeIndexPhotos/Petra_camel.jpg",
  hero_url: "https://s3.amazonaws.com/travelnhost/DestinationShowPageHeros/petra-01.png"
)

Sarajevo = Destination.create!(
  name: 'Sarajevo',
  country: 'Bosnia and Herzegovina',
  lat: 43.8938852,
  long: 18.2429066,
  image_url: "https://s3.amazonaws.com/travelnhost/homeIndexPhotos/sarajevo4.jpg",
  hero_url: "https://s3.amazonaws.com/travelnhost/DestinationShowPageHeros/sarajevo-01.png"
)

Marrakesh = Destination.create!(
  name: 'Marrakesh',
  country: 'Morocco',
  lat: 31.6347485,
  long: -8.0778936,
  image_url: "https://s3.amazonaws.com/travelnhost/homeIndexPhotos/Marrakech-shop-souk-xlarge.jpg",
  hero_url: "https://s3.amazonaws.com/travelnhost/DestinationShowPageHeros/marrakesh-01.png"
)

Prague = Destination.create!(
  name: 'Prague',
  country: 'Czech Republic',
  lat: 50.0598058,
  long: 14.32554,
  image_url: "https://s3.amazonaws.com/travelnhost/homeIndexPhotos/Prague1.jpg",
  hero_url: "https://s3.amazonaws.com/travelnhost/DestinationShowPageHeros/PragueHero-01.png"
)

London = Destination.create!(
  name: 'London',
  country: 'United Kingdom',
  lat: 51.5287352,
  long: -0.3817816,
  image_url: "https://s3.amazonaws.com/travelnhost/homeIndexPhotos/big-ben-at-night-01.jpg",
  hero_url: "https://s3.amazonaws.com/travelnhost/DestinationShowPageHeros/London-01.png"
)

Venice = Destination.create!(
  name: 'Venice',
  country: 'Italy',
  lat: 45.445707,
  long: 12.3026352,
  image_url: "https://s3.amazonaws.com/travelnhost/homeIndexPhotos/venice9.jpg",
  hero_url: "https://s3.amazonaws.com/travelnhost/DestinationShowPageHeros/VeniceHero-01.png"
)

Copenhagen = Destination.create!(
  name: 'Copenhagen',
  country: 'Denmark',
  lat: 55.6713812,
  long: 12.4537409,
  image_url: "https://s3.amazonaws.com/travelnhost/homeIndexPhotos/copenhagen_cropped3.jpg",
  hero_url: "https://s3.amazonaws.com/travelnhost/DestinationShowPageHeros/CopenhagenHero-01.png"
)

Amsterdam = Destination.create!(
  name: 'Amsterdam',
  country: 'Netherlands',
  lat: 52.354775,
  long: 4.7585395,
  image_url: "https://s3.amazonaws.com/travelnhost/homeIndexPhotos/amsterdam2.jpg",
  hero_url: "https://s3.amazonaws.com/travelnhost/DestinationShowPageHeros/AmsterdamHero-01.png"
)

Stockholm = Destination.create!(
  name: 'Stockholm',
  country: 'Sweden',
  lat: 59.326242,
  long: 17.8419701,
  image_url: "https://s3.amazonaws.com/travelnhost/DestinationShowPageHeros/stockholm_final_cover2.jpg",
  hero_url: "https://s3.amazonaws.com/travelnhost/DestinationShowPageHeros/stockholm_final_cover2.jpg"
)

## Users
Mehmet = User.create!(
  username: 'mehmet',
  password: 'Istanbul',
  destination_id: Istanbul.id,
  first_name: 'Mehmet',
  last_name: 'Akkaya',
  lat: 41.0678203,
  lng: 29.0310582,
  age: 28,
  gender: 'male',
  about: "I'm an engineer by day, and a musician by night. If you stay with me, we can hop around the hottest music venues in the city."
)

Mustafa = User.create!(
  username: 'mustafa',
  password: 'Istanbul',
  destination_id: Istanbul.id,
  first_name: 'Mustafa',
  last_name: 'Gunsur',
  lat: 41.0557022,
  lng: 29.0043005,
  age: 38,
  gender: 'male',
  about: "Come visit! I can teach you all about Ottoman history and show you around the world's most beautiful city."
)

Nilufer = User.create!(
  username: 'nilufer',
  password: 'Istanbul',
  destination_id: Istanbul.id,
  first_name: 'Nilufer',
  last_name: 'Karagul',
  lat: 41.0055005,
  lng: 28.7319908,
  age: 24,
  gender: 'female',
  about: "I'm a student at Bogazici University, and would love to make friends from around the world.",
)

Nejla = User.create!(
  username: 'nejla',
  password: 'Istanbul',
  destination_id: Istanbul.id,
  first_name: 'Nejla',
  last_name: 'Kahveci',
  lat: 41.0368836,
  lng: 28.9675821,
  age: 27,
  gender: 'female',
  about: "I'm a student at Bogazici University, and would love to make friends from around the world.",
)

Burak = User.create!(
  username: 'burak',
  password: 'Istanbul',
  destination_id: Istanbul.id,
  first_name: 'Burak',
  last_name: 'Gulluoglu',
  lat: 41.0322513,
  lng: 29.0231618,
  age: 27,
  gender: 'male',
  about: "Last year, I spent a semester in London at UCL through the ESN network, and I want to keep practicing my English."
)

Aylin = User.create!(
  username: 'aylin',
  password: 'Istanbul',
  destination_id: Istanbul.id,
  first_name: 'Aylin',
  last_name: 'Adalet',
  lat: 41.0001384,
  lng: 29.0182612,
  age: 29,
  gender: 'female',
  about: "I'm a student at Bogazici University, and would love to make friends from around the world.",
)

## Cappadocia
Guney = User.create!(
  username: 'guney',
  password: 'Cappadocia',
  destination_id: Cappadocia.id,
  first_name: 'Guney',
  last_name: 'Gulluoglu',
  lat: 38.6418462,
  lng: 34.691322,
  age: 29,
  gender: 'male',
  about: "Last year, I spent a semester in London at UCL through the ESN network, and I want to keep practicing my English."
)

Kuzey = User.create!(
  username: 'kuzey',
  password: 'Cappadocia',
  destination_id: Cappadocia.id,
  first_name: 'Kuzey',
  last_name: 'Simitci',
  lat: 38.6418462,
  lng: 34.691322,
  age: 24,
  gender: 'male'
)

Semra = User.create!(
  username: 'semra',
  password: 'Cappadocia',
  destination_id: Cappadocia.id,
  first_name: 'Semra',
  last_name: 'Kestaneci',
  lat: 38.6516835,
  lng: 34.8187001,
  age: 31,
  gender: 'female',
)

##Dubrovnik
Dario = User.create!(
  username: 'dario',
  password: 'Dubrovnik',
  destination_id: Dubrovnik.id,
  first_name: 'Dario',
  last_name: 'Rajcevic',
  lat: 42.6512758,
  lng: 18.0773955,
  age: 26,
  gender: 'male',
  about: "Especially if you are not a Game of Thrones fans, please feel free to make a hosting request."
)

Vlado = User.create!(
  username: 'vlado',
  password: 'Dubrovnik',
  destination_id: Dubrovnik.id,
  first_name: 'Vlado',
  last_name: 'Bozic',
  lat: 42.6512758,
  lng: 18.0773955,
  age: 34,
  gender: 'male'
)

Nina = User.create!(
  username: 'nina',
  password: 'Dubrovnik',
  destination_id: Dubrovnik.id,
  first_name: 'Nina',
  last_name: 'Skaro',
  lat: 42.6512758,
  lng: 18.0773955,
  age: 35,
  gender: 'female',
)

##Chefchaouen
Wafa = User.create!(
  username: 'wafa',
  password: 'chefchaouen',
  destination_id: Chefchaouen.id,
  first_name: 'Wafa',
  last_name: 'AlAdwan',
  lat: 35.1710528,
  lng: -5.3060858,
  age: 35,
  gender: 'female',
)

Saafa = User.create!(
  username: 'saafa',
  password: 'chefchaouen',
  destination_id: Chefchaouen.id,
  first_name: 'Safaa',
  last_name: 'Sukkar',
  lat: 35.1707196,
  lng: -5.3261917,
  age: 25,
  gender: 'female',
)

Abdu = User.create!(
  username: 'abdu',
  password: 'chefchaouen',
  destination_id: Chefchaouen.id,
  first_name: 'Abdu',
  last_name: 'AlMajnun',
  lat: 35.1707196,
  lng: -5.2999275,
  age: 42,
  gender: 'male'
)

##Mostar
Atila = User.create!(
  username: 'atila',
  password: 'Mostar1',
  destination_id: Mostar.id,
  first_name: 'Atila',
  last_name: 'Alikalfic',
  lat: 43.3365866,
  lng: 17.8028507,
  age: 35,
  gender: 'male'
)

Adel = User.create!(
  username: 'adel',
  password: 'Mostar1',
  destination_id: Mostar.id,
  first_name: 'Adel',
  last_name: 'Hajdarovic',
  lat: 43.3434344,
  lng: 17.8039236,
  age: 25,
  gender: 'male'
)

Emil = User.create!(
  username: 'emil',
  password: 'Mostar1',
  destination_id: Mostar.id,
  first_name: 'Emil',
  last_name: 'Alikalfic',
  lat: 43.3578675,
  lng: 17.7893968,
  age: 25,
  gender: 'male'
)

Selma = User.create!(
  username: 'selma',
  password: 'Mostar1',
  destination_id: Mostar.id,
  first_name: 'Selma',
  last_name: 'Sosic',
  lat: 43.3452251,
  lng: 17.812276,
  age: 30,
  gender: 'female',
)

Isabelle = User.create!(
  username: 'isabelle',
  password: 'Granada',
  destination_id: Granada.id,
  first_name: 'Isabelle',
  last_name: 'Caballes',
  lat: 37.2015731,
  lng: -3.615026,
  age: 22,
  gender: 'female',
  about: "I love hosting guests! Don't forget to book your tickets to the AlHambra in advance!",
)

Juan = User.create!(
  username: 'juan',
  password: 'Granada',
  destination_id: Granada.id,
  first_name: 'Juan',
  last_name: 'Sanchez',
  lat: 37.1985479,
  lng: -3.639123,
  age: 27,
  gender: 'male'
)

Marco = User.create!(
  username: 'marco',
  password: 'Granada',
  destination_id: Granada.id,
  first_name: 'Marco',
  last_name: 'Fernandez',
  lat: 37.1810095,
  lng: -3.6263771,
  age: 27,
  gender: 'male'
)


Mariam = User.create!(
  username: 'mariam',
  password: 'Barcelona',
  destination_id: Barcelona.id,
  first_name: 'Mariam',
  last_name: 'Fernandez',
  lat: 41.4474166,
  lng: 2.1031037,
  age: 26,
  gender: 'female',
)

Sergio = User.create!(
  username: 'sergio',
  password: 'Barcelona',
  destination_id: Barcelona.id,
  first_name: 'Sergio',
  last_name: 'Polanco',
  lat: 41.3838863,
  lng: 2.1433583,
  age: 26,
  gender: 'male'
)

##Cario
Samer = User.create!(
  username: 'samer',
  password: 'cairo1',
  destination_id: Cairo.id,
  first_name: 'Samer',
  last_name: 'Tantawi',
  lat: 30.0259935,
  lng: 31.2083721,
  age: 26,
  gender: 'male'
)

Layla = User.create!(
  username: 'layla',
  password: 'cairo1',
  destination_id: Cairo.id,
  first_name: 'Layla',
  last_name: 'Masri',
  lat: 30.068572,
  lng: 31.2566549,
  age: 22,
  gender: 'female',
)

Qais = User.create!(
 username: 'qias',
 password: 'cairo1',
 destination_id: Cairo.id,
 first_name: 'Qais',
 last_name: 'AbdelRazaq',
 lat: 30.0372055,
 lng: 31.2183856,
 age: 26,
 gender: 'male'
)

Nada = User.create!(
 username: 'nada',
 password: 'cairo1',
 destination_id: Cairo.id,
 first_name: 'Nada',
 last_name: 'AlHussein',
 lat: 30.0287697,
 lng: 31.2347881,
 age: 22,
 gender: 'female',
)

## Petra

Ramzi = User.create!(
 username: 'ramzi',
 password: 'petra1',
 destination_id: Petra.id,
 first_name: 'Ramzi',
 last_name: 'AlHussein',
 lat: 30.3342374,
 lng: 35.4220409,
 age: 22,
 gender: 'male',
 about: "Don't just come to Petra to ride a camel. Experience real Bedouin life."
)

Omar = User.create!(
  username: 'omar',
  password: 'petra1',
  destination_id: Petra.id,
  first_name: 'Omar',
  last_name: 'Sharif',
  lat: 30.3210225,
  lng: 35.460611,
  age: 23,
  gender: 'male',
  about: "Petra is Jordan's greatest treasure. Come check it out. You'll feel like Indiana Jones."
)

Mohammad = User.create!(
  username: 'mohammad',
  password: 'petra1',
  destination_id: Petra.id,
  first_name: 'Mohammad',
  last_name: 'Ahmad',
  lat: 30.2849946,
  lng: 35.1650836,
  age: 25,
  gender: 'male',
  about: "Ahlan wa sahlan! All are welcome to Petra!"
)

Wael = User.create!(
  username: 'wael',
  password: 'petra1',
  destination_id: Petra.id,
  first_name: 'Wael',
  last_name: 'Shaker',
  lat: 30.328459,
  lng: 35.4093433,
  age: 22,
  gender: 'male'
)

##Sarajevo

Drino = User.create!(
  username: 'drino',
  password: 'sarajevo',
  destination_id: Sarajevo.id,
  first_name: 'Drino',
  last_name: 'Galic',
  lat: 43.8918847,
  lng: 18.2425638,
  age: 22,
  gender: 'male'
)

Ahmet = User.create!(
  username: 'ahmet',
  password: 'sarajevo',
  destination_id: Sarajevo.id,
  first_name: 'Ahmet',
  last_name: 'Zakula',
  lat: 43.8938256,
  lng: 18.3129515,
  age: 26,
  gender: 'male'
)

Gulfem = User.create!(
  username: 'gulfem',
  password: 'sarajevo',
  destination_id: Sarajevo.id,
  first_name: 'Gulfem',
  last_name: 'Tekinoglu',
  lat: 43.8790385,
  lng: 18.2487436,
  age: 27,
  gender: 'female',
)

## Marrakesh

Abdessadek = User.create!(
  username: 'abdessadek',
  password: 'marrakesh',
  destination_id: Marrakesh.id,
  first_name: 'Abdessadek',
  last_name: 'Elfari',
  lat: 31.6286828,
  lng: -8.0711129,
  age: 27,
  gender: 'male',
  about: "If you come, I'll teach you how to make the best chicken tagine. "
)

Jameela = User.create!(
  username: 'jameela',
  password: 'marrakesh',
  destination_id: Marrakesh.id,
  first_name: 'Jameela',
  last_name: 'Tawfiq',
  lat: 31.6347485,
  lng: -8.0778935,
  age: 26,
  gender: 'female',
  about: "Come visit. Marrakesh is a magical city. I'll show you around.",
)

Rachid = User.create!(
  username: 'rachid',
  password: 'marrakesh',
  destination_id: Marrakesh.id,
  first_name: 'Rachid',
  last_name: 'Tantawi',
  lat: 31.6583494,
  lng: -8.0133488,
  age: 22,
  gender: 'male'
)


Faris = User.create!(
  username: 'faris',
  password: 'marrakesh',
  destination_id: Marrakesh.id,
  first_name: 'Faris',
  last_name: 'AbdelKader',
  lat: 31.5879308,
  lng: -8.0810263,
  age: 22,
  gender: 'male'
)

##Prague

Jirka = User.create!(
  username: 'jirka',
  password: 'prague',
  destination_id: Prague.id,
  first_name: 'Jirka',
  last_name: 'Benes',
  lat: 50.0598054,
  lng: 14.3251971,
  age: 26,
  gender: 'male'
)

Silvia = User.create!(
  username: 'silvia',
  password: 'prague',
  destination_id: Prague.id,
  first_name: 'Silvia',
  last_name: 'Fabbri',
  lat: 50.0510984,
  lng: 14.4537714,
  age: 26,
  gender: 'female',
)

Miguel = User.create!(
  username: 'miguel',
  password: 'prague',
  destination_id: Prague.id,
  first_name: 'Miguel',
  last_name: 'Doubek',
  lat: 50.0510984,
  lng: 14.3837336,
  age: 24,
  gender: 'male'
)

##London

Oliver = User.create!(
  username: 'oliver',
  password: 'london',
  destination_id: London.id,
  first_name: 'Oliver',
  last_name: 'Sullivan',
  lat: 51.4842251,
  lng: -0.2127482,
  age: 22,
  gender: 'male'
)

Emily = User.create!(
  username: 'emily',
  password: 'london',
  destination_id: London.id,
  first_name: 'Emily',
  last_name: 'Baker',
  lat: 51.5005156,
  lng: -0.1840896,
  age: 22,
  gender: 'female',
)

##Venice

Mario = User.create!(
  username: 'mario',
  password: 'venice',
  destination_id: Venice.id,
  first_name: 'Luigi',
  last_name: 'Saluggi',
  lat: 45.414208,
  lng: 12.3327858,
  age: 22,
  gender: 'male'
)


Luigi = User.create!(
  username: 'luigi',
  password: 'venice',
  destination_id: Venice.id,
  first_name: 'Luigi',
  last_name: 'Gelato',
  lat: 45.414208,
  lng: 12.3327858,
  age: 24,
  gender: 'male'
)

##Copenhagen

Mircea = User.create!(
  username: 'mircea',
  password: 'copenhagen',
  destination_id: Copenhagen.id,
  first_name: 'Mircea',
  last_name: 'Bardou',
  lat: 55.6713808,
  lng: 12.4533979,
  age: 22,
  gender: 'male'
)

Kasper = User.create!(
  username: 'kasper',
  password: 'copenhagen',
  destination_id: Copenhagen.id,
  first_name: 'Kasper',
  last_name: 'Nielsen',
  lat: 55.6414078,
  lng: 12.4933092,
  age: 27,
  gender: 'male'
)

Serge = User.create!(
  username: 'serge',
  password: 'amsterdam',
  destination_id: Amsterdam.id,
  first_name: 'Serge',
  last_name: 'Groot',
  lat: 52.3547746,
  lng: 4.7581966,
  age: 29,
  gender: 'male'
)

Miranda = User.create!(
  username: 'miranda',
  password: 'amsterdam',
  destination_id: Amsterdam.id,
  first_name: 'Miranda',
  last_name: 'Rakhorst',
  lat: 52.3418767,
  lng: 4.8088367,
  age: 28,
  gender: 'female',
)

##stockholm

Oskar = User.create!(
  username: 'oskar',
  password: 'stockholm',
  destination_id: Stockholm.id,
  first_name: 'Oskar',
  last_name: 'Ludvig',
  lat: 59.3238774,
  lng: 18.0326863,
  age: 22,
  gender: 'male'
)

Elsa = User.create!(
  username: 'elsa',
  password: 'stockholm',
  destination_id: Stockholm.id,
  first_name: 'Elsa',
  last_name: 'Erikkson',
  lat: 59.324797,
  lng: 18.024704,
  age: 27,
  gender: 'female',
)

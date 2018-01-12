# README


## [TravelNHost live](https://travelnhost.herokuapp.com/#/)

TravelNHost is a full-stack web application inspired by [Couchsurfing](https://www.couchsurfing.com). It is built with Ruby on Rails on the backend, a PostgreSQL database, and React/Redux on the frontend. No external libraries were used for styling this application; the look and feel of the website is my own. 

Please see [here](https://github.com/ayoung0131/TravelNHost/wiki) for design documentation. 

## Features 

* Authentication: Secure frontend to backend user authentication using BCrypt.
* Search destinations and hosts: Users can search for destinations through the destination index on the frontpage as well as the autocomplete search bar in the navigation bar. Users are also able to search for hosts on each destination's show page.
* Google Maps Integration: Each of the 17 destinations have show pages correctly mnap its location and hosts to Google Maps using React/Redux. 
* Make Hosting Requests: Users are able to make hosting requests to hosts. Airbnb's React dates library was utilized for the calendar functionality. Users receive a confirmation message once a request has been sent. 
* User Dashboard: The currentUser has a dashboard where s/he can see upcoming travel plans hosted by other TravelNhost members, as well as upcoming guests.  


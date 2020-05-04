### ![GA](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png) General Assembly, Software Engineering Immersive
# SPACE X <img src= images/spacexlogo.png.png height=50 width=50 />

## Overview


This is my second project of the software engineering immersive course at GA London. The assignment was to build a React application that consumes a public API. The project was to be completed in teams of 2 within 48 hours.

Making use of the Space-X public API, we built a website that allows the user to see all the past launches that Space-X has been done, as well to see all the upcoming launches to be done. 
As the API is being updated when a launch is done, the webpage will be automatically render the flights from upcoming to past flights.


You can launch the site on GitHub pages [here](https://dromerosalem.github.io/project-2/) 

## The Brief 

- **Consume a public API**  – this could be anything but it must make sense for your project.
- **Have several components** - At least one classical and one functional.
- **The app should include a router**  - with several "pages".
- **Be deployed online and accessible to the public.** 



## The Technologies used 

- JavaScript (ES6)
- React.js
- HTML, JSX
- Space-X public API
- HTML, JSX
- Webpack
- NPM
- Git and GitHub
- Google Fonts


## The Approach 

As a pair we were both interested in Space-X  and their missions to Mars. So we've decided to make a flight tracker what will show us the upcoming flights and the past flights in order to keep a track of the flights. 

We deceided to use a Open Source REST  [API](https://docs.spacexdata.com/?version=latest#5fc4c846-c373-43df-a10a-e9faf80a8b0a)  from Space-X that will include images and all the related information to those flights. So you could get a description of each particular mission.


- **The Routes with React Router**

So we decided to have 4 main components each one with their own Route.
- `/` - as the Home page, so the landing page.
- `/past` - as the past flights rendered.
- `/upcoming` - as the upcoming flights to be done.
- `/:flightNumber` - a dinamic route that will render an idividual flight with      their description  










## Table of contents
* [Intro](#RangWeather-App)
* [Screenshots](#Screenshots)
* [Getting Started](#Getting-Started)
* [How to Use](#How-to-Use)
* [Project Emphasis](#Project-Emphasis)
* [UI Design](#UI-Design)
* [License](#License)


# RangWeather App

This project is a Turing front-end evelopment project focused on working with React, Redux, and and Enzyme/Jest.

This was a custom app I built for my household to track weather metrics we cared about that are being measured by a weather station in our backyard.  I was excited to see there's an AmbientWeather API for this, and also made use of Darksky's API for weather forecasting so we could see both historical metrics and future forcasting in our area.  I passed on any details in other weather apps we don't care for and included the metrics we most care about.


## Screenshots

![Home page](/src/screenshots/1.png)
![General forecast stats](/src/screenshots/2.png)
![Hourly forecast](/src/screenshots/3.png)


## Getting Started

If you'd like to clone this repository to your own local machine, run the following command in your terminal:

```shell
git clone https://github.com/lynnerang/rang-weather.git
```

Then run the following command to install dependencies:

```shell
npm install
```

To view the app in action, run the following command in your terminal:

```bash
npm start
```

Then, go to `http://localhost:3000/` in your browser to see the code running in the browser.

---

## How to Use

1. On the home page, you can see horizontal scrolling lists of movies from different categories, and you can click on any one to view more details.
2. You can use the global navigation to click into different categories of movies, and can view movie details from clicking on any poster/title.
3. You can click 'Sign Up' to create an account and keep track of your favorite movies.
4. Once logged in, you'll see an option to add movies to your favorites on any movie details page.
5. You can then view a list of all your favorite movies from the 'Favorites' link in navigation.


## UI Design

The spec we were given had no information on UI design elements, so we started by wireframing a general idea of our layout.  

![Wireframes](/src/screenshots/5.png)

Then we created a high-fidelity prototype of the design on Figma to have a more detailed idea of where we wanted everything to go on the different web pages.

![Figma designs](/src/screenshots/6.png)


## Project Emphasis

View the project specification on the <a href="http://frontend.turing.io/projects/movie-tracker.html">Turing webpage for this project</a>.

- [x] HTML & CSS 
- [x] Flex-box
- [x] Grid CSS
- [x] Wireframing
- [x] UI design
- [x] React
- [x] React router
- [x] Redux
- [x] Es6 classes
- [x] API fetches
- [x] Enzyme & Jest testing
- [x] Webpack
- [x] NPM


## Licensing

All credit goes to <a href="turing.io">Turing School of Software</a> for providing the project specifications.

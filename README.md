

## Table of contents
* [Intro](#RangWeather-App)
* [Screenshots](#Screenshots)
* [Getting Started](#Getting-Started)
* [How to Use](#How-to-Use)
* [Project Emphasis](#Project-Emphasis)
* [UI Design](#UI-Design)
* [Future Plans](#Future-Plans)
* [License](#License)


# RangWeather App

This project is a Turing front-end evelopment project focused on working with React, Redux, and and Enzyme/Jest.

This was a custom app I built for my household to track weather metrics we cared about that are being measured by a weather station in our backyard.  I was excited to see there's an AmbientWeather API for this, and also made use of Darksky's API for weather forecasting so we could see both historical metrics and future forcasting in our area.  I passed on any details in other weather apps we don't care for and included the metrics we most care about.


## Screenshots

![Home page top](/screenshots/1.png =300x)
![Home page bottom](/screenshots/2.png =300x)
![Forecast page top](/screenshots/3.png =300x)
![Forecast page bottom](/screenshots/4.png =300x)
![Navigation](/src/screenshots/5.png =300x)


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

1. On the home page, you can see the current metrics from a specific AmbientWeather device and how they have been trending over the past ten hours.
2. On the forecast page, you can see weather forcast data from Darksky like the high and low temperature for the day, sunrise and sunset times, and whether a storm is nearby.
3. Below on the forecast page, you can also see hourly metrics of the weather for the next twelve hours.


## UI Design

The spec I was given had no information on UI design elements, so I started by wireframing a general idea of the layout.  

![Wireframes](/screenshots/6.png)

Then I created a high-fidelity prototype of the design on Figma to have a more detailed idea of where I wanted everything to go on the different screens pages.

![Figma designs](/screenshots/7.png)


## Future Plans

I plan to keep working on this to add more features like a notification setup interface where I can receive a text on my phone for instances like the following:
- If the house temperature is outside the expected range
- If it gets below freezing outside
- If it is raining or snowing at my house

I'd also like to add more interaction like tapping indoor vs outdoor to see metrics over time for each.


## Project Emphasis

View the project specification on the <a href="http://frontend.turing.io/projects/binary-challenge.html">Turing webpage for this project</a>.

- [x] HTML & CSS 
- [x] Flex-box
- [x] Wireframing
- [x] UI design
- [x] React
- [x] React router
- [x] Redux
- [x] Es6 classes
- [x] Async JavaScript
- [x] API fetches
- [x] Enzyme & Jest testing
- [x] Webpack
- [x] NPM


## Licensing

All credit goes to <a href="turing.io">Turing School of Software</a> for providing the project specifications.

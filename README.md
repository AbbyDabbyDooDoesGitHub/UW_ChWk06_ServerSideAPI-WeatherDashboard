# HelpfulReferencesAndDefaults

# UW_ChWk06_ServerSideAPI-WeatherDashboard
## Overview
Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS. Use the [OpenWeather One Call API](https://openweathermap.org/api/one-call-api) to retrieve weather data for cities. Use `localStorage` to store any persistent data. 

### Link to Web App: 
<!-- LINK TO DEPLOYMENT HERE -->

### App Preview:
<!-- Replace with path to screenshot   ![My Password Generator Screenshot](./Assets/Images/MyPasswordGeneratorScreenShot.PNG "My Password Generator Screenshot") -->

## Notes

<!-- Use this area to add personal notes on implementation, etc -->

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```

## Resources Used 

### Helpful References
- [Full-Stack Blog on how to use API keys](https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys)

### Technology
- [OpenWeather One Call API](https://openweathermap.org/api/one-call-api)
- [Bootstrap Framework](https://getbootstrap.com/)
- [jQuery Library](https://jquery.com/)

### Media
- 11d icon (thunderstorm): [lightning cloudy by reynaindra from NounProject.com](https://thenounproject.com/browse/icons/term/lightning-cloudy/")
- 09d icon (drizzle): [showers by reynaindra from NounProject.com](https://thenounproject.com/browse/icons/term/showers/)
- 10d icon (rain): [Rain by reynaindra from NounProject.com](https://thenounproject.com/browse/icons/term/rain/)
- 13d icon (snow): [Snow by Daniil Churakov from NounProject.com](https://thenounproject.com/browse/icons/term/snow/)
- 50d icon (haze/fog/atmosphere): [fog by reynaindra from NounProject.com](https://thenounproject.com/browse/icons/term/fog/)
- 01d icon (clear day): [day sunny by reynaindra from NounProject.com ](https://thenounproject.com/browse/icons/term/day-sunny/)
- 01n icon (clear night): [Moon by reynaindra from NounProject.com](https://thenounproject.com/browse/icons/term/moon/) 
- 02d icon (partly cloudy day): [Cloudy Day by reynaindra from NounProject.com](https://thenounproject.com/browse/icons/term/cloudy-day/)
- 02n icon (partly cloudy night): [Cloudy Night by reynaindra from NounProject.com](https://thenounproject.com/browse/icons/term/cloudy-night/)
- 03d icon (clouds day): [Cloudy climate by icon 54 from NounProject.com](https://thenounproject.com/browse/icons/term/cloudy-climate/)
- 03n icon (clouds night): [Cloudy climate by icon 54 from NounProject.com](https://thenounproject.com/browse/icons/term/cloudy-climate/)
- 04d icon (heavy clouds day): [Overcast clouds by icon 54 from NounProject.com](https://thenounproject.com/browse/icons/term/overcast-clouds/)
- 04n icon (heavy clouds night): [Overcast clouds by icon 54 from NounProject.com](https://thenounproject.com/browse/icons/term/overcast-clouds/)



<!-- # 06 Server-Side APIs: Weather Dashboard

## Your Task

Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

Use the [OpenWeather One Call API](https://openweathermap.org/api/one-call-api) to retrieve weather data for cities. Read through the documentation for setup and usage instructions. You will use `localStorage` to store any persistent data. For more information on how to work with the OpenWeather API, refer to the [Full-Stack Blog on how to use API keys](https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys).

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```

## Mock-Up

The following image shows the web application's appearance and functionality:

![The weather app includes a search option, a list of cities, and a five-day forecast and current weather conditions for Atlanta.](./Assets/06-server-side-apis-homework-demo.png)

## Grading Requirements

> **Note**: If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
>
> * A repository that has no code
>
> * A repository that includes a unique name but nothing else
>
> * A repository that includes only a README file but nothing else
>
> * A repository that only includes starter code

This Challenge is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:

    * Uses the OpenWeather API to retrieve weather data.

    * Uses `localStorage` to store persistent data.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository that contains application code.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application resembles the mock-up functionality provided in the Challenge instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme file with description, screenshot, and link to deployed application.

## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a readme describing the project.

- - -
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
  -->

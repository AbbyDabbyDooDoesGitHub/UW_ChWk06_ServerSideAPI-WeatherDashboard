// alert('JS File is connected');

// ADDRESSES TO INDEX ITEMS ------------------------------------------------------
var searchBtn = document.getElementById("searchBtn");
var errorText = document.getElementById("errorText");

var recent1 = document.getElementById("recentSearch1");
var recent2 = document.getElementById("recentSearch2");
var recent3 = document.getElementById("recentSearch3");
var recent4 = document.getElementById("recentSearch4");
var recent5 = document.getElementById("recentSearch5");
var recent6 = document.getElementById("recentSearch6");
var recent7 = document.getElementById("recentSearch7");
var recent8 = document.getElementById("recentSearch8");

var fiveDayCard = document.getElementById("location-fiveDayForecast");
var curDayCard  = document.getElementById("location-overviewCurrent");
var defaultCard  = document.getElementById("defaultCard");

var selCity = document.getElementById("selectedLocation");

var day0      = document.getElementById("day0-date");
var day0_img  = document.getElementById("day0-img");
var day0_temp = document.getElementById("day0-temp");
var day0_wind = document.getElementById("day0-wind");
var day0_hum  = document.getElementById("day0-humidity");
var day0_UV   = document.getElementById("day0-UV");
var day1      = document.getElementById("day1-date");
var day1_img  = document.getElementById("day1-img");
var day1_temp = document.getElementById("day1-temp");
var day1_wind = document.getElementById("day1-wind");
var day1_hum  = document.getElementById("day1-humidity");
var day2      = document.getElementById("day2-date");
var day2_img  = document.getElementById("day2-img");
var day2_temp = document.getElementById("day2-temp");
var day2_wind = document.getElementById("day2-wind");
var day2_hum  = document.getElementById("day2-humidity");
var day3      = document.getElementById("day3-date");
var day3_img  = document.getElementById("day3-img");
var day3_temp = document.getElementById("day3-temp");
var day3_wind = document.getElementById("day3-wind");
var day3_hum  = document.getElementById("day3-humidity");
var day4      = document.getElementById("day4-date");
var day4_img  = document.getElementById("day4-img");
var day4_temp = document.getElementById("day4-temp");
var day4_wind = document.getElementById("day4-wind");
var day4_hum  = document.getElementById("day4-humidity");
var day5      = document.getElementById("day5-date");
var day5_img  = document.getElementById("day5-img");
var day5_temp = document.getElementById("day5-temp");
var day5_wind = document.getElementById("day5-wind");
var day5_hum  = document.getElementById("day5-humidity");

// ADD EVENT LISTENERS -----------------------------------------------------------
searchBtn.addEventListener("click",function() {startSearch()});
recent1.addEventListener("click",function() {startSearchFromRecent("recent1")});
recent2.addEventListener("click",function() {startSearchFromRecent("recent2")});
recent3.addEventListener("click",function() {startSearchFromRecent("recent3")});
recent4.addEventListener("click",function() {startSearchFromRecent("recent4")});
recent5.addEventListener("click",function() {startSearchFromRecent("recent5")});
recent6.addEventListener("click",function() {startSearchFromRecent("recent6")});
recent7.addEventListener("click",function() {startSearchFromRecent("recent7")});
recent8.addEventListener("click",function() {startSearchFromRecent("recent8")});

// DO ON LOAD --------------------------------------------------------------------
updateRecents ();

// FUNCTIONS FOR TESTING ---------------------------------------------------------
// TEST VARIABLE FROM WEATHER API
var test = {
	"lat": 47.6036,
	"lon": -122.3295,
	"timezone": "America/Los_Angeles",
	"timezone_offset": -25200,
	"current": {
		"dt": 1662540710,
		"sunrise": 1662557773,
		"sunset": 1662604725,
		"temp": 57.88,
		"feels_like": 56.71,
		"pressure": 1016,
		"humidity": 71,
		"dew_point": 48.56,
		"uvi": 0,
		"clouds": 0,
		"visibility": 10000,
		"wind_speed": 1.99,
		"wind_deg": 65,
		"wind_gust": 4,
		"weather": [
			{
				"id": 800,
				"main": "Clear",
				"description": "clear sky",
				"icon": "01n"
			}
		]
	},
	"daily": [
		{
			"dt": 1662580800,
			"sunrise": 1662557773,
			"sunset": 1662604725,
			"moonrise": 1662602100,
			"moonset": 1662543180,
			"moon_phase": 0.4,
			"temp": {
				"day": 76.23,
				"min": 54.05,
				"max": 77.97,
				"night": 54.75,
				"eve": 68.4,
				"morn": 54.05
			},
			"feels_like": {
				"day": 75.15,
				"night": 53.37,
				"eve": 66.96,
				"morn": 52.54
			},
			"pressure": 1019,
			"humidity": 34,
			"dew_point": 44.92,
			"wind_speed": 9.51,
			"wind_deg": 4,
			"wind_gust": 19.98,
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04d"
				}
			],
			"clouds": 91,
			"pop": 0,
			"uvi": 5.61
		},
		{
			"dt": 1662667200,
			"sunrise": 1662644253,
			"sunset": 1662691003,
			"moonrise": 1662690240,
			"moonset": 1662634680,
			"moon_phase": 0.44,
			"temp": {
				"day": 67.77,
				"min": 48.65,
				"max": 70.29,
				"night": 53.71,
				"eve": 63.09,
				"morn": 48.65
			},
			"feels_like": {
				"day": 66.54,
				"night": 52.63,
				"eve": 61.77,
				"morn": 48.65
			},
			"pressure": 1021,
			"humidity": 49,
			"dew_point": 47.75,
			"wind_speed": 9.37,
			"wind_deg": 348,
			"wind_gust": 16.67,
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04d"
				}
			],
			"clouds": 87,
			"pop": 0,
			"uvi": 5.16
		},
		{
			"dt": 1662753600,
			"sunrise": 1662730733,
			"sunset": 1662777281,
			"moonrise": 1662778020,
			"moonset": 1662726180,
			"moon_phase": 0.48,
			"temp": {
				"day": 74.34,
				"min": 51.33,
				"max": 77.81,
				"night": 58.86,
				"eve": 63.64,
				"morn": 51.62
			},
			"feels_like": {
				"day": 73.02,
				"night": 57.07,
				"eve": 62.06,
				"morn": 50.76
			},
			"pressure": 1013,
			"humidity": 33,
			"dew_point": 42.51,
			"wind_speed": 11.97,
			"wind_deg": 3,
			"wind_gust": 19.95,
			"weather": [
				{
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01d"
				}
			],
			"clouds": 0,
			"pop": 0,
			"uvi": 5.5
		},
		{
			"dt": 1662840000,
			"sunrise": 1662817213,
			"sunset": 1662863558,
			"moonrise": 1662865560,
			"moonset": 1662817500,
			"moon_phase": 0.5,
			"temp": {
				"day": 87.76,
				"min": 54.81,
				"max": 87.76,
				"night": 62.44,
				"eve": 68.32,
				"morn": 58.24
			},
			"feels_like": {
				"day": 84.06,
				"night": 60.35,
				"eve": 66.45,
				"morn": 55.65
			},
			"pressure": 1006,
			"humidity": 14,
			"dew_point": 31.86,
			"wind_speed": 7.14,
			"wind_deg": 15,
			"wind_gust": 11.95,
			"weather": [
				{
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01d"
				}
			],
			"clouds": 0,
			"pop": 0,
			"uvi": 5.43
		},
		{
			"dt": 1662926400,
			"sunrise": 1662903692,
			"sunset": 1662949835,
			"moonrise": 1662953040,
			"moonset": 1662908640,
			"moon_phase": 0.55,
			"temp": {
				"day": 86.85,
				"min": 57.34,
				"max": 86.85,
				"night": 61.52,
				"eve": 67.39,
				"morn": 60.69
			},
			"feels_like": {
				"day": 83.66,
				"night": 61,
				"eve": 66.42,
				"morn": 58.53
			},
			"pressure": 1011,
			"humidity": 22,
			"dew_point": 43.39,
			"wind_speed": 8.21,
			"wind_deg": 233,
			"wind_gust": 17.36,
			"weather": [
				{
					"id": 802,
					"main": "Clouds",
					"description": "scattered clouds",
					"icon": "03d"
				}
			],
			"clouds": 29,
			"pop": 0,
			"uvi": 6
		},
		{
			"dt": 1663012800,
			"sunrise": 1662990172,
			"sunset": 1663036112,
			"moonrise": 1663040520,
			"moonset": 1662999660,
			"moon_phase": 0.59,
			"temp": {
				"day": 77.11,
				"min": 60.13,
				"max": 77.11,
				"night": 64,
				"eve": 65.12,
				"morn": 61.32
			},
			"feels_like": {
				"day": 76.41,
				"night": 63.25,
				"eve": 64.29,
				"morn": 60.87
			},
			"pressure": 1012,
			"humidity": 40,
			"dew_point": 51.17,
			"wind_speed": 9.84,
			"wind_deg": 250,
			"wind_gust": 18.48,
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04d"
				}
			],
			"clouds": 98,
			"pop": 0.02,
			"uvi": 6
		},
		{
			"dt": 1663099200,
			"sunrise": 1663076652,
			"sunset": 1663122388,
			"moonrise": 1663128060,
			"moonset": 1663090500,
			"moon_phase": 0.62,
			"temp": {
				"day": 73.83,
				"min": 56.25,
				"max": 73.83,
				"night": 56.25,
				"eve": 61,
				"morn": 60.8
			},
			"feels_like": {
				"day": 72.93,
				"night": 55.56,
				"eve": 60.19,
				"morn": 60.21
			},
			"pressure": 1011,
			"humidity": 43,
			"dew_point": 49.46,
			"wind_speed": 5.14,
			"wind_deg": 339,
			"wind_gust": 9.6,
			"weather": [
				{
					"id": 802,
					"main": "Clouds",
					"description": "scattered clouds",
					"icon": "03d"
				}
			],
			"clouds": 49,
			"pop": 0.11,
			"uvi": 6
		},
		{
			"dt": 1663185600,
			"sunrise": 1663163131,
			"sunset": 1663208665,
			"moonrise": 1663215780,
			"moonset": 1663181340,
			"moon_phase": 0.65,
			"temp": {
				"day": 76.12,
				"min": 52.9,
				"max": 76.12,
				"night": 56.08,
				"eve": 61.79,
				"morn": 55.69
			},
			"feels_like": {
				"day": 75.36,
				"night": 55.24,
				"eve": 60.82,
				"morn": 54.9
			},
			"pressure": 1013,
			"humidity": 41,
			"dew_point": 50.22,
			"wind_speed": 7.38,
			"wind_deg": 352,
			"wind_gust": 14.41,
			"weather": [
				{
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01d"
				}
			],
			"clouds": 1,
			"pop": 0,
			"uvi": 6
		}
	]
};

// reveal(fiveDayCard);
// reveal(curDayCard);
// hide(defaultCard);
// processWeatherData (test);

// FUNCTIONS FOR FORMATTING ------------------------------------------------------
// FUNCTION TO REVEAL BY CLASS OR ID
function reveal (section) {
    // console.log("ran reveal()");
    section.style.display = "block";
}

// FUNCTION TO HIDE BY CLASS OR ID
function hide (section) {
    // console.log("ran hide()");
    section.style.display = "none";
}

// START FUNCTIONS ---------------------------------------------------------------
// START SEARCH FROM ENTRY BUTTON
function startSearch () {

    var ent_city  = document.getElementById("searchBox").value;
    var ent_state = document.getElementById("stateSearchBox").value;
    var bothTexts = ent_city + ent_state;

    console.log("startSearch ran");
    // console.log("ent_city  = " + ent_city);
    // console.log("ent_state  = " + ent_state);

    if (bothTexts == null || bothTexts == "") {
        console.log("nothing entered. bothTexts is " + bothTexts);

        errorText.innerHTML = "Error: Please enter a city to search";

        // REVEAL THE ERROR MESSAGE
        reveal(errorText);

        // SET A TIMEOUT SO THE SUCCESS TEXT AND LINE GOES AWAY AFTER 1 SECOND
        setTimeout(() => {
            hide(errorText); 
        }, 1250); // 👈️ time in milliseconds

    } else if (ent_city == null || ent_city == "") {
        console.log("no city entered. ent_city is " + ent_city + "& ent_state is " + ent_state);

        errorText.innerHTML = "Error: Please enter a city to search, the state is optional";

        // REVEAL THE ERROR MESSAGE
        reveal(errorText);

        // SET A TIMEOUT SO THE SUCCESS TEXT AND LINE GOES AWAY AFTER 1 SECOND
        setTimeout(() => {
            hide(errorText); 
        }, 1250); // 👈️ time in milliseconds

    } else {

        let city = ent_city;
        let state = ent_state;

        const cityArray = city.split(" ");
        const stateArray = state.split(" ");

        var reqCity  = "&locality=" + cityArray.join("%20");
        var reqState = "&state=" + stateArray.join("%20");

        // WEB LINK FOR URL EXAMPLE
        // https://developer.myptv.com/Documentation/Geocoding%20API/Code%20Samples/Locations%20by%20Address.htm

        var reqURL = "https://api.myptv.com/geocoding/v1/locations/by-address?country=United%20States" + reqState + reqCity + "&countryFilter=US&apiKey=YWVkYWY0ODNjMDIyNDNmMjhlMzRhZWVmZWUzYjAzNDU6ZGQzNzVlYmMtNjE4Yi00MDdlLWJhNDAtMzI1MWU3ZDE4NGY2";

        console.log("reqURL is " + reqURL);

        var fetchResults;

        console.log("fetchResults preFetch is: " + fetchResults);
    
        fetch(reqURL, {
            method: "GET",
            headers: { apiKey: "YWVkYWY0ODNjMDIyNDNmMjhlMzRhZWVmZWUzYjAzNDU6ZGQzNzVlYmMtNjE4Yi00MDdlLWJhNDAtMzI1MWU3ZDE4NGY2", "Content-Type": "application/json" },
        })
        .then(response => response.json())
        .then(json => fetchResults = (json.locations[0]))
        .then(function () {
            processLocationData (fetchResults);
        });

    }
}

// START SEARCH FROM RECENT SEARCHES
function startSearchFromRecent(locationName) {

    var recentClicked = JSON.parse(localStorage.getItem(locationName));

    var selCity_formatted = recentClicked[0];
    var selCity_lat       = recentClicked[1];
    var selCity_long      = recentClicked[2];

    getWeatherData(selCity_lat,selCity_long,selCity_formatted);
    checkSearches(selCity_formatted,selCity_lat,selCity_long);

}

// PROCESS API DATA --------------------------------------------------------------
// PROCESS DATA FROM GEOLOCATION API
function processLocationData(data) {

    console.log("processLocationData ran");
    // console.log("data in processLocationData is " + data);

    // LAT AND LONG API VARIABLES
    var selCity_lat       = data.referencePosition.latitude;
    var selCity_long      = data.referencePosition.longitude;
    var selCity_formatted = data.formattedAddress;

    console.log("selCity_lat is " + selCity_lat);
    console.log("selCity_long is " + selCity_long);
    console.log("selCity_formatted is " + selCity_formatted);

    getWeatherData(selCity_lat,selCity_long,selCity_formatted);
    checkSearches(selCity_formatted,selCity_lat,selCity_long);

}

// USE GEOLOCATION API DATA TO GET WEATHER API DATA
function getWeatherData(selCity_lat,selCity_long,selCity_formatted) {
    // WEB LINK FOR API DOCS
    // https://openweathermap.org/api/one-call-api

    // one call api example
    // https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=minutely,hourly,alerts&units=imperial&appid=72384a45b07742dc70db33f0ab119992

    var weathReqURL        = "https://api.openweathermap.org/data/3.0/onecall?lat=" + selCity_lat + "&lon=" + selCity_long + "&exclude=minutely,hourly,alerts&units=imperial&appid=72384a45b07742dc70db33f0ab119992";

    console.log("weathReqURL is " + weathReqURL);

    var weathFetchResults;

    console.log("weathFetchResults preFetch is: " + weathFetchResults);


    fetch(weathReqURL)
    .then(response => {
        return response.json();
    })
    .then(function(response) {
        console.log(response);
        processWeatherData (response);
    })

    selCity.innerHTML = selCity_formatted;

}

// PROCESS RETURNED DATA FROM WEATHER API
function processWeatherData (data) {
    console.log("processWeatherData ran");
    // console.log(data);

    var value_day0        = data.current.dt;
    var value_day0_img    = data.current.weather[0].icon;
    var value_day0_imgAlt = data.current.weather[0].description;
    var value_day0_temp   = data.current.temp + " °F";
    var value_day0_wind   = data.current.wind_speed + " MPH";
    var value_day0_hum    = data.current.humidity + " %";
    var value_day0_UV     = data.current.uvi;
    var value_day1        = data.daily[1].dt;
    var value_day1_img    = data.daily[1].weather[0].icon;
    var value_day1_imgAlt = data.daily[1].weather[0].description;
    var value_day1_temp   = data.daily[1].temp.day + " °F";
    var value_day1_wind   = data.daily[1].wind_speed + " MPH";
    var value_day1_hum    = data.daily[1].humidity + " %";
    var value_day2        = data.daily[2].dt;
    var value_day2_img    = data.daily[2].weather[0].icon;
    var value_day2_imgAlt = data.daily[2].weather[0].description;
    var value_day2_temp   = data.daily[2].temp.day + " °F";
    var value_day2_wind   = data.daily[2].wind_speed + " MPH";
    var value_day2_hum    = data.daily[2].humidity + " %";
    var value_day3        = data.daily[3].dt;
    var value_day3_img    = data.daily[3].weather[0].icon;
    var value_day3_imgAlt = data.daily[3].weather[0].description;
    var value_day3_temp   = data.daily[3].temp.day + " °F";
    var value_day3_wind   = data.daily[3].wind_speed + " MPH";
    var value_day3_hum    = data.daily[3].humidity + " %";
    var value_day4        = data.daily[4].dt;
    var value_day4_img    = data.daily[4].weather[0].icon;
    var value_day4_imgAlt = data.daily[4].weather[0].description;
    var value_day4_temp   = data.daily[4].temp.day + " °F";
    var value_day4_wind   = data.daily[4].wind_speed + " MPH";
    var value_day4_hum    = data.daily[4].humidity + " %";
    var value_day5        = data.daily[5].dt;
    var value_day5_img    = data.daily[5].weather[0].icon;
    var value_day5_imgAlt = data.daily[5].weather[0].description;
    var value_day5_temp   = data.daily[5].temp.day + " °F";
    var value_day5_wind   = data.daily[5].wind_speed + " MPH";
    var value_day5_hum    = data.daily[5].humidity + " %";

    convertTimestamp(value_day0,day0);
    convertTimestamp(value_day1,day1);
    convertTimestamp(value_day2,day2);
    convertTimestamp(value_day3,day3);
    convertTimestamp(value_day4,day4);
    convertTimestamp(value_day5,day5);
    updateIcons(value_day0_img,value_day0_imgAlt,value_day1_img,value_day1_imgAlt,value_day2_img,value_day2_imgAlt,value_day3_img,value_day3_imgAlt,value_day4_img,value_day4_imgAlt,value_day5_img,value_day5_imgAlt);
    updateTemp(value_day0_temp,value_day1_temp,value_day2_temp,value_day3_temp,value_day4_temp,value_day5_temp);
    updateWind(value_day0_wind,value_day1_wind,value_day2_wind,value_day3_wind,value_day4_wind,value_day5_wind);
    updateHum(value_day0_hum,value_day1_hum,value_day2_hum,value_day3_hum,value_day4_hum,value_day5_hum);
    updateUV(value_day0_UV);

    // HIDE DEFAULT IMAGE AND REVEAL WEATHER DATA
    hide(defaultCard);
    reveal(fiveDayCard);
    reveal(curDayCard);

}

// FILL INNER HTML WITH API RETURNED DATA ----------------------------------------
// CONVERT UNIX TIMES FROM API TO MM/DD/YYYY
function convertTimestamp(data,htmlLoc) {
    const unixTimestamp = data
    const milliseconds = unixTimestamp * 1000 // 1575909015000
    const dateObject = new Date(milliseconds)

    const dateFormat_month = dateObject.toLocaleString("en-US", {month: "numeric"}) 
    const dateFormat_day = dateObject.toLocaleString("en-US", {day: "numeric"})
    const dateFormat_year = dateObject.toLocaleString("en-US", {year: "numeric"})

    var resultDate = dateFormat_month + "/" + dateFormat_day + "/" + dateFormat_year;
    htmlLoc.innerHTML = resultDate;

    // console.log("initial unix timestamp was " + unixTimestamp + " & the resultDate is " + resultDate);

}

// UPDATE THE WEATHER ICONS
function updateIcons(value_day0_img,value_day0_imgAlt,value_day1_img,value_day1_imgAlt,value_day2_img,value_day2_imgAlt,value_day3_img,value_day3_imgAlt,value_day4_img,value_day4_imgAlt,value_day5_img,value_day5_imgAlt) {
    var day0_imgString = "./Assets/Images/" + value_day0_img + ".png";
    var day1_imgString = "./Assets/Images/white_" + value_day1_img + ".png";
    var day2_imgString = "./Assets/Images/white_" + value_day2_img + ".png";
    var day3_imgString = "./Assets/Images/white_" + value_day3_img + ".png";
    var day4_imgString = "./Assets/Images/white_" + value_day4_img + ".png";
    var day5_imgString = "./Assets/Images/white_" + value_day5_img + ".png";

    day0_img.src = day0_imgString;
    day0_img.alt = value_day0_imgAlt;
    day1_img.src = day1_imgString;
    day1_img.alt = value_day1_imgAlt;
    day2_img.src = day2_imgString;
    day2_img.alt = value_day2_imgAlt;
    day3_img.src = day3_imgString;
    day3_img.alt = value_day3_imgAlt;
    day4_img.src = day4_imgString;
    day4_img.alt = value_day4_imgAlt;
    day5_img.src = day5_imgString;
    day5_img.alt = value_day5_imgAlt;

}

// UPDATE TEMP VALUES
function updateTemp(value_day0_temp,value_day1_temp,value_day2_temp,value_day3_temp,value_day4_temp,value_day5_temp) {
    day0_temp.innerHTML = value_day0_temp;
    day1_temp.innerHTML = value_day1_temp;
    day2_temp.innerHTML = value_day2_temp;
    day3_temp.innerHTML = value_day3_temp;
    day4_temp.innerHTML = value_day4_temp;
    day5_temp.innerHTML = value_day5_temp;

}

// UPDATE WIND SPEEDS
function updateWind(value_day0_wind,value_day1_wind,value_day2_wind,value_day3_wind,value_day4_wind,value_day5_wind) {
    day0_wind.innerHTML = value_day0_wind;
    day1_wind.innerHTML = value_day1_wind;
    day2_wind.innerHTML = value_day2_wind;
    day3_wind.innerHTML = value_day3_wind;
    day4_wind.innerHTML = value_day4_wind;
    day5_wind.innerHTML = value_day5_wind;

}

// UPDATE HUMIDITY VALUES
function updateHum(value_day0_hum,value_day1_hum,value_day2_hum,value_day3_hum,value_day4_hum,value_day5_hum) {
    day0_hum.innerHTML = value_day0_hum;
    day1_hum.innerHTML = value_day1_hum;
    day2_hum.innerHTML = value_day2_hum;
    day3_hum.innerHTML = value_day3_hum;
    day4_hum.innerHTML = value_day4_hum;
    day5_hum.innerHTML = value_day5_hum;

}

// UPDATE UV
function updateUV(value_day0_UV) {
    day0_UV.innerHTML = value_day0_UV;

    // UNCOMMENT BELOW TO TEST IF FUNCTION FOR UV
    // value_day0_UV = 5.1;

    if (value_day0_UV <= 2) {
        day0_UV.style.backgroundColor = "rgb(45, 221, 75)";
        console.log("UV is LOW at " + value_day0_UV);
        // LOW
        // background-color: rgb(45, 221, 75);

    } else if (value_day0_UV <= 5) {
        day0_UV.style.backgroundColor = "rgb(255, 182, 46)";
        console.log("UV is MODERATE at " + value_day0_UV);
        // MODERATE
        // background-color: rgb(255, 182, 46);

    } else if (value_day0_UV > 5) {
        // day0_UV.style.backgroundColor = "rgb(252, 111, 55)";
        day0_UV.style.backgroundColor = "rgb(255, 0, 0)";
        console.log("UV is HIGH at " + value_day0_UV);
        // HIGH 
        // background-color: rgb(252, 111, 55);
        
    } else {
        console.log("ERROR FOR UV VALUE " + value_day0_UV);

    }

}

// LOCAL STORAGE STUFF -----------------------------------------------------------
// CHECK RECENT SEARCHES FOR DUPLICATES & NULL VALUES
function checkSearches(formattedAddress,lat,long){
    // console.log("checkSearches ran");

    var newSearch = [formattedAddress,lat,long];
    var recent1_LS = JSON.parse(localStorage.getItem("recent1"));
    var recent2_LS = JSON.parse(localStorage.getItem("recent2"));
    var recent3_LS = JSON.parse(localStorage.getItem("recent3"));
    var recent4_LS = JSON.parse(localStorage.getItem("recent4"));
    var recent5_LS = JSON.parse(localStorage.getItem("recent5"));
    var recent6_LS = JSON.parse(localStorage.getItem("recent6"));
    var recent7_LS = JSON.parse(localStorage.getItem("recent7"));
    var recent8_LS = JSON.parse(localStorage.getItem("recent8"));

    if (recent1_LS == null || recent1_LS[0] == "" || newSearch[0] === recent1_LS[0]) {
        shuffleSearches(newSearch,recent2_LS,recent3_LS,recent4_LS,recent5_LS,recent6_LS,recent7_LS,recent8_LS);

    } else if (recent2_LS == null || recent2_LS[0] == "" || newSearch[0] === recent2_LS[0]) {
        shuffleSearches(newSearch,recent1_LS,recent3_LS,recent4_LS,recent5_LS,recent6_LS,recent7_LS,recent8_LS);

    } else if (recent3_LS == null || recent3_LS[0] == "" || newSearch[0] === recent3_LS[0]) {
        shuffleSearches(newSearch,recent1_LS,recent2_LS,recent4_LS,recent5_LS,recent6_LS,recent7_LS,recent8_LS);

    } else if (recent4_LS == null || recent4_LS[0] == "" || newSearch[0] === recent4_LS[0]) {
        shuffleSearches(newSearch,recent1_LS,recent2_LS,recent3_LS,recent5_LS,recent6_LS,recent7_LS,recent8_LS);

    } else if (recent5_LS == null || recent5_LS[0] == "" || newSearch[0] === recent5_LS[0]) {
        shuffleSearches(newSearch,recent1_LS,recent2_LS,recent3_LS,recent4_LS,recent6_LS,recent7_LS,recent8_LS);

    } else if (recent6_LS == null || recent6_LS[0] == "" || newSearch[0] === recent6_LS[0]) {
        shuffleSearches(newSearch,recent1_LS,recent2_LS,recent3_LS,recent4_LS,recent5_LS,recent7_LS,recent8_LS);

    } else if (recent7_LS == null || recent7_LS[0] == "" || newSearch[0] === recent7_LS[0]) {
        shuffleSearches(newSearch,recent1_LS,recent2_LS,recent3_LS,recent4_LS,recent5_LS,recent6_LS,recent8_LS);

    } else {
        shuffleSearches(newSearch,recent1_LS,recent2_LS,recent3_LS,recent4_LS,recent5_LS,recent6_LS,recent7_LS);

    }
    
}

// MOVE MOST RECENT TO TOP OF LOCAL STORAGE, AVOID DUPLICATES
function shuffleSearches(r1_LS,r2_LS,r3_LS,r4_LS,r5_LS,r6_LS,r7_LS,r8_LS) {
    if (r1_LS == null) {
        console.log("error: r1_LS == null");

    } else if (r2_LS == null || r2_LS[0] == "" ) {
        localStorage.setItem("recent1", JSON.stringify(r1_LS));

    } else if (r3_LS == null || r3_LS[0] == "" ) {
        localStorage.setItem("recent1", JSON.stringify(r1_LS));
        localStorage.setItem("recent2", JSON.stringify(r2_LS));

    } else if (r4_LS == null || r4_LS[0] == "" ) {
        localStorage.setItem("recent1", JSON.stringify(r1_LS));
        localStorage.setItem("recent2", JSON.stringify(r2_LS));
        localStorage.setItem("recent3", JSON.stringify(r3_LS));

    } else if (r5_LS == null || r5_LS[0] == "" ) {
        localStorage.setItem("recent1", JSON.stringify(r1_LS));
        localStorage.setItem("recent2", JSON.stringify(r2_LS));
        localStorage.setItem("recent3", JSON.stringify(r3_LS));
        localStorage.setItem("recent4", JSON.stringify(r4_LS));

    } else if (r6_LS == null || r6_LS[0] == "" ) {
        localStorage.setItem("recent1", JSON.stringify(r1_LS));
        localStorage.setItem("recent2", JSON.stringify(r2_LS));
        localStorage.setItem("recent3", JSON.stringify(r3_LS));
        localStorage.setItem("recent4", JSON.stringify(r4_LS));
        localStorage.setItem("recent5", JSON.stringify(r5_LS));

    } else if (r7_LS == null || r7_LS[0] == "" ) {
        localStorage.setItem("recent1", JSON.stringify(r1_LS));
        localStorage.setItem("recent2", JSON.stringify(r2_LS));
        localStorage.setItem("recent3", JSON.stringify(r3_LS));
        localStorage.setItem("recent4", JSON.stringify(r4_LS));
        localStorage.setItem("recent5", JSON.stringify(r5_LS));
        localStorage.setItem("recent6", JSON.stringify(r6_LS));

    } else if (r8_LS == null || r8_LS[0] == "" ) {
        localStorage.setItem("recent1", JSON.stringify(r1_LS));
        localStorage.setItem("recent2", JSON.stringify(r2_LS));
        localStorage.setItem("recent3", JSON.stringify(r3_LS));
        localStorage.setItem("recent4", JSON.stringify(r4_LS));
        localStorage.setItem("recent5", JSON.stringify(r5_LS));
        localStorage.setItem("recent6", JSON.stringify(r6_LS));
        localStorage.setItem("recent7", JSON.stringify(r7_LS));

    } else {
        localStorage.setItem("recent1", JSON.stringify(r1_LS));
        localStorage.setItem("recent2", JSON.stringify(r2_LS));
        localStorage.setItem("recent3", JSON.stringify(r3_LS));
        localStorage.setItem("recent4", JSON.stringify(r4_LS));
        localStorage.setItem("recent5", JSON.stringify(r5_LS));
        localStorage.setItem("recent6", JSON.stringify(r6_LS));
        localStorage.setItem("recent7", JSON.stringify(r7_LS));
        localStorage.setItem("recent8", JSON.stringify(r8_LS));

    }

    updateRecents ();

}

// UPDATE RECENT SEARCHES BASED ON LOCAL STORAGE, HIDE NULL VALUES
function updateRecents () {
    var recent1_LS = JSON.parse(localStorage.getItem("recent1"));
    var recent2_LS = JSON.parse(localStorage.getItem("recent2"));
    var recent3_LS = JSON.parse(localStorage.getItem("recent3"));
    var recent4_LS = JSON.parse(localStorage.getItem("recent4"));
    var recent5_LS = JSON.parse(localStorage.getItem("recent5"));
    var recent6_LS = JSON.parse(localStorage.getItem("recent6"));
    var recent7_LS = JSON.parse(localStorage.getItem("recent7"));
    var recent8_LS = JSON.parse(localStorage.getItem("recent8"));

    if (recent1_LS == null || recent1_LS[0] == "" ) {
        hide(recent1);
        hide(recent2);
        hide(recent3);
        hide(recent4);
        hide(recent5);
        hide(recent6);
        hide(recent7);
        hide(recent8);

    } else if (recent2_LS == null || recent2_LS[0] == "" ) {
        reveal(recent1);
        hide(recent2);
        hide(recent3);
        hide(recent4);
        hide(recent5);
        hide(recent6);
        hide(recent7);
        hide(recent8);
        recent1.innerHTML = recent1_LS[0];

    } else if (recent3_LS == null || recent3_LS[0] == "" ) {
        reveal(recent1);
        reveal(recent2);
        hide(recent3);
        hide(recent4);
        hide(recent5);
        hide(recent6);
        hide(recent7);
        hide(recent8);
        recent1.innerHTML = recent1_LS[0];
        recent2.innerHTML = recent2_LS[0];

    } else if (recent4_LS == null || recent4_LS[0] == "" ) {
        reveal(recent1);
        reveal(recent2);
        reveal(recent3);
        hide(recent4);
        hide(recent5);
        hide(recent6);
        hide(recent7);
        hide(recent8);
        recent1.innerHTML = recent1_LS[0];
        recent2.innerHTML = recent2_LS[0];
        recent3.innerHTML = recent3_LS[0];


    } else if (recent5_LS == null || recent5_LS[0] == "" ) {
        reveal(recent1);
        reveal(recent2);
        reveal(recent3);
        reveal(recent4);
        hide(recent5);
        hide(recent6);
        hide(recent7);
        hide(recent8);
        recent1.innerHTML = recent1_LS[0];
        recent2.innerHTML = recent2_LS[0];
        recent3.innerHTML = recent3_LS[0];
        recent4.innerHTML = recent4_LS[0];

    } else if (recent6_LS == null || recent6_LS[0] == "" ) {
        reveal(recent1);
        reveal(recent2);
        reveal(recent3);
        reveal(recent4);
        reveal(recent5);
        hide(recent6);
        hide(recent7);
        hide(recent8);
        recent1.innerHTML = recent1_LS[0];
        recent2.innerHTML = recent2_LS[0];
        recent3.innerHTML = recent3_LS[0];
        recent4.innerHTML = recent4_LS[0];
        recent5.innerHTML = recent5_LS[0];

    } else if (recent7_LS == null || recent7_LS[0] == "" ) {
        reveal(recent1);
        reveal(recent2);
        reveal(recent3);
        reveal(recent4);
        reveal(recent5);
        reveal(recent6);
        hide(recent7);
        hide(recent8);
        recent1.innerHTML = recent1_LS[0];
        recent2.innerHTML = recent2_LS[0];
        recent3.innerHTML = recent3_LS[0];
        recent4.innerHTML = recent4_LS[0];
        recent5.innerHTML = recent5_LS[0];
        recent6.innerHTML = recent6_LS[0];

    } else if (recent8_LS == null || recent8_LS[0] == "" ) {
        reveal(recent1);
        reveal(recent2);
        reveal(recent3);
        reveal(recent4);
        reveal(recent5);
        reveal(recent6);
        reveal(recent7);
        hide(recent8);
        recent1.innerHTML = recent1_LS[0];
        recent2.innerHTML = recent2_LS[0];
        recent3.innerHTML = recent3_LS[0];
        recent4.innerHTML = recent4_LS[0];
        recent5.innerHTML = recent5_LS[0];
        recent6.innerHTML = recent6_LS[0];
        recent7.innerHTML = recent7_LS[0];

    } else {
        reveal(recent1);
        reveal(recent2);
        reveal(recent3);
        reveal(recent4);
        reveal(recent5);
        reveal(recent6);
        reveal(recent7);
        reveal(recent8);
        recent1.innerHTML = recent1_LS[0];
        recent2.innerHTML = recent2_LS[0];
        recent3.innerHTML = recent3_LS[0];
        recent4.innerHTML = recent4_LS[0];
        recent5.innerHTML = recent5_LS[0];
        recent6.innerHTML = recent6_LS[0];
        recent7.innerHTML = recent7_LS[0];
        recent8.innerHTML = recent8_LS[0];

    }

}

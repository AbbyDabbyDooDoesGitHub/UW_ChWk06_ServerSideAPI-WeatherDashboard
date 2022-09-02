// alert('JS File is connected');

// YWVkYWY0ODNjMDIyNDNmMjhlMzRhZWVmZWUzYjAzNDU6ZGQzNzVlYmMtNjE4Yi00MDdlLWJhNDAtMzI1MWU3ZDE4NGY2
// https://developer.myptv.com/Documentation/Geocoding%20API/QuickStart.htm
// search https://api.myptv.com/geocoding/v1/locations/by-text?searchText=aan%27t%20verlaat%2033f%20&apiKey=YOUR_API_KEY
// https://api.myptv.com/geocoding/v1/locations/by-text?searchText=Salem&countryFilter=US&apiKey=YWVkYWY0ODNjMDIyNDNmMjhlMzRhZWVmZWUzYjAzNDU6ZGQzNzVlYmMtNjE4Yi00MDdlLWJhNDAtMzI1MWU3ZDE4NGY2
// https://api.myptv.com/geocoding/v1/locations/by-text?searchText=Las%20Vegas&countryFilter=US&apiKey=YWVkYWY0ODNjMDIyNDNmMjhlMzRhZWVmZWUzYjAzNDU6ZGQzNzVlYmMtNjE4Yi00MDdlLWJhNDAtMzI1MWU3ZDE4NGY2

// ADDRESSES TO INDEX ITEMS
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

var selCity = document.getElementById("selectedLocation");

var day0      = document.getElementById("day0-date");
var day0_img  = document.getElementById("day0-img");
var day0_wind = document.getElementById("day0-wind");
var day0_hum  = document.getElementById("day0-humidity");
var day0_UV   = document.getElementById("day0-UV");
var day1      = document.getElementById("day1-date");
var day1_img  = document.getElementById("day1-img");
var day1_wind = document.getElementById("day1-wind");
var day1_hum  = document.getElementById("day1-humidity");
var day2      = document.getElementById("day2-date");
var day2_img  = document.getElementById("day2-img");
var day2_wind = document.getElementById("day2-wind");
var day2_hum  = document.getElementById("day2-humidity");
var day3      = document.getElementById("day3-date");
var day3_img  = document.getElementById("day3-img");
var day3_wind = document.getElementById("day3-wind");
var day3_hum  = document.getElementById("day3-humidity");
var day4      = document.getElementById("day4-date");
var day4_img  = document.getElementById("day4-img");
var day4_wind = document.getElementById("day4-wind");
var day4_hum  = document.getElementById("day4-humidity");
var day5      = document.getElementById("day5-date");
var day5_img  = document.getElementById("day5-img");
var day5_wind = document.getElementById("day5-wind");
var day5_hum  = document.getElementById("day5-humidity");

// LAT AND LONG API VARIABLES
var selCity_formatted;
var selCity_lat;
var selCity_long;

// LOCAL STORAGE VARIABLES
// var recent1_LS  = localStorage.getItem("recent1");

// TIME VARIABLES
// var currentTime = moment();

// ADD EVENT LISTENER
searchBtn.addEventListener("click",function() {startSearch()});

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

console.log("ent_city  = " + document.getElementById("searchBox").value);
console.log("ent_state  = " + document.getElementById("stateSearchBox").value);

function startSearch () {

    var ent_city  = document.getElementById("searchBox").value;
    var ent_state = document.getElementById("stateSearchBox").value;
    var bothTexts = ent_city + ent_state;

    console.log("startSearch ran");
    console.log("ent_city  = " + ent_city);
    console.log("ent_state  = " + ent_state);




    if (bothTexts == null || bothTexts == "") {
        console.log("nothing entered. bothTexts is " + bothTexts);

        errorText.innerHTML = "Error: Please enter a city to search";

        // REVEAL THE ERROR MESSAGE
        reveal(errorText);

        // SET A TIMEOUT SO THE SUCCESS TEXT AND LINE GOES AWAY AFTER 1 SECOND
        setTimeout(() => {
            hide(errorText); 
        }, 1000); // 👈️ time in milliseconds

    } else if (ent_city == null || ent_city == "") {
        console.log("no city entered. ent_city is " + ent_city + "& ent_state is " + ent_state);

        errorText.innerHTML = "Error: Please enter a city to search, the state is optional";

        // REVEAL THE ERROR MESSAGE
        reveal(errorText);

        // SET A TIMEOUT SO THE SUCCESS TEXT AND LINE GOES AWAY AFTER 1 SECOND
        setTimeout(() => {
            hide(errorText); 
        }, 1000); // 👈️ time in milliseconds

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

        fetch(reqURL, {
        method: "GET",
        headers: { apiKey: "YWVkYWY0ODNjMDIyNDNmMjhlMzRhZWVmZWUzYjAzNDU6ZGQzNzVlYmMtNjE4Yi00MDdlLWJhNDAtMzI1MWU3ZDE4NGY2", "Content-Type": "application/json" },
        })
        .then(response => response.json())
        .then(result => console.log(result));

        selCity_formatted;
        selCity_lat;
        selCity_long;



    }
}


// ent_city.value

// document.getElementById("myImageId").src="newSource.png";
// document.getElementById("myImageId").alt="newSource alt";
 var movies = {
        action: {
            "0": [],
            "1": [],
            "2": [],
            "3": [],
            "4": [],
            "5": [],
            "6": [],
            "7": [],
            "8": [],
            "9": []
        },
        drama: {
            "0": [],
            "1": [],
            "2": [],
            "3": [],
            "4": [],
            "5": [],
            "6": [],
            "7": [],
            "8": [],
            "9": []
        },
        romCom: {
            "0": [],
            "1": [],
            "2": [],
            "3": [],
            "4": [],
            "5": [],
            "6": [],
            "7": [],
            "8": [],
            "9": []
        },
        thriller: {
            "0": [],
            "1": [],
            "2": [],
            "3": [],
            "4": [],
            "5": [],
            "6": [],
            "7": [],
            "8": [],
            "9": []
        }
    };
    
    var quisineVal = [],
        dietaryVal = [],
        includeVal = [],
        excludeVal = [],
        spicyVal = 0,
        savoryVal = 0,
        saltyVal = 0,
        sweetVal = 0;


    //search terms and key for api
    var movieSearch = "dune";
    var omdbKey = "40e9cece"
    //omdb query url
    var omdbQueryURL = "http://www.omdbapi.com/?t=" + movieSearch + "&apikey=" + omdbKey;

    //omdb api call
    $.ajax({
        url: omdbQueryURL,
        method: "GET"
    }).done(function(response) {
        console.log(response);
    });

    //search terms and key for api
    var foodSearch = "pasta";
    var yummlyKey = "af6e286e83053654370aa379046e6c3b"
    //api query
    var yummlyQueryURL = "http://api.yummly.com/v1/api/recipes?_app_id=d10c5b70&_app_key=" + yummlyKey + "&q=" + foodSearch;

    //yummly api call
    $.ajax({
        url: yummlyQueryURL,
        method: "GET"
    }).done(function(response) {
        console.log(response);
    })


$(document).ready(function() {
    $('.ui.dropdown')
        .dropdown();

    $('.ui.range').range({
        min: 0,
        max: 10,
        start: 5,
        step: 1,
    });

});
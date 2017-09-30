 var movies = {
        action: {
            "0": ["Star Wars: Episode V - The Empire Strikes Back", "Spartacus", "Sicario", "The Lord of the Rings: The Two Towers", "Chicken Run"],
            "1": ["Badlands", "Aguirre, the Wrath of God", "Casino Royale", "Hunt for the Wilderpeople", "The Lego Batman Movie"],
            "2": ["Misison: Impossible Rogue Nation", "Kubo and the Two Strings", "Throne of Blood", "Once Upon a Time in the West", "Captain America: Civil War"],
            "3": ["Star Wars: Episode IV - A New Hope", "The French Connection", "Iron Man", "Marvel's The Avengers", "Aliens"],
            "4": ["The LEGO Movie", "The Searchers", "Star Trek", "Moana", "The Terminator"],
            "5": ["Apocalyse Now", "Harry Potter and the Deathly Hallows-Part 2", "Jaws", "WALL-E", "The Hurt Locker"],
            "6": ["The 39 Steps", "Skyfall", "The Jungle Book", "Spider-Man: Homecoming", "War for the Planet of the Apes"],
            "7": ["The Treasure of Sierra Madre", "Up", "Baby Driver", "Lawrence of Arabia", "The Dark Knight"],
            "8": ["The Adventure of Robin Hood", "Logan", "Star Wars: Episode VII", "Zootopia", "Seven Samurai"],
            "9": ["Mad Max: Fury Road", "Metropolis", "Dunkirk", "Wonder Woman", "King Kong"]
        },
        drama: {
            "0": ["The Wrestler", "La Confidential", "Gone With The Wind", "Open City", "Tokyo Story"],
            "1": ["The Confirmist", "Touch of Evil", "The Dark Knight", "Rebecca", "La La Land"],
            "2": ["A Streecar Named Desire", "The Night of the Hunter", "Lawrence of Arabia", "The Babadook", "Vertigo"],
            "3": ["12 Angry Men", "The 400 Blows", "All Quiet on the Western Front", "Army of Shadows", "Baby Driver"],
            "4": ["Seven Samurai". "Bicycle Thieves", "Hell or High Water", "The Treasure of Sierra Madre", "Arrival"],
            "5": ["Rear Window", "Taxi Driver", "Argo", "M", "Alien"],
            "6": ["Gravity", "Sunset Boulevard", "Selma", "Logan", "Rashoman"],
            "7": ["The Battle of Algiers", "The Maltese Falcon", "12 Years a Slave", "Repulsion", "Spotlight"],
            "8": ["Moonlight", "Casablanca", "Wonder Woman", "La Grande Illusion", "Boyhood"],
            "9": ["Ciizen Kane", "All About Eve", "Metropolis", "The Godfather", "Dunkirk"]
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
    var yummlyKey = "af6e286e83053654370aa379046e6c3b";
    var allwedIngredients = [];
    var excludedIngredients = [];
    var allowedAllergery = [];
    var allowedDiet = [];
    var allowedCuisine = [];
    var excludedCuisine = [];
    var maxTotalTime = 0;
    //api query
    var yummlyQueryURL = "http://api.yummly.com/v1/api/recipes?_app_id=d10c5b70&_app_key=" + yummlyKey + "&q=" + foodSearch + "&requirePicture=true";

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

console.log("test");

//remove search-form
$("#submit").click(function (e) {
    e.preventDefault();
    console.log("button test")
    //removes the search etc from main page when button clicked
    $("#search-form").remove();
    //adds dummy text for recipe results page 
    $("#mainInformationDiv").append("<h1>" + "recipe results...");
    //Creates a new button and appends to the page (for getting recipe)
    var getRecipeButton = $("<input type='button' value='new button'>");
    $("#mainInformationDiv").append(getRecipeButton);

});
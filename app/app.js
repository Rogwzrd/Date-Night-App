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
        "4": ["Seven Samurai", "Bicycle Thieves", "Hell or High Water", "The Treasure of Sierra Madre", "Arrival"],
        "5": ["Rear Window", "Taxi Driver", "Argo", "M", "Alien"],
        "6": ["Gravity", "Sunset Boulevard", "Selma", "Logan", "Rashoman"],
        "7": ["The Battle of Algiers", "The Maltese Falcon", "12 Years a Slave", "Repulsion", "Spotlight"],
        "8": ["Moonlight", "Casablanca", "Wonder Woman", "La Grande Illusion", "Boyhood"],
        "9": ["Ciizen Kane", "All About Eve", "Metropolis", "The Godfather", "Dunkirk"]
    },
    romance: {
        "0": ["West Side Story", "Say Anything...", "The Apartment", "Elevartor to the Gallows", "Groundhog Day"],
        "1": ["The Happiest Day in the Life of Olli Maki", "Only Yesteerday", "Lost in Translation", "The Crying Game"],
        "2": ["Your Name.", "Crouching Tiger, Hidden Dragon", "Wings of Desire", "Sense and Sensibility", "The Handmaiden"],
        "3": ["The Princess Bride", "Sideways", "Enough Said", "Slumdog Millionaire", "Bull Durham"],
        "4": ["Before Sunrise", "Three Colors: Blue", "Bringing Up Baby", "The Hustler", "Sunrise: A Song of Two Humans"],
        "5": ["Her", "The Umbrellas of Cherbourg", "Beauty and the Beast", "Three Colors: Red", "The Best Years of Our Lives"],
        "6": ["City Lights", "Annie Hall", "Miracle on 34th Street", "Beauty and the Beast", "Gentelman Prefer Blondes"],
        "7": ["An American in Paris", "Before Midnight", "The Red Shoes", "The Artist", "Carol"],
        "8": ["The Philadelphia Story", "Vertigo", "Gone with the Wind", "On the Waterfront", "Roman Holiday"],
        "9": ["It Happened One Night", "Singin' in the Rain", "Casablanca", "The Big Sick", "The Adventures of Robin Hood"]
    },
    horror: {
        "0": ["Dracula", "Zombieland", "It", "Suspiria", "What Ever Happend to Baby Jane"],
        "1": ["Re-Animator", "A Nightmare on Elm Street", "Train to Busan", "The Host", "Shaun of the Dead"],
        "2": ["The Loved Ones", "Nosferatu: Phanton der Nacht", "Room 237", "The Love Witch", 'It Comes at Night'],
        "3": ["The Evil Dead", "Invasion of the Body Snatchers", "Young Frankenstein", "Carrie", "Halloween"],
        "4": ["The Innocents", "Silence of the Lambs", "Cat People", "A Girl Walks Home Alone at Night", "Drag Me to Hell"],
        "5": ["The Cabin in the Woods", "Night of the Living Deaad", "Don't Look Now", "The Vanishing", "Under The Shadow"],
        "6": ["Pan's labyrinth", "Evil Dead 2: Dead by Dawn", "The Birds", "Gojira", "The Witch"],
        "7": ["It Follows", "Let the Right One In", "Aliens", "Freaks", "Eyes Without a Face"],
        "8": ["Repulsion", "The Bride of Frankenstein", "The Babadook", "Frankenstein", "Rosemary's Baby"],
        "9": ["Get Out", "The Cabinet of Dr. Caligari", "Psycho", "Nosferatu, a Symphony of Horror", "King Kong"]
    }
};
//global values used for recipe search

var includeVal = [],
    excludeVal = [],
    spicyVal = 0,
    savoryVal = 0,
    saltyVal = 0,
    sweetVal = 0;


//search terms and key for api

//this current code is showing the functionality of the movies data structure
var movieSearch = movies.action["9"][Math.floor(Math.random() * 4)];
var omdbKey = "40e9cece"
//omdb query url
var omdbQueryURL = "http://www.omdbapi.com/?t=" + movieSearch + "&apikey=" + omdbKey;
var omdbObject = {};

//omdb api call
function omdbCall(query) {
    $.ajax({
        url: query,
        method: "GET"
    }).done(function(response) {
        omdbObject = response;
        showMovie();
    });
}

//search terms and key for api
var yummlyKey = "af6e286e83053654370aa379046e6c3b";
var allowedIngredients = [];
var excludedIngredients = [];
var yummlyObject = {};
//api query


//yummly api call
function yummlyCall(queryURL) {
    console.log(queryURL);
    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .done(function(response) {
            yummlyObject = response;
            showRecipe();
        });
}

//New (Mike)-
//==============================================================
//object to compile the search query for the api

function hideMainPage() {
    $("#mainPage").hide();
};

function showMainPage() {
    $("#mainPage").show();
}

//this funciton concatenates the ingredients api query

function createIngredientsQuery(array) {
    if (array.length > 0) {
        for (var i = 0; i < array.length; i++) {
            var convertedIngredients = "&q=" + array[i];
            allowedIngredients.push(convertedIngredients)
        };
        return allowedIngredients
    } else {
        return ""
    }
};

//this funciton concatenates the excluded api query
function createExcludedQuery(array) {
    if (array.length > 0) {
        for (var i = 0; i < array.length; i++) {
            var convertedExcluded = "&excludedIngredient[]=" + array[i];
            excludedIngredients.push(convertedExcluded)
        };
        return excludedIngredients
    } else {
        return ""
    }
};

//function for creating the flavor profile api query
//i added code that if a a button is set to 0 it doesn't add the query at all
function createSpicyFlavorQuery(spicy) {
    if (spicy == 0) {
        return ""
    } else if (spicy === 9) {
        var convertedSpicy = "&flavor.piquant.min=0.0&flavor.piquant.max=1";
        return convertedSpicy;
    } else {
        var convertedSpicy = "&flavor.piquant.min=0.0&flavor.piquant.max=0." + spicy;
        return convertedSpicy;
    }
};

function createSweetFlavorQuery(sweet) {
    if (sweet == 0) {
        return ""
    } else if (sweet == 9) {
        var convertedSweet = "&flavor.sweet.min=0.0&flavor.sweet.max=1";
        return convertedSweet;
    } else {
        var convertedSweet = "&flavor.sweet.min=0.0&flavor.sweet.max=0." + sweet;
        return convertedSweet;
    }
};

function createSavoryFlavorQuery(savory) {
    if (savory == 0) {
        return ""
    } else if (savory == 9) {
        var convertedSavory = "&flavor.meaty.min=0.0&flavor.meaty.max=1";
        return convertedSavory;
    } else {
        var convertedSavory = "&flavor.meaty.min=0.0&flavor.meaty.max=0." + savory;
        return convertedSavory;
    }
};

function createSaltyFlavorQuery(salty) {
    if (salty == 0) {
        return ""
    } else if (salty == 9) {
        var convertedSalty = "&flavor.salty.min=0.0&flavor.salty.max=1";
        return convertedSalty;
    } else {
        var convertedSalty = "&flavor.salty.min=0.0&flavor.salty.max=0." + salty;
        return convertedSalty;
    };
}

//this function will determine the movie to searched in the api from the movie data structure
//not currently working
function movieFlavorGenerator(spicy, sweet, savory, salty) {

    //if spicy is the dominant flavor
    if (spicy > sweet && spicy > savory && spicy > salty) {
        var num = spicy
        var convertedMovieInput = movies.action[num.toString()][Math.floor(Math.random() * 4)];
        console.log(convertedMovieInput);
        return convertedMovieInput.replace(/ /g, "+").toLowerCase();

        //if sweet is the dominant flavor
    } else if (sweet > spicy && sweet > savory && sweet > salty) {
        var num = sweet
        var convertedMovieInput = movies.drama[num.toString()][Math.floor(Math.random() * 4)];
        console.log(convertedMovieInput);
        return convertedMovieInput.replace(/ /g, "+").toLowerCase();

        //if savory is the dominant flavor
    } else if (savory > sweet && savory > savory && spicy > salty) {
        var num = savory
        var convertedMovieInput = movies.romance[num.toString()][Math.floor(Math.random() * 4)];
        console.log(convertedMovieInput);
        return convertedMovieInput.replace(/ /g, "+").toLowerCase();

        //if salty is the dominant flavor
    } else if (salty > sweet && salty > savory && salty > spicy) {
        var num = salty
        var convertedMovieInput = movies.horror[num.toString()][Math.floor(Math.random() * 4)];
        console.log(convertedMovieInput);
        return convertedMovieInput.replace(/ /g, "+").toLowerCase();
    } else {
        var num =Math.floor(Math.random() * 9);
        var convertedMovieInput = movies.romance[num.toString()][Math.floor(Math.random() * 4)]
        return convertedMovieInput.replace(/ /g, "+")
    }
}

//current iteratino of query functiono missing the diet and cuisine query types
function makeRecipeQuery(include, exclude, spicy, savory, sweet, salty) {
    var newQuery = "http://api.yummly.com/v1/api/recipes?_app_id=d10c5b70&_app_key=af6e286e83053654370aa379046e6c3b";

    var conCattedUrl = newQuery + createIngredientsQuery(include) + createExcludedQuery(exclude) + createSpicyFlavorQuery(spicy) + createSavoryFlavorQuery(savory) + createSweetFlavorQuery(sweet) + createSaltyFlavorQuery(salty);

    console.log(conCattedUrl);

    return conCattedUrl
}


//rough code to show results of api code for recipe results
// not working, in need of changes
function showRecipe() {

    // for loop that itterates through the 10 matches from the api call
    for (var i = 0; i < yummlyObject.matches.length; i++) {
        console.log(yummlyObject.matches[i])

        // (Star) ================================
        // Converting prep time seconds to minutes
        var prepTime = yummlyObject.matches[i].totalTimeInSeconds;
        var prepTimeConverted = moment.duration(prepTime, "seconds").asMinutes();

        console.log(prepTimeConverted);
        //========================================
        var recipeContainer = $("<div>").attr("id", "recipe-" + [i]);

        var recipeNameDiv = $("<h2>").text("Recipe: " + yummlyObject.matches[i].recipeName),
            ingredientsDiv = $("<h3>").text("Ingredients: " + yummlyObject.matches[i].ingredients),
            prepTimeDiv = $("<h3>").text("Prep time: " + prepTimeConverted + " minutes");
        howToMakeButton = $("<a>").attr("src", "link goes here").html("<button>Learn How To Make</button>");

        recipeContainer
            .append(recipeNameDiv)
            .append(ingredientsDiv)
            .append(prepTimeDiv)
            .append(howToMakeButton);

        $("#recipe").append(recipeContainer);
    }
};

function showMovie() {

    console.log(omdbObject)

    var movieContainer = $("<div>").attr("id", "movieContainer");

    var movieNameDiv = $("<h2>").text("Title: " + omdbObject.Title),
        posterDiv = $("<h3>").html("<img src='" + omdbObject.Poster + "'>");
    // prepTimeDiv = $("<h3>").text("Prep time: " + yummlyObject.matches[i].totalTimeInSeconds),
    // howToMakeButton = $("<a>").attr("src", "link goes here").html("<button>Learn How To Make</button>");

    movieContainer
        .append(movieNameDiv)
        .append(posterDiv);
    // .append(prepTimeDiv)
    // .append(howToMakeButton);

    $("#results").append(movieContainer);
}

//This function runs when you press the submit button on the main page
$("#submit").click(function(e) {

    e.preventDefault();

    debugger

    //assign the parameters for the movies query
    var convertedMovie = movieFlavorGenerator(spicyVal, savoryVal, sweetVal, saltyVal);

    console.log(convertedMovie)

    var omdbKey = "40e9cece";
    //omdb query url
    var omdbQueryURL = "http://www.omdbapi.com/?t=" + convertedMovie + "&apikey=" + omdbKey;

    omdbCall(omdbQueryURL);


    //adds dummy text for recipe results page 
    $("#recipe").append("<h1>" + "recipe results...");

    hideMainPage();
    includeVal = $("#search").val().split(",");
    console.log(includeVal);
    excludeVal = $("#exclude").val().split(",");
    console.log(excludeVal);


    var recipeQueryURL = makeRecipeQuery(includeVal, excludeVal, spicyVal, savoryVal, sweetVal, saltyVal)

    yummlyCall(recipeQueryURL);

});

// ==================Star=========================================
// Flavor variables change based on respective slider value
$(".slider").on("change", function() {
    spicyVal = $("#rangeSlider1").val();
    console.log("the spiciness  is " + spicyVal);
    savoryVal = $("#rangeSlider2").val();
    console.log("the savoryness  is " + savoryVal);
    saltyVal = $("#rangeSlider3").val();
    console.log("the saltiness  is " + saltyVal)
    sweetVal = $("#rangeSlider4").val();
    console.log("the sweetness  is " + sweetVal)

});

//==================================================================

//================== Chance ===================================
//Returns the value of the variable call like a regular function Ex: userRangeSliderValue1();
//left down here to be used later
var userRangeSliderValue1 = function() {
    return $("#rangeSlider1").val();
}

var userRangeSliderValue2 = function() {
    return $("#rangeSlider2").val();
}

var userRangeSliderValue3 = function() {
    return $("#rangeSlider3").val();
}

var userRangeSliderValue4 = function() {
    return $("#rangeSlider4").val();

}


//functions that grab slider values and changes value on page
function captureSliderChange1(val) {
    document.getElementById("slider1HTMLUpdate").innerHTML = val;
}

function captureSliderChange2(val) {
    document.getElementById("slider2HTMLUpdate").innerHTML = val;
}

function captureSliderChange3(val) {
    document.getElementById("slider3HTMLUpdate").innerHTML = val;
}

function captureSliderChange4(val) {
    document.getElementById("slider4HTMLUpdate").innerHTML = val;
}

//=========================================================
$(document).ready(function() {

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
    var dietaryVal = [],
        cuisineVal = "",
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

    //dropdown selections
    $('.ui.dropdown').dropdown();

    // ===========================================================
    // NEW (Star) - I replaced the previous function with these two functions
    // The variables for diet and cuisine now change values based on dropdown selections
    $("#diet").on("change",function () {
       dietaryVal = $("#diet").val();
       console.log(dietaryVal);
    });

    $("#cuisine").on("change",function () {
        cuisineVal = $("#cuisine").val();
        console.log(cuisineVal);
    });

    //============================================================



    console.log("test");

    //remove search-form
    $("#submit").click(function(e) {
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

    $(document).on("click", "#flavorPage", function(event) {
        event.preventDefault();

    });

    $(document).on("click", ".recipe", function(a) {
        event.preventDefault();
        var recipeNameDiv = $("<h2>").text("recipe name is: ..."),
            ingredientsDiv = $("<h3>").text("ingredients are: ..."),
            prepTimeDiv = $("<h3>").text("prep time is: ..."),
            howToMakeButton = $("<a>").attr("src", "link goes here").html("<button>Learn How To Make</button>");
    });


});



//uses JQuery to grab values of slider when each individual slider moves
 $("#rangeSlider1, #rangeSlider2, #rangeSlider3, #rangeSlider4").on('change', function() {
     console.log($("#rangeSlider1").val());
     console.log($("#rangeSlider2").val());
     console.log($("#rangeSlider3").val());
     console.log($("#rangeSlider4").val());
 });

 //grabbing slider values
 function sliderChange(val) {
     document.getElementById("sliderStatus").innerHTML = val;
 }

 function sliderChange2(val) {
     document.getElementById("sliderStatus2").innerHTML = val;
 }

 function sliderChange3(val) {
     document.getElementById("sliderStatus3").innerHTML = val;
 }

 function sliderChange4(val) {
     document.getElementById("sliderStatus4").innerHTML = val;
 }
 
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
 


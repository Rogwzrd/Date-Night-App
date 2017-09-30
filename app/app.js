$(document).ready(function() {
    $('.ui.dropdown')
        .dropdown();

    $('.ui.range').range({
        min: 0,
        max: 10,
        start: 5,
        step: 1,
    });

    //yummly api
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        console.log(response);
        $("#foodInfo").html(JSON.stringify(response));
    })


});

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

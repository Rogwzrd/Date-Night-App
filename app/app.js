
//search term for api
var title = "pasta";
//api query
var queryURL = "http://api.yummly.com/v1/api/recipes?_app_id=d10c5b70&_app_key=af6e286e83053654370aa379046e6c3b&q=" + title;

//yummly api
$.ajax({
    url: queryURL,
    method: "GET"
}).done(function(response) {
    console.log(response);
    $("#foodInfo").html(JSON.stringify(response));
})

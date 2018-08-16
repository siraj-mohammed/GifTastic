var topics = ['Spider-Man','Hulk','Iron Man','Captain America','Punisher','Black Widow'];

$(document).ready(buildButtons);

$("#btnSubmit").on("click", function(event){
    event.preventDefault();
    var search = $("#favChar").val().trim();
    if (search && topics.indexOf(search) == -1){
        topics.push(search);
        buildButtons();
    }
    $("#favChar").val("");
});

function buildButtons(){
    $("#buttonsDiv").empty();
    for (var i = 0; i < topics.length ; i++){
        var button = $("<button>");
        button.text(topics[i]);
        button.attr("data-search", topics[i]);
        button.attr("data-clicked", "no");
        button.addClass("btn btn-outline-info btn-sm btn-search");
        $("#buttonsDiv").append(button);
    }
}

$(document).on("click", ".btn-search", function(event){
    event.preventDefault();        
    var searchChar = $(this).data("search");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + 
    searchChar + "&api_key=M0zV4qtBn4xLqXhAEfRcIRBxqXnr95Kh&tag=marvel&limit=10";
    
    $.ajax({
        url: queryURL,
        method: "GET",
    })
    .then(function(response){
        $("#giphyDiv").empty();
        var results = response.data;
        for (var i = 0; i < results.length; i++){
            var rating = results[i].rating;
            if (rating !== "r" && rating !== "pg-13"){
                var marvelDiv = $("<div class='giphy'>");
                var p = $("<p>").text("Rating: " + rating.toUpperCase());
                var meta = "Rating: " + rating.toUpperCase() + "\n" + "Title: " + results[i].title;
                var resultImage = $("<img>");
                resultImage.attr("src", results[i].images.fixed_height_still.url);
                resultImage.attr("title", meta);
                resultImage.attr("data-still", results[i].images.fixed_height_still.url);
                resultImage.attr("data-gif", results[i].images.fixed_height.url);
                resultImage.attr("data-state", "still");
                marvelDiv.append(resultImage);
                marvelDiv.append(p);
                $("#giphyDiv").prepend(marvelDiv);
                $("#giphyDiv").show();
            }
        }
    });
});

$(document).on("click", "img", function(){
    var state = $(this).attr("data-state");
    if (state === "still"){
        $(this).attr("src", $(this).attr("data-gif"));
        $(this).attr("data-state", "gif");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});

$("#giphyDiv").hide();
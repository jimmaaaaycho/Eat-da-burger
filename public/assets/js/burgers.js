
$(document).ready(function() {
    $("#submit-btn").on("click", function(event) {
        event.preventDefault();
        //making a new burger object
        var newBurger = {
            name: $("#newMeat").val().trim()
        };

        console.log(newBurger);

        //sending AJAX POST request
        $.post("/api/burgers", newBurger)
            .done(function(result) {

            var row = $("<div class='burgertweet'><button type='devourburger' class='devour-btn' data-id='" + result.id + "'>Devour Me</button></div>");

            row.append(newBurger.name);

            $("#adding").append(row);
        });

    });

    $(document).on("click", ".devour-btn", function(event) {
        event.preventDefault();

        var devouredBurger = $(this).attr("data-id");
        console.log(devouredBurger);
        var queryURL = "/api/burgers/" + devouredBurger;
        console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: "PUT"
        }).then(function(result) {

                location.reload();
        })
       
    });

});
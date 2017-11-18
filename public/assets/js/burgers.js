$(function() {
    $("#submit-btn").on("click", function(event) {
        event.preventDefault();

        //making a new burger object
        var newBurger = {
            name: $("#newMeat").val().trim(),
            devoured: false
        };

        console.log(newBurger);

        //sending AJAX POST request
        $.post("/api/burgers", newBurger)
            .done(function() {

            var row = $("<div class='burgertweet'><button type='devourburger'>");

            row.append("<p>" + newBurger.name + "</p>");

            $("#adding").append(row);
        // $.ajax("/api/burgers",{
        //     type: "POST",
        //     data: newBurger
        // }).then(function() {
        //     console.log("created new burger");
        // });
    });

    });

});
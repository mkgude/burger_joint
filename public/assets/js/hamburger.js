// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-devoured").on("click", function (event) {
    // on click get the ID of the hamburger clicked
    var id = $(this).data("id");
    // sets the hamburger clicked to be devoured
    var newDevoured = $(this).data("newdevoured");
    console.log("newDevoured = ", newDevoured);

    var newDevouredState = {
      devoured: !newDevoured,
    };

    // Send the PUT request.
    $.ajax("/api/hamburgers/" + id, {
      type: "PUT",
      data: newDevouredState,
    }).then(function () {
      console.log("changed devoured to", newDevouredState);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newHamburger = {
      name: $("#ca").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/hamburgers", {
      type: "POST",
      data: newHamburger,
    }).then(function () {
      console.log("created new hamburger");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".delete-hamburger").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/hamburgers/" + id, {
      type: "DELETE",
    }).then(function () {
      console.log("deleted hamburger", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});

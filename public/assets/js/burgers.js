// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
	$(".change-choice").on("click", function(event) {
	  var id = $(this).data("id");
	 
	  var newState = {
		devoured: 1,
	  };
  
	  // Send the PUT request.
	  $.ajax("/api/burgers/" + id, {
		type: "PUT",
		data: newState
	  }).then(
		function() {
		  
		  // Reload the page to get the updated list
		  location.reload();
		}
	  );
	});
  
	$(".create-form").on("submit", function(event) {
	  // Make sure to preventDefault on a submit event.
	  event.preventDefault();
  
	  var newCat = {
		burger_name: $("#ca").val().trim(),
		devoured: 0,
	  };
  
	  // Send the POST request.
	  $.ajax("/api/burgers", {
		type: "POST",
		data: newCat
	  }).then(
		function() {
		  console.log("created new cat");
		  // Reload the page to get the updated list
		  location.reload();
		}
	  );
	});
  
	$(".delete-burger").on("click", function(event) {
	  var id = $(this).data("id");
  
	  // Send the DELETE request.
	  $.ajax("/api/burgers/" + id, {
		method: "DELETE"
	  }).then(
		function() {
		  console.log("deleted cat", id);
		  // Reload the page to get the updated list
		  location.reload();
		}
	  );
	});
  });
  
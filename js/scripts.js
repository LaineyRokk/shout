$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var shout = $("input.person1").val();

    shout = shout.toUpperCase();
    $(".person1").text(shout);

    $("#story").show();

    event.preventDefault();
  })
})

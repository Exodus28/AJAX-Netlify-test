$.get("test.html", function(data) { //get html file, callback function, data is contents of file
    alert(data)
})

// .ajax is preferential to .get as it gives more control e.g. can set a 'fail' method to alert user to failed tas

$.ajax({
    url:"test.html"
}).done(function(data) {
    alert(data)
})

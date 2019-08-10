function addComments() {
    var comments ="<p>" + document.getElementById("userComments").value + "</p>";
    document.getElementById('addEventNames').innerHTML += comments;
    document.getElementById("userComments").placeholder = "Add your comments" ;
}
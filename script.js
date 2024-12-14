function addMovie() {
    var movieTitle = document.getElementById("inputTitle").value;
    var movieYear = document.getElementById("inputYear").value;
    var movieActors = document.getElementById("inputActors").value;
    var li = document.createElement("li");
    if (movieTitle !== "" && movieYear > 1900 && movieActors !== "") {
        li.innerHTML = "<input type='checkbox'> " + movieTitle + ", " + movieYear + ", (" + movieActors + ")";
        document.getElementById("Lista").appendChild(li); // dodaj czyszczenie pol po wypelnieniu
    } else {
        alert("Please fill out the checkboxes. Year must a number above 1900");
    } 
}
function deleteMovie() {
    var checkedBoxes = document.querySelectorAll("input[type='checkbox']:checked");
    for (var i = 0; i < checkedBoxes.length; i++) {
        document.getElementById("Lista").removeChild(checkedBoxes[i].parentNode);
    }
}
var button = document.getElementById("myButton");
var popup = document.getElementById("popup");
var closeButton = document.getElementById("closeButton");

// Show the popup when button is clicked
button.onclick = function () {
    popup.style.display = "block";
}

// Close the popup when close button is clicked
closeButton.onclick = function () {
    popup.style.display = "none"
}

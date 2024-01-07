// Array of prepopulated strings
var strings = [
  "https://www.youtube-nocookie.com/embed/videoseries?list=PLuWIxgNYqm0ketpCdUpLK4zjreYpDlLoE&enablejsapi=1",
  "https://www.canva.com/design/DAF4kU195is/HKaAbVXdekY1F7zSJRx6zw/watch?embed",
  "https://example.com",
  "https://redbuilder.dev"
];

function generateRandomPlaylist() {
  // Get a random index from the strings array
  var randomIndex = Math.floor(Math.random() * strings.length);
  
  // Get the string at the random index
  var randomPlaylist = strings[randomIndex];
  
  // Set the src attribute of the iframe to the random string
  // document.getElementById("play").src = "https://www.youtube-nocookie.com/embed/videoseries?list=" + randomPlaylist;
  document.getElementById("play").src = randomPlaylist;
}

// Call the function when the page loads
window.addEventListener("load", generateRandomPlaylist);
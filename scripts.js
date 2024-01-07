// Array of prepopulated strings
var strings = [
  "https://www.youtube-nocookie.com/embed/videoseries?list=PLuWIxgNYqm0ketpCdUpLK4zjreYpDlLoE&enablejsapi=1",
  "https://www.canva.com/design/DAF4kU195is/HKaAbVXdekY1F7zSJRx6zw/watch?embed",
  "https://example.com",
  "https://redbuilder.dev"
];

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
}

function setNextPlaylistID() {
  var currentIndex = strings.indexOf(getCookie("playlistID"));

  // If the cookie exists and its value is one of the playlist IDs in the array
  if (currentIndex !== -1) {
    // Pick the next playlist ID in the array (loop back to the first one if necessary)
    var nextIndex = (currentIndex + 1) % strings.length;
    var nextPlaylist = strings[nextIndex];

    // Save the next playlist ID as the cookie
    document.cookie = "playlistID=" + nextPlaylist + "; path=/";

    // Update the src attribute of the iframe to the next playlist 
    // https://www.youtube.com/embed/ZtD9bQIjE_k?si=iq6YzJ9GtYH3_I5r
    // https://www.youtube-nocookie.com/embed?v=jfioZtZ9iiE&list=RDjfioZtZ9iiE
    // https://www.youtube-nocookie.com/embed/?v=Tx1sqYc3qas&list=RDTx1sqYc3qas
    // https://www.youtube.com/watch?v=mj4cD5xn2n0&list=RD1e_j20yFAvo&start_radio=1  

    // document.getElementById("playlistiframe").src = "https://www.youtube-nocookie.com/embed/videoseries?list=" + nextPlaylist;
    // document.getElementById("playlistiframe").src = "https://www.youtube-nocookie.com/embed/" + nextPlaylist;
    // document.getElementById("playlistiframe").src = "https://www.youtube-nocookie.com/embed/?v=" + nextPlaylist;
    
    document.getElementById("play").src = randomPlaylist;
  } else {
    // If the cookie doesn't exist or its value is not in the array, generate a random playlist as before
    generateRandomPlaylist();
  }
}

function generateRandomPlaylist() {
  // Get a random index from the strings array
  var randomIndex = Math.floor(Math.random() * strings.length);

  // Get the string at the random index
  var randomPlaylist = strings[randomIndex];

  // Save the playlist ID as a cookie
  document.cookie = "playlistID=" + randomPlaylist + "; path=/";

  // Set the src attribute of the iframe to the random playlist
  // document.getElementById("playlistiframe").src = "https://www.youtube-nocookie.com/embed/videoseries?list=" + randomPlaylist;
  // document.getElementById("playlistiframe").src = "https://www.youtube-nocookie.com/embed/?v=" + randomPlaylist;
  document.getElementById("play").src = randomPlaylist;
}

// Call setNextPlaylistID() when the page loads
window.addEventListener("load", setNextPlaylistID);

/*
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
*/
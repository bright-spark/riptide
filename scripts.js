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

  if (currentIndex !== -1) {
    var nextIndex = (currentIndex + 1) % strings.length;
    var nextPlaylist = strings[nextIndex];

    document.cookie = "playlistID=" + nextPlaylist + "; path=/";
    document.getElementById("view").src = nextPlaylist;
  } else {
    generateRandomPlaylist();
  }
}

function generateRandomPlaylist() {
  var randomIndex = Math.floor(Math.random() * strings.length);
  var randomPlaylist = strings[randomIndex];

  document.cookie = "playlistID=" + randomPlaylist + "; path=/";
  document.getElementById("view").src = randomPlaylist;
}

window.addEventListener("load", setNextPlaylistID);

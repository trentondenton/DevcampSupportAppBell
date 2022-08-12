let audio = new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3');
setInterval(function () {
  // Response on ticket
  let alert = document.querySelectorAll(".chat-alert")
  if (alert.length === 0) console.log("no alert")
  else {
    console.log("There is an alert")
    audio.play();
  }
  // Ticket in queue 
  if ((document.querySelectorAll(".sidebar-scroll-container")[0].childNodes).length === 0) {
    console.log("No tickets in queue")
  } else {
    audio.play();
    console.log("Ticket in queue!")
  }
}, 4000)


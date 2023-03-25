let homeCount = 0
let guestCount = 0


// HOME FUNCTIONS
function addOneHome () {
  homeCount += 1
  document.getElementById("home-score").textContent = homeCount
}

function addTwoHome () {
  homeCount += 2
  document.getElementById("home-score").textContent = homeCount
}

function addThreeHome () {
  homeCount += 3
  document.getElementById("home-score").textContent = homeCount
}


// GUEST FUNCTIONS

function addOneGuest () {
  guestCount += 1
  document.getElementById("guest-score").textContent = guestCount
}

function addTwoGuest () {
  guestCount += 2
  document.getElementById("guest-score").textContent = guestCount
}

function addThreeGuest () {
  guestCount += 3
  document.getElementById("guest-score").textContent = guestCount
}

// NEW GAME FUNCTION

function newGame(){
  homeCount = 0
  guestCount = 0
   document.getElementById("guest-score").textContent = guestCount
  document.getElementById("home-score").textContent = homeCount
}
let loginContainer = document.getElementById("login");
let loginLink = document.getElementById("login-link");
let createAccountContainer = document.getElementById("create-account");
let createAccountLink = document.getElementById("create-account-link");
let accountPageContainer = document.getElementById("account-page");
let bookingContainer = document.getElementById("booking-panel-link");
let sidePanel = document.getElementById("side-panel");
let clickLeftBtn = document.getElementById("left-btn");
let clickRightBtn = document.getElementById("right-btn");

clickLeftBtn.onclick = function() {
  clickLeftBtn.style.width = "60%";
  clickLeftBtn.style.transition = "0.5s";
  clickLeftBtn.style.background = "darkcyan";
  clickLeftBtn.style.color = "white";
  clickLeftBtn.style.fontWeight = "bold";
  clickRightBtn.style.width = "85px";
  clickRightBtn.style.color = "black";
  clickRightBtn.style.background = "white";
  clickRightBtn.style.fontWeight = "normal";
  clickRightBtn.style.transition = "0.5s";
}

clickRightBtn.onclick = function() {
  clickRightBtn.style.width = "60%";
  clickRightBtn.style.transition = "0.5s";
  clickRightBtn.style.background = "darkcyan";
  clickRightBtn.style.color = "white";
  clickRightBtn.style.fontWeight = "bold";
  clickLeftBtn.style.width = "85px";
  clickLeftBtn.style.color = "black";
  clickLeftBtn.style.background = "white";
  clickLeftBtn.style.fontWeight = "normal";
  clickLeftBtn.style.transition = "0.5s";
}

function showSidePanel() {
  sidePanel.style.display = "block";
} 

function closeSidePanel() {
  sidePanel.style.display = "none";
} 

createAccountLink.onclick = function(){
  loginContainer.style.display = "none";
  createAccountContainer.style.display = "block";
}

loginLink.onclick = function(){
  createAccountContainer.style.display = "none";
  loginContainer.style.display = "block";
}

function showAccountPage() {
  accountPageContainer.style.display = "block";
}

function closeAccountPage() {
  accountPageContainer.style.display = "none";
}

function showBookingDetails() {
  bookingContainer.style.display = "block";
}

function bookingComplete() {
    bookingContainer.style.display = "none";
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
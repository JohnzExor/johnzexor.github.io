let loginContainer = document.getElementById("login");
let loginLink = document.getElementById("login-link");
let createAccountContainer = document.getElementById("create-account");
let createAccountLink = document.getElementById("create-account-link");
let accountPageContainer = document.getElementById("account-page");
let bookingContainer = document.getElementById("booking-panel-link");


createAccountLink.onclick = function(){
  loginContainer.style.display = "none"
  createAccountContainer.style.display = "block";
}

loginLink.onclick = function(){
  createAccountContainer.style.display = "none"
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
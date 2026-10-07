const buttonName = document.getElementById("changeName");
const studentName = document.getElementById("studentName");

const buttonBackground = document.getElementById("changeBackground");
const profile = document.getElementById("profile");

const buttonDetails = document.getElementById("toggleDetails");
const details = document.getElementById("details");


buttonName.addEventListener("click", function () {
    studentName.textContent = "Maria Santos";
});


buttonBackground.addEventListener("click", function () {
    profile.classList.toggle("changed");
});


buttonDetails.addEventListener("click", function () {
    details.classList.toggle("hidden");
});

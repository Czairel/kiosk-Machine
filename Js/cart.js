const quantity = document.getElementById("qtid");
const submit = document.querySelector(".qt .submit");

quantity.addEventListener("input", function () {
quantity.setCustomValidity(
quantity.value < 1 ? "Choose at least 1 item." : "");});

quantity.addEventListener("keydown", function (event) {
event.key === "Enter" ? (event.preventDefault(), submit.click()) : null;});

function continueToPayment() {
localStorage.setItem("quantity", quantity.value);
window.location.href = "../html/payment.html";}

submit.addEventListener("click", function () {
quantity.value < 1? alert("Please choose a quantity.")    : continueToPayment();});

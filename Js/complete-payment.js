const totalInput = document.getElementById("dnid");
const doneButton = document.querySelector(".dn .submit");
window.addEventListener("load", function () {
const savedQuantity = Number(localStorage.getItem("quantity")) || 1;
const total = savedQuantity * 10;
totalInput.value = `$${total.toFixed(2)}`;
});
doneButton.addEventListener("click", function () {
    window.location.href = "thankyou.html";
});

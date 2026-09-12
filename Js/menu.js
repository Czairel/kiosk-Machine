const menuItems = document.querySelectorAll(".p1, .p2, .p3, .p4, .p5, .p6, .p7, .p8, .p9, .p10, .p11, .p12");
menuItems.forEach(function (menuItem) {
menuItem.addEventListener("mouseover", function () {
    menuItem.style.backgroundColor = "#f0f0f0";});
menuItem.addEventListener("mouseout", function () {
     menuItem.style.backgroundColor = "";});
});

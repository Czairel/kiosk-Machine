// this handle the page of the kiosk
const orderbutton = document.getElementById("order")

orderbutton.addEventListener("click", function () {
    showScreen("menu")
})

function showScreen(menu) {
    const sections = document.querySelectorAll("section")
    sections.forEach(function(persection) {
        persection.style.display = "none"
    })

    const target = document.getElementById(menu)
    target.style.display = "block"
}

// this handle the menu product to make it clickable
const pbutton = document.querySelectorAll(".pb1, .pb2, .pb3, .pb4, .pb5, .pb6")

pbutton.forEach(function(buttonone){
    buttonone.addEventListener("click", function(){
        showScreen("cart")
    })
})

// this will compute the total quantity that the user input
const quantityinput = document.getElementById("qtid") 
    quantityinput.addEventListener("input", function(){ 
    const quantity = Number(quantityinput.value)    
    const total = quantity * 10 
    inputotal.value = "$" + total
})

// this handle the button submit when u click it will go to the next page
const csubmit = document.querySelector(".submitA")
    csubmit.addEventListener("click", function (){
        showScreen("payment")
})

// this handle the Payment option button when click it will proceed with the total quantity of the purchase
const payoption = document.querySelector(".pbtnA")
payoption.addEventListener("click", function(){
    showScreen("complete")
})

// this handle the Complete payment when click then it will go to the last page 
const  inputotal = document.getElementById("dnid")

const dobutton = document.querySelector(".submitB")
    dobutton.addEventListener("click", function(){
        showScreen("thankyou")
    })

// when it proceed here it will show the thankyou wait for you order and have a button for home to go back to the order menu again
const homebutton = document.querySelector(".home")
    homebutton.addEventListener("click", function(){
        showScreen("home")
    })

// this handle the mouseover and mouseout when you hove a product the border color will change
const item = document.querySelectorAll(".pb1, .pb2, .pb3, .pb4, .pb5, .pb6")
    item.forEach(function(itembutton){
    itembutton.addEventListener("mouseover", function(){
        itembutton.style.borderColor = "#875704"
    })
    itembutton.addEventListener("mouseout", function() {
        itembutton.style.borderColor = ""
    })
})

// this handles load of section when you open the website it will always open the home section
window.addEventListener("load", function(){
    showScreen("home")
})

// Handles the Order button click opens the food menu then removes the order now button so it cant be clicked again
function menuopen(){
    showScreen("menu")
    orderbutton.removeEventListener("click", menuopen)
}
orderbutton.addEventListener("click", menuopen)

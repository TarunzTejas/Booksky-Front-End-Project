var btn=document.getElementById("btn")
var card=document.querySelector(".card")
var bookCard=document.querySelector(".book-card")
var add=document.querySelector(".add")
var popupOverlay=document.querySelector(".popup-overlay")
var popupBox=document.querySelector(".popup-box")
var bt =document.getElementById("bt")
var ba =document.getElementById("ba")
var sd =document.getElementById("sd")
var addin =document.getElementById("addin")
var cancel =document.getElementById("cancel")
var addpopup = document.getElementById("add-popup")

function remove(event){
    event.target.parentElement.remove()
}
function insert(){
    popupOverlay.style.display="block"
    popupBox.style.display="block"
}

cancel.addEventListener("click",function(event){
    event.preventDefault()
    popupOverlay.style.display="none"
    popupBox.style.display="none"

})
addin.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-card")
    div.innerHTML=`<h2>${bt.value}</h2>
    <h3>${ba.value}</h3>
    <p>${sd.value}</p>
    <button id="btn" onclick="remove(event)">Delete</button>`
    card.append(div)
    popupOverlay.style.display="none"
    popupBox.style.display="none"


})
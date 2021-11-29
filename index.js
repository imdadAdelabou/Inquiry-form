

var profileElement = document.getElementById("linkprofile");
var liContact = document.getElementById("liContact");
var liProfile = document.getElementById("liprofile");
var contact = document.getElementById("content");
var profile = document.getElementById("profil");


profileElement.addEventListener("click", function (event){
    event.stopPropagation();
    contact.style.display = "none";
    profile.style.display = "contents";
    liProfile.classList.add("liselected");
    liContact.classList.remove("liselected");
    liProfile.classList.add("liselected");
});


var aContact = document.getElementById("linkContact");
aContact.addEventListener("click", function (event) {
    event.stopPropagation();
    var letContact = document.getElementById("liprofile");

    liProfile.classList.remove("testprofile");
    liProfile.classList.remove("liselected");
    liContact.classList.add("liselected");
    profile.style.display = "none";
    contact.style.display = "contents"; 
});
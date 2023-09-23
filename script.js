//alert("hello")
console.log("hello")

var tabtitles= document.getElementsByClassName("tab-link")
var tabcontents= document.getElementsByClassName("tab-content");

function opentab(tabname){
    for(tabtitle of tabtitles){
        tabtitle.classList.remove("active-title")
    }

    for(tabcontent of tabcontents ){
        tabcontent.classList.remove("active-tab")
    }
    
    event.currentTarget.classList.add("active-title")
    document.getElementById(tabname).classList.add("active-tab")
    //event.currentTarget.classList.add("active-tab")
}

var sidemenu=document.getElementById("sidemenu")

function openmenu(){
    sidemenu.style.right="0"
}
function closemenu(){
    sidemenu.style.right="-500px";
    document.getElementsByClassName("fa-bars").style.display="none"
    
}




const scriptURL = 'https://script.google.com/macros/s/AKfycbwGUyrSuO4ETp7lAgPo8lJUPPsvsUZm-SJPbNCLoDCiHgl0l6umy7jd0yz0uvAVzRLSKw/exec'
const form = document.forms['submit-to-google-sheet']
const sucessmessage= document.getElementById("sucess-message");
form.addEventListener('submit', e =>
 {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {sucessmessage.innerHTML="Message sent sucessfully"

    setTimeout(function(){sucessmessage.innerHTML =""},3000)
    form.reset();
})
    .catch(error => console.error('Error!', error.message))
})


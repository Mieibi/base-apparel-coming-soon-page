//UI VARIABLES
const btn = document.querySelector(".btn-link");

//Load event Listeners
eventLoader();

//Load event Listeners
function eventLoader(){

    //validation of email
    btn.addEventListener("click",validation);
}

//email validation

function validation(e){

    
    //targeting warning text
    const mail = document.querySelector(".warning");

    //targeting warning sign
    const sign = document.querySelector(".error")

    //targeting email input
    const email = document.querySelector(".email-input");

    //getting email input value
    const emailValue = email.value;

    // //creating img for warning
    // const img = document.createElement("img")

    // img.src = "images/icon-error.svg";

    // img.className = "warning-img"
    //email Validation
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const Test = re.test(emailValue);
    
    
    //Test of Validation 
    if (Test){
        mail.style.display = "none";
        sign.style.display = "none";
        email.style.borderColor = "hsl(0, 36%, 70%)";
        email.value = "";
    }else{
        mail.style.display = "block";
        sign.style.display = "inline";
        email.style.textAlign = "left";
        email.style.borderColor = "hsl(0, 93%, 68%)";
    }
    //clear email input
    
    
    e.preventDefault();
}

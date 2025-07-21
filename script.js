//Show Details and Hide Details in Projects Section
const detailsButton=document.querySelectorAll(".detailsButton")

detailsButton.forEach((button) =>{
    button.addEventListener('click', function(){
        const projectDetails=button.nextElementSibling;

        if (projectDetails.style.display==="block"){
        projectDetails.style.display="none";
        button.textContent="Show Details";
        } 
        else{
        projectDetails.style.display="block";
        button.textContent="Hide Details";
        }
    });
});

//Validate Contact Form in Contact Section and Show Success Message
const contactForm=document.getElementById("contactForm");

const nameInput=document.getElementById("name");
const emailInput=document.getElementById("email");
const messageInput=document.getElementById("message");

const nameError=document.getElementById("nameError");
const emailError=document.getElementById("emailError");
const messageError=document.getElementById("messageError");

const successMessage=document.getElementById("successMessage");

contactForm.addEventListener("submit", function(event){

    nameError.textContent="";
    emailError.textContent="";
    messageError.textContent="";
    successMessage.textContent="";

    let isValid=true;

    if (nameInput.value.trim()===''){
        nameError.textContent="Please enter your name.";
        event.preventDefault();
        isValid=false;
    }

    if (emailInput.value.trim()===''){
        emailError.textContent="Please enter your email.";
        event.preventDefault();
        isValid=false;
    }
    else if (!validateEmail(emailInput.value)){
        emailError.textContent="Please enter a valid email address.";
        event.preventDefault();
        isValid=false;
    }

    if (messageInput.value.trim()===''){
        messageError.textContent="Please enter a message.";
        event.preventDefault();
        isValid=false;
    }
    else if (messageInput.value.length < 2){
        messageError.textContent="Message must be at least 2 characters.";
        event.preventDefault();
        isValid=false;
    }


    if (isValid){
        successMessage.textContent="Contact Form submitted successfully!";
    }

    event.preventDefault();

});

function validateEmail(email){
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(String(email));
}

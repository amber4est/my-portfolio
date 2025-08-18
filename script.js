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

//Typed.js
const intro=new Typed ("#intro",{
    strings: ["Welcome to my Portfolio!", "I am Amber!", "Check out my projects below!", "Thanks for viewing!"],
    typeSpeed: 60,
    backSpeed: 40,
    fadeOut: true,
    loop: true,
});

//Slide Show Photos in About Me Section
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const previous = document.querySelector(".previous")

function showSlides(i) {
  if (i >= slides.length)
    {slideIndex = 0}; //go back to first slide at end
  if (i < 0)
    {slideIndex = slides.length - 1}; //go to last slide if previous is clicked at start

  slides.forEach(slide => slide.style.display = "none"); //hides other slides
  slides[slideIndex].style.display = "block"; //shows current slide
}

next.addEventListener("click", function() {
  slideIndex++;
  showSlides(slideIndex);
}); 

previous.addEventListener("click", function() {
  slideIndex--;
  showSlides(slideIndex);
});

function autoSlide() {
  slideIndex++;
  showSlides(slideIndex);
  setTimeout(autoSlide, 2000);
}

showSlides(slideIndex);
autoSlide();

//Hide/Show Contact Form
const showFormButton = document.getElementById("showFormButton");

showFormButton.addEventListener("click", function() {
  if (contactForm.style.display == "none" || contactForm.style.display == "") {
    contactForm.style.display = "block";
    showFormButton.textContent = "Hide Contact Form";
  }
  else {
      contactForm.style.display = "none";
      showFormButton.textContent = "Contact Me Form";
  }
});

//Filter Buttons in Project Section
const filterButtons = document.querySelectorAll(".filterButton");
const projects = document.querySelectorAll(".projects");

filterButtons.forEach(button => {
  button.addEventListener("click", function() {
    const category = button.textContent;

    let visibleProject = null; 
    
    projects.forEach(project => {
      if (category == "All" || project.classList.contains(category)) {
        project.style.display = "flex";
        
        if (visibleProject == null) {
          visibleProject = project;
        }
      }
      else {
        project.style.display = "none";
      }
    });
    
    if (visibleProject !== null) {
      visibleProject.scrollIntoView({behavior: "smooth"});
    }
    
  });
});

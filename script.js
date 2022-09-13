
// Select element from html DOM
const input = document.querySelector(".pwd input");
const eye = document.querySelector(".pwd .bxs-low-vision");

// add Event 
eye.addEventListener('click', () => {
  // check if input type = password then type = text
  if(input.type === "password"){

    input.type = "text";

    // first remove close icon then add show icon 
    eye.classList.remove("bxs-low-vision");
    eye.classList.add("bxs-happy-heart-eyes");


    // Set automatic  time out to turn password mode
    setTimeout(() => {

      input.type = "password"
      eye.classList.remove("bxs-happy-heart-eyes");
      eye.classList.add("bxs-low-vision");

    }, 1400);


  }else{
    input.type = "password";
    eye.classList.add("bxs-low-vision");
  }
  
});
// JavaScript for typewriter effect
const words = ["I'm Pre-final Year Student","I'm an Aspiring Software Engineer","Meditation and Gratitude are my Strengths"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];
  if (isDeleting) {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j-1);
    j--;
    if (j == 0) {
      isDeleting = false;
      i++;
      if (i == words.length) {
        i = 0;
      }
    }
  } else {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j+1);
    j++;
    if (j == currentWord.length) {
      isDeleting = true;
    }
  }
  setTimeout(type, 100);
}

type();


// JavaScript for Modal about me pop-up
    const aboutMeBtn = document.getElementById("aboutMeBtn");
    const aboutModal = document.getElementById("aboutModal");
    const closeModal = document.getElementById("closeModal");
    const mainContent = document.getElementById("main-content");
    const outsideClick = document.getElementById("outsideClick");

    // Open Modal
    aboutMeBtn.addEventListener("click", () => {
      aboutModal.classList.remove("hidden");
      mainContent.classList.add("blurred-bg", "no-pointer-events");
    });

    // Close Modal on clicking the X button
    closeModal.addEventListener("click", () => {
      closeModalFunction();
    });

    // Close Modal on clicking outside the modal
    outsideClick.addEventListener("click", () => {
      closeModalFunction();
    });

    // Function to close modal
    function closeModalFunction() {
      aboutModal.classList.add("hidden");
      mainContent.classList.remove("blurred-bg", "no-pointer-events");
    }


    const myWorksButton = document.getElementById("myWorksButton");

    // Add event listener to scroll the page by 50% of the screen height
    myWorksButton.addEventListener("click", () => {
        // Calculate 50% of the viewport height
        const scrollAmount = window.innerHeight * 0.5;

        // Scroll the page smoothly to the new position
        window.scrollTo({
            top: window.scrollY + scrollAmount, 
            behavior: 'smooth' // Smooth scroll behavior
        });
    });
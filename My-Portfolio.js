const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".right ul");
const text =
  "Welcome to my portfolio! I’m Shobhit Sharma, showcasing my skills, projects, and resume. Explore my work, connect for collaborations, and see what I’m passionate about in web development!";
const typewriterElement = document.getElementById("typewriter");
let index = 0;
let isTyping = true;

function typeWriter() {
  if (isTyping) {
    if (index < text.length) {
      typewriterElement.innerHTML =
        text.substring(0, index + 1) + "<span class='cursor'></span>";
      index++;
      setTimeout(typeWriter, 100);
    } else {
      isTyping = false;
      setTimeout(typeWriter, 1000);
    }
  } else {
    if (index > 0) {
      typewriterElement.innerHTML =
        text.substring(0, index - 1) + "<span class='cursor'></span>";
      index--;
      setTimeout(typeWriter, 100);
    } else {
      isTyping = true;
      setTimeout(typeWriter, 500);
    }
  }
}
// Start the typing effect
setTimeout(typeWriter, 500);

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

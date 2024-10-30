const projectTypes = document.getElementsByClassName("projecttype");

function typeProject() {
  Array.from(projectTypes).forEach((element) => {
    const text = element.dataset.fulltext;
    let charIndex = 0;

    // Typing function for each element
    function typeLine() {
      if (charIndex < text.length) {
        element.innerHTML =
          text.slice(0, charIndex + 1) + "<span class='cursor'></span>";
        charIndex++;
        setTimeout(typeLine, 100);
      } else {
        element.innerHTML = text; // Remove the cursor after typing is done
      }
    }

    typeLine(); // Start typing effect for each element
  });
}

// Store the original text as a data attribute for each element
Array.from(projectTypes).forEach((element) => {
  element.dataset.fulltext = element.innerHTML;
  element.innerHTML = ""; // Clear initial content
});

typeProject();

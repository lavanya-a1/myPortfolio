// Typing Effect
const text = ["Web Developer", "Django Enthusiast", "ML Learner", "Creative Coder"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
const typingEl = document.querySelector(".typing-text");

function typeEffect() {
  if (index >= text.length) index = 0;
  currentText = text[index];

  if (isDeleting) {
    typingEl.textContent = currentText.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      index++;
    }
  } else {
    typingEl.textContent = currentText.substring(0, charIndex++);
    if (charIndex > currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  }
  setTimeout(typeEffect, isDeleting ? 70 : 150);
}

typeEffect();

// Circular Skill Fill (uses CSS variable)
document.querySelectorAll('.circle').forEach(circle => {
  const percent = circle.getAttribute("data-percent");
  circle.style.setProperty('--percent', percent + '%');
});




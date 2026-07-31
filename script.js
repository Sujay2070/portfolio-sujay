document.addEventListener("DOMContentLoaded", function () {
  const words = ["Web Developer", "Web Designer", "Frontend Developer"];
  let wordIndex = 0;
  let charIndex = 0;
  let currentWord = '';
  const typingSpeed = 100;
  const erasingSpeed = 50;
  const newWordDelay = 2000;

  function type() {
      if (charIndex < words[wordIndex].length) {
          currentWord += words[wordIndex].charAt(charIndex);
          document.querySelector('.typing-animation').textContent = currentWord;
          charIndex++;
          setTimeout(type, typingSpeed);
      } else {
          setTimeout(erase, newWordDelay);
      }
  }

  function erase() {
      if (charIndex > 0) {
          currentWord = currentWord.slice(0, -1);
          document.querySelector('.typing-animation').textContent = currentWord;
          charIndex--;
          setTimeout(erase, erasingSpeed);
      } else {
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(type, typingSpeed + 1100);
      }
  }

  type();
});



// Animate progress bars
const progressBars = document.querySelectorAll('.progress-done');

progressBars.forEach(bar => {
    setTimeout(() => {
        bar.style.width = bar.getAttribute('data-done') + '%';
        bar.style.opacity = 1;
    }, 500);
});

// Animate circular skills
const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
    let percent = circle.getAttribute('data-percent');
    circle.style.setProperty('--percent', percent);
});
// ===============================
// Dark / Light Mode
// ===============================

const themeToggle = document.getElementById("theme-toggle");

// Old theme load
if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light-mode");
    themeToggle.innerHTML="🌞";
}else{
    themeToggle.innerHTML="🌙";
}

themeToggle.addEventListener("click",()=>{

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeToggle.innerHTML="🌞";
        localStorage.setItem("theme","light");
    }else{
        themeToggle.innerHTML="🌙";
        localStorage.setItem("theme","dark");
    }

});
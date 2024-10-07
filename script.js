function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
const allowedUrls = ["projects.html", "blog.html", "education.html"];

function navigateTo(page) {
  if (allowedUrls.includes(page)) {
    window.location.href = page;
  } else {
    console.error("Invalid URL");
  }
}


document.addEventListener("DOMContentLoaded",()=>{
//animating the paragraph about what i do
const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Fullstack Developer",
  "Software Engineer",
];

let currentRoleIndex = 0;
const textElement = document.getElementById('animated-text');
//print the value of textElement
console.log(textElement);
function typeRole(role) {
  if (textElement) {
    textElement.textContent = role;
    textElement.style.width = `${role.length}ch`;
    textElement.style.animation = `typing 3s steps(${role.length}), blink-caret .75s step-end infinite`;
  }
}
function deleteRole(role) {
  if (textElement) {
    textElement.style.animation = `deleting 3s steps(${role.length}), blink-caret .75s step-end infinite`;
    setTimeout(() => {
      textElement.textContent = "";
    }, 3000);
  }
}
function cycleRoles() {
  typeRole(roles[currentRoleIndex]);
  setTimeout(() => {
    deleteRole(roles[currentRoleIndex]);
    setTimeout(() => {
      currentRoleIndex = (currentRoleIndex + 1) % roles.length;
      cycleRoles();
    }, 3000);
  }, 3000);
}
cycleRoles();

});

// anime({
//   targets: 'div',
//   translateX: 250,
//   rotate: '1turn',
//   backgroundColor: '#FFF',
//   duration: 800
// });

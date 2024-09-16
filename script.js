function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
const allowedUrls = ['projects.html', 'blog.html', 'education.html'];

function navigateTo(page) {
  if (allowedUrls.includes(page)) {
    window.location.href = page;
  } else {
    console.error('Invalid URL');
  }
}
// wait for the DOM to fininsh loading and then run the function
document.addEventListener("DOMContentLoaded", function() {
    const heading = document.getElementById("heading");
    const moon = document.getElementById("moon");

    window.addEventListener("scroll", () => {
        let value = window.scrollY;

        if (value <= 500) {
            heading.style.marginTop = value * 2.5 + 'px';
            moon.style.right = 20 + value * 0.1 + '%';
        }
    });
});
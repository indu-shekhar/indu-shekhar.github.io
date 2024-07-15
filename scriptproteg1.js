// // Add smooth scrolling to all links
// $('a').on('click', function(event) {
//     if (this.hash !== '') {
//         event.preventDefault();
//         var hash = this.hash;
//         $('html, body').animate({
//             scrollTop: $(hash).offset().top
//         }, 800, function(){
//             window.location.hash = hash;
//         });
//     }
// });
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
try {
    // Code that may throw an error
} catch (error) {
    // Handle the error here
    console.error('An error occurred:', error);
}
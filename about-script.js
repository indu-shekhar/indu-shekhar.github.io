document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    // Your code here
    anime.timeline()
        .add({
            targets: '#first',
            opacity: [0, 1],
            translateY: [-50, 0],
            easing: 'easeOutBounce',
            duration: 1000,
            delay: 500
        })
        .add({
            targets: '#second',
            opacity: [0, 1],
            translateY: [-50, 0],
            easing: 'easeOutBounce',
            duration: 1000,
            delay: 500
        })
        .add({
            targets: '#third',
            opacity: [0, 1],
            translateY: [-50, 0],
            easing: 'easeOutBounce',
            duration: 1000,
            delay: 500
        });
});
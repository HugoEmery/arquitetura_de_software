// Animação de entrada dos elementos
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.animate');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
    });
    
    setTimeout(function() {
        animatedElements.forEach(element => {
            element.style.opacity = '1';
        });
    }, 100);
});
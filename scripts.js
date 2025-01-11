// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     alert('Form submitted!');
// });



const toggle_button = document.getElementById('theme-toggle');

if (localStorage.getItem('#theme') === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
}
else{
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
}

// add event listener
document.addEventListener('DOMContentLoaded', () => {
    toggle_button.addEventListener('click', function() {
        const curr_theme = document.documentElement.getAttribute('data-theme');

    
        if (curr_theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const splashScreen = document.querySelector('.splash-screen');
    const logoContainer = document.querySelector('.logo-container');
    const header = document.querySelector('.header');
    const formLogoContainer = document.querySelector('.form-logo-container');
    const mainContent = document.querySelector('.main-content');
    const footer = document.querySelector('.footer');
    const loginForm = document.getElementById('loginForm');
    const googleSignupBtn = document.querySelector('.google-signup-btn');

    setTimeout(() => {
        const logoRect = logoContainer.getBoundingClientRect();
        const formLogoRect = formLogoContainer.getBoundingClientRect();
        
        const yDistance = formLogoRect.top - logoRect.top;
        
        logoContainer.style.transform = `translateY(${yDistance}px) scale(0.6)`;
        
        setTimeout(() => {
            splashScreen.style.opacity = '0';
            
            setTimeout(() => {
                splashScreen.style.display = 'none';
                header.style.display = 'flex';
                formLogoContainer.style.opacity = '1';
                mainContent.style.opacity = '1';
                footer.style.display = 'block';
            }, 300);
        }, 400);
    }, 1000);

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            console.log('Login attempt:', { email, password });
            
            alert('Login successful!');
        });
    }

    if (googleSignupBtn) {
        googleSignupBtn.addEventListener('click', function() {
            console.log('Google signup clicked');
            
            alert('Google signup functionality will be implemented here!');
        });
    }
});

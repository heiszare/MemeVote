document.addEventListener('DOMContentLoaded', function() {
    setActiveIcon();
    
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            this.classList.add('active');
            
            const tabId = this.getAttribute('data-tab');
            document.getElementById(`${tabId}-content`).classList.add('active');
        });
    });
    
    // Handle feedback form submission
    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackSuccess = document.getElementById('feedbackSuccess');
    
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const username = document.getElementById('username').value;
            const rating = document.querySelector('input[name="rating"]:checked')?.value || '0';
            const message = document.getElementById('message').value;
            
            // Store feedback in localStorage (for demo purposes)
            const feedback = {
                name,
                email,
                username,
                rating,
                message,
                date: new Date().toISOString()
            };
            
            // In a real application, you would send this data to a server
            // For now, we'll just store it in localStorage
            const feedbacks = JSON.parse(localStorage.getItem('feedbacks') || '[]');
            feedbacks.push(feedback);
            localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
            
            // Show success message
            feedbackForm.reset();
            feedbackForm.style.display = 'none';
            feedbackSuccess.style.display = 'block';
            
            // Hide success message after 5 seconds and show form again
            setTimeout(() => {
                feedbackSuccess.style.display = 'none';
                feedbackForm.style.display = 'block';
            }, 5000);
        });
    }
    
    // Star rating interaction
    const starLabels = document.querySelectorAll('.star-rating label');
    
    starLabels.forEach(label => {
        label.addEventListener('mouseover', function() {
            this.classList.add('hover');
        });
        
        label.addEventListener('mouseout', function() {
            this.classList.remove('hover');
        });
    });
    
    function setActiveIcon() {
        const currentPage = window.location.pathname.split('/').pop();
        
        const allIcons = document.querySelectorAll('.icon');
        allIcons.forEach(icon => {
            icon.classList.remove('active');
        });
        
        const profileCircle = document.querySelector('.profile-circle');
        profileCircle.classList.remove('active');
        
        document.querySelectorAll('.icon-label').forEach(label => {
            label.style.color = '#999999';
        });
        
        if (currentPage === '' || currentPage === 'index.html') {
            document.querySelector('.home-icon').classList.add('active');
            document.querySelector('.home-icon').nextElementSibling.style.color = '#ffffff';
        } else if (currentPage === 'upload.html') {
            document.querySelector('.upload-icon').classList.add('active');
            document.querySelector('.upload-icon').nextElementSibling.style.color = '#ffffff';
        } else if (currentPage === 'wallet.html') {
            document.querySelector('.wallet-icon').classList.add('active');
            document.querySelector('.wallet-icon').nextElementSibling.style.color = '#ffffff';
        } else if (currentPage === 'about.html' || currentPage === 'About.html') {
            document.querySelector('.about-icon').classList.add('active');
            document.querySelector('.about-icon').nextElementSibling.style.color = '#ffffff';
        } else if (currentPage === 'profile.html') {
            profileCircle.classList.add('active');
            profileCircle.nextElementSibling.style.color = '#ffffff';
        }
    }
});

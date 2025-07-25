document.addEventListener('DOMContentLoaded', function() {
    const splashScreen = document.querySelector('.splash-screen');
    const logoContainer = document.querySelector('.logo-container');
    const header = document.querySelector('.header');
    const mainContent = document.querySelector('.main-content');
    const footer = document.querySelector('.footer');
    
    const hasVisited = sessionStorage.getItem('hasVisitedHome');
    
    if (!hasVisited) {
        setTimeout(() => {
            logoContainer.style.transform = 'translateY(0) scale(0.6)';
            
            setTimeout(() => {
                splashScreen.style.opacity = '0';
                
                setTimeout(() => {
                    splashScreen.style.display = 'none';
                    header.style.display = 'flex';
                    mainContent.style.opacity = '1';
                    footer.style.display = 'block';
                    
                    sessionStorage.setItem('hasVisitedHome', 'true');
                    document.documentElement.classList.add('visited');
                }, 300);
            }, 400);
        }, 1000);
    } else {
        splashScreen.style.display = 'none';
        header.style.display = 'flex';
        mainContent.style.opacity = '1';
        footer.style.display = 'block';
        document.documentElement.classList.add('visited');
    }
    
    setTimelineProgress();
    setActiveIcon();
    
    const featuredImage = document.querySelector('.featured-image');
    
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeModal = document.querySelector('.close-modal');
    
    featuredImage.addEventListener('click', function() {
        showModal(this.src);
    });
    
    function showModal(imageSrc) {
        modal.style.display = "block";
        modalImg.src = imageSrc;
        document.body.style.overflow = 'hidden';
    }
    
    closeModal.addEventListener('click', function() {
        closeImageModal();
    });
    
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            closeImageModal();
        }
    });
    
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape" && modal.style.display === "block") {
            closeImageModal();
        }
    });
    
    function closeImageModal() {
        modal.style.display = "none";
        document.body.style.overflow = 'auto';
    }
    
    function setTimelineProgress() {
        const startDate = new Date('2023-05-01');
        const endDate = new Date('2023-05-07');
        const currentDate = new Date();
        
        const totalDuration = endDate - startDate;
        const elapsedDuration = currentDate - startDate;
        let progressPercentage = (elapsedDuration / totalDuration) * 100;
        
        progressPercentage = Math.max(0, Math.min(100, progressPercentage));
        
        const progressBar = document.querySelector('.timeline-progress-bar');
        progressBar.style.width = `${progressPercentage}%`;
    }
    
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
        } else if (currentPage === 'about.html') {
            document.querySelector('.about-icon').classList.add('active');
            document.querySelector('.about-icon').nextElementSibling.style.color = '#ffffff';
        } else if (currentPage === 'profile.html') {
            profileCircle.classList.add('active');
            profileCircle.nextElementSibling.style.color = '#ffffff';
        }
    }
});

const switchPageButton = document.getElementById('switchPageButton');
if (switchPageButton) {
    switchPageButton.addEventListener('click', function() {
        window.location.href = 'competition.html';
    });
}

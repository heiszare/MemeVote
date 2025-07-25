document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const mainContent = document.querySelector('.main-content');
    const footer = document.querySelector('.footer');
    
    header.style.display = 'flex';
    mainContent.style.opacity = '1';
    footer.style.display = 'block';
    
    setActiveIcon();
    
    const voteButtons = document.querySelectorAll('.vote-button');
    const memeImages = document.querySelectorAll('.meme-image');
    const originalImage = document.querySelector('.original-image');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeModal = document.querySelector('.close-modal');
    
    voteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const memeId = this.getAttribute('data-meme-id');
            
            voteButtons.forEach(btn => {
                btn.classList.remove('voted');
                btn.textContent = 'Vote';
            });
            
            this.classList.add('voted');
            this.textContent = 'Voted';
            
            sendVote(memeId);
        });
    });
    
    memeImages.forEach(image => {
        image.addEventListener('click', function() {
            showModal(this.src);
        });
    });
    
    originalImage.addEventListener('click', function() {
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
    
    function closeImageModal() {
        modal.style.display = "none";
        document.body.style.overflow = 'auto';
    }
    
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape" && modal.style.display === "block") {
            closeImageModal();
        }
    });
    
    function sendVote(memeId) {
        fetch('/api/votes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                memeId: memeId
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Vote registered successfully:', data);
        })
        .catch(error => {
            console.error('Error registering vote:', error);
        });
    }
    
    function checkVotedStatus() {
        fetch('/api/votes/status')
        .then(response => {
            if (!response.ok) {
                return null;
            }
            return response.json();
        })
        .then(data => {
            if (data && data.votedMemeId) {
                const votedButton = document.querySelector(`.vote-button[data-meme-id="${data.votedMemeId}"]`);
                if (votedButton) {
                    votedButton.classList.add('voted');
                    votedButton.textContent = 'Voted';
                }
            }
        })
        .catch(error => {
            console.error('Error checking voted status:', error);
        });
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
        
        if (currentPage === 'competition.html') {
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
        } else {
            document.querySelector('.home-icon').classList.add('active');
            document.querySelector('.home-icon').nextElementSibling.style.color = '#ffffff';
        }
    }
    
    checkVotedStatus();
});

const switchPageButton = document.getElementById('switchPageButton');
if (switchPageButton) {
    switchPageButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
}

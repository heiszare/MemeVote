document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('fileInput');
    const uploadArea = document.getElementById('uploadArea');
    const uploadPlaceholder = document.getElementById('uploadPlaceholder');
    const previewContainer = document.getElementById('previewContainer');
    const imagePreview = document.getElementById('imagePreview');
    const submitButton = document.getElementById('submitButton');
    
    const termsModal = document.getElementById('termsModal');
    const termsText = document.getElementById('termsText');
    const termsCheckbox = document.getElementById('termsCheckbox');
    const agreeButton = document.getElementById('agreeButton');
    const cancelButton = document.getElementById('cancelButton');
    
    let hasAgreedToTerms = false;
    
    setActiveIcon();
    
    uploadArea.addEventListener('click', function(e) {
        if (e.target !== fileInput) {
            fileInput.click();
        }
    });
    
    fileInput.addEventListener('change', function() {
        handleFileUpload(this.files);
    });
    
    uploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        uploadArea.classList.add('drag-over');
    });
    
    uploadArea.addEventListener('dragleave', function() {
        uploadArea.classList.remove('drag-over');
    });
    
    uploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        uploadArea.classList.remove('drag-over');
        handleFileUpload(e.dataTransfer.files);
    });
    
    function handleFileUpload(files) {
        if (files.length === 0) return;
        
        const file = files[0];
        
        if (!file.type.match('image.*')) {
            showNotification('Please select an image file', 'error');
            return;
        }
        
        if (file.size > 5 * 1024 * 1024) {
            showNotification('File size should not exceed 5MB', 'error');
            return;
        }
        
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            uploadPlaceholder.style.display = 'none';
            previewContainer.style.display = 'flex';
            
            showTermsModal();
        };
        reader.readAsDataURL(file);
    }
    
    termsText.addEventListener('scroll', function() {
        const isAtBottom = this.scrollHeight - this.scrollTop <= this.clientHeight + 5;
        
        if (isAtBottom) {
            termsCheckbox.disabled = false;
        }
    });
    
    termsCheckbox.addEventListener('change', function() {
        agreeButton.disabled = !this.checked;
    });
    
    agreeButton.addEventListener('click', function() {
        hasAgreedToTerms = true;
        hideTermsModal();
        submitButton.disabled = false;
        showNotification('You can now submit your meme', 'success');
    });
    
    cancelButton.addEventListener('click', function() {
        hideTermsModal();
        resetUploadForm();
    });
    
    submitButton.addEventListener('click', function() {
        submitButton.textContent = 'Uploading...';
        submitButton.disabled = true;
        
        setTimeout(function() {
            showNotification('Your meme was uploaded successfully!', 'success');
            resetUploadForm();
        }, 2000);
    });
    
    function showTermsModal() {
        termsModal.style.display = 'flex';
        setTimeout(() => {
            termsModal.style.opacity = '1';
        }, 10);
        document.body.style.overflow = 'hidden';
    }
    
    function hideTermsModal() {
        termsModal.style.opacity = '0';
        setTimeout(() => {
            termsModal.style.display = 'none';
            document.body.style.overflow = '';
        }, 300);
    }
    
    function showNotification(message, type) {
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => {
            document.body.removeChild(notification);
        });
        
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
    
    function resetUploadForm() {
        fileInput.value = '';
        imagePreview.src = '';
        uploadPlaceholder.style.display = 'flex';
        previewContainer.style.display = 'none';
        submitButton.textContent = 'Submit Meme';
        submitButton.disabled = true;
        
        hasAgreedToTerms = false;
        termsCheckbox.checked = false;
        termsCheckbox.disabled = true;
        agreeButton.disabled = true;
    }
    
    function setActiveIcon() {
        const currentPage = window.location.pathname.split('/').pop();
        
        const allIcons = document.querySelectorAll('.footer-menu .icon');
        allIcons.forEach(icon => {
            icon.classList.remove('active');
        });
        
        const profileCircle = document.querySelector('.profile-circle');
        profileCircle.classList.remove('active');
        
        document.querySelectorAll('.icon-label').forEach(label => {
            label.style.color = '#999999';
        });
        
        if (currentPage === '' || currentPage === 'index.html') {
            document.querySelector('.footer-menu .home-icon').classList.add('active');
            document.querySelector('.footer-menu .home-icon').nextElementSibling.style.color = '#ffffff';
        } else if (currentPage === 'upload.html') {
            document.querySelector('.footer-menu .upload-icon').classList.add('active');
            document.querySelector('.footer-menu .upload-icon').nextElementSibling.style.color = '#ffffff';
        } else if (currentPage === 'wallet.html') {
            document.querySelector('.footer-menu .wallet-icon').classList.add('active');
            document.querySelector('.footer-menu .wallet-icon').nextElementSibling.style.color = '#ffffff';
        } else if (currentPage === 'about.html') {
            document.querySelector('.footer-menu .about-icon').classList.add('active');
            document.querySelector('.footer-menu .about-icon').nextElementSibling.style.color = '#ffffff';
        } else if (currentPage === 'profile.html') {
            profileCircle.classList.add('active');
            profileCircle.nextElementSibling.style.color = '#ffffff';
        }
    }
});

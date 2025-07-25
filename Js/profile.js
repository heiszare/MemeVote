document.addEventListener('DOMContentLoaded', function() {
    setActiveIcon();
    
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabToActivate = this.getAttribute('data-tab');
            
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            this.classList.add('active');
            document.getElementById(tabToActivate).classList.add('active');
        });
    });
    
    const editProfileImage = document.querySelector('.edit-profile-image');
    editProfileImage.addEventListener('click', function() {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.click();
        
        fileInput.addEventListener('change', function() {
            if (this.files && this.files[0]) {
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    document.querySelector('.profile-image-large').src = e.target.result;
                    document.querySelector('.profile-circle img').src = e.target.result;
                };
                
                reader.readAsDataURL(this.files[0]);
            }
        });
    });
    
    const profileForm = document.querySelector('.profile-form');
    if (profileForm) {
        profileForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const username = document.getElementById('username').value;
            const bio = document.getElementById('bio').value;
            
            document.querySelector('.profile-name').textContent = name;
            document.querySelector('.profile-username').textContent = '@' + username;
            
            showNotification('Profile updated successfully!');
        });
    }
    
    const passwordForm = document.querySelector('.password-form');
    if (passwordForm) {
        passwordForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const currentPassword = document.getElementById('current-password').value;
            const newPassword = document.getElementById('new-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            if (!currentPassword || !newPassword || !confirmPassword) {
                showNotification('Please fill in all password fields', 'error');
                return;
            }
            
            if (newPassword !== confirmPassword) {
                showNotification('New passwords do not match', 'error');
                return;
            }
            
            showNotification('Password updated successfully!');
            
            this.reset();
        });
    }
    
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            darkModeToggle.checked = true;
        }
        
        darkModeToggle.addEventListener('change', function() {
            if (this.checked) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('darkMode', 'true');
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('darkMode', 'false');
            }
        });
    }
    
    const languageSelect = document.querySelector('.language-select');
    if (languageSelect) {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            languageSelect.value = savedLanguage;
        }
        
        languageSelect.addEventListener('change', function() {
            const selectedLanguage = this.value;
            localStorage.setItem('language', selectedLanguage);
            
            showNotification(`Language changed to ${getLanguageName(selectedLanguage)}`);
        });
    }
    
    const logoutButton = document.querySelector('.logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            handleLogout();
        });
    }
    
    const authButtons = document.querySelectorAll('.auth-button');
    authButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.classList.contains('login-button') ? 'login.html' : 'signup.html';
            window.location.href = page;
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
        
        if (currentPage === '' || currentPage === 'index.html') {
            document.querySelector('.home-icon').classList.add('active');
        } else if (currentPage === 'upload.html') {
            document.querySelector('.upload-icon').classList.add('active');
        } else if (currentPage === 'wallet.html') {
            document.querySelector('.wallet-icon').classList.add('active');
        } else if (currentPage === 'about.html' || currentPage === 'About us and rules.html') {
            document.querySelector('.about-icon').classList.add('active');
        } else if (currentPage === 'profile.html' || currentPage === 'Profile.html') {
            profileCircle.classList.add('active');
        }
        
        document.querySelectorAll('.icon-label').forEach(label => {
            label.style.color = '#999999';
        });
        
        const activeIcon = document.querySelector('.icon.active');
        if (activeIcon) {
            const activeLabel = activeIcon.nextElementSibling;
            if (activeLabel && activeLabel.classList.contains('icon-label')) {
                activeLabel.style.color = '#ffffff';
            }
        } else if (profileCircle.classList.contains('active')) {
            const profileLabel = profileCircle.nextElementSibling;
            if (profileLabel && profileLabel.classList.contains('icon-label')) {
                profileLabel.style.color = '#ffffff';
            }
        }
    }
    
    function handleLogout() {
        if (confirm('Are you sure you want to log out?')) {
            showNotification('You have been logged out');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000);
        }
    }
    
    function showNotification(message, type = 'success') {
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
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    function getLanguageName(code) {
        const languages = {
            'en': 'English',
            'es': 'Spanish',
            'fr': 'French',
            'de': 'German',
            'fa': 'Persian'
        };
        return languages[code] || code;
    }
});

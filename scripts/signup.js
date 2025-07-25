document.addEventListener('DOMContentLoaded', function() {
    const splashScreen = document.querySelector('.splash-screen');
    const logoContainer = document.querySelector('.logo-container');
    const header = document.querySelector('.header');
    const formLogoContainer = document.querySelector('.form-logo-container');
    const mainContent = document.querySelector('.main-content');
    const footer = document.querySelector('.footer');
    const signupForm = document.getElementById('signupForm');
    const googleSignupBtn = document.querySelector('.google-signup-btn');
    
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    
    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    
    const termsModal = document.getElementById('termsModal');
    const termsText = document.getElementById('termsText');
    const termsCheckbox = document.getElementById('termsCheckbox');
    const agreeButton = document.getElementById('agreeButton');
    const cancelButton = document.getElementById('cancelButton');
    const showTermsLink = document.getElementById('showTermsLink');
    const termsAgreementCheckbox = document.getElementById('terms');
    
    let hasAgreedToTerms = false;
    let formData = {};

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

    const inputs = [firstNameInput, lastNameInput, emailInput, passwordInput, confirmPasswordInput];
    
    inputs.forEach(input => {
        input.addEventListener('input', function(e) {
            const persianPattern = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
            if (persianPattern.test(this.value)) {
                this.value = this.value.replace(persianPattern, '');
                showError(this, 'Persian characters are not allowed');
            } else {
                clearError(this);
            }
        });
    });
    
    passwordInput.addEventListener('input', function() {
        validatePassword(this);
    });
    
    confirmPasswordInput.addEventListener('input', function() {
        validateConfirmPassword();
    });
    
    showTermsLink.addEventListener('click', function(e) {
        e.preventDefault();
        showTermsModal();
    });
    
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
        termsAgreementCheckbox.checked = true;
        
        if (Object.keys(formData).length > 0) {
            completeSignup(formData);
        }
    });
    
    cancelButton.addEventListener('click', function() {
        hideTermsModal();
        formData = {};
    });

    if (googleSignupBtn) {
        googleSignupBtn.addEventListener('click', function() {
            console.log('Google signup clicked');
            alert('Google signup functionality will be implemented here!');
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            clearAllErrors();
            
            let isValid = true;
            
            if (!validateName(firstNameInput)) {
                isValid = false;
            }
            
            if (!validateName(lastNameInput)) {
                isValid = false;
            }
            
            if (!validateEmail(emailInput)) {
                isValid = false;
            }
            
            if (!validatePassword(passwordInput)) {
                isValid = false;
            }
            
            if (!validateConfirmPassword()) {
                isValid = false;
            }
            
            if (isValid) {
                formData = {
                    firstName: firstNameInput.value,
                    lastName: lastNameInput.value,
                    email: emailInput.value,
                    password: passwordInput.value
                };
                
                showTermsModal();
            }
        });
    }
    
    function validateName(input) {
        if (input.value.trim() === '') {
            showError(input, 'This field is required');
            return false;
        }
        
        const englishPattern = /^[a-zA-Z\s]+$/;
        if (!englishPattern.test(input.value)) {
            showError(input, 'Only English letters are allowed');
            return false;
        }
        
        return true;
    }
    
    function validateEmail(input) {
        if (input.value.trim() === '') {
            showError(input, 'Email is required');
            return false;
        }
        
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(input.value)) {
            showError(input, 'Please enter a valid email address');
            return false;
        }
        
        return true;
    }
    
    function validatePassword(input) {
        if (input.value.trim() === '') {
            showError(input, 'Password is required');
            return false;
        }
        
        const passwordPattern = /^[a-zA-Z0-9]{8,}$/;
        if (!passwordPattern.test(input.value)) {
            showError(input, 'Password must be at least 8 characters long and contain only letters and numbers');
            return false;
        }
        
        return true;
    }
    
    function validateConfirmPassword() {
        if (confirmPasswordInput.value.trim() === '') {
            showError(confirmPasswordInput, 'Please confirm your password');
            return false;
        }
        
        if (confirmPasswordInput.value !== passwordInput.value) {
            showError(confirmPasswordInput, 'Passwords do not match');
            return false;
        }
        
        return true;
    }
    
    function showError(input, message) {
        input.classList.add('error');
        const errorElement = document.getElementById(input.id + 'Error');
        if (errorElement) {
            errorElement.textContent = message;
        }
    }
    
    function clearError(input) {
        input.classList.remove('error');
        const errorElement = document.getElementById(input.id + 'Error');
        if (errorElement) {
            errorElement.textContent = '';
        }
    }
    
    function clearAllErrors() {
        inputs.forEach(input => {
            clearError(input);
        });
    }
    
    function showTermsModal() {
        termsModal.style.display = 'flex';
        setTimeout(() => {
            termsModal.style.opacity = '1';
        }, 10);
        document.body.style.overflow = 'hidden';
        
        termsCheckbox.checked = false;
        agreeButton.disabled = true;
    }
    
    function hideTermsModal() {
        termsModal.style.opacity = '0';
        setTimeout(() => {
            termsModal.style.display = 'none';
            document.body.style.overflow = '';
        }, 300);
    }
    
    function completeSignup(data) {
        console.log('Signup attempt:', data);
        
        showNotification('Signup successful!', 'success');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
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
});

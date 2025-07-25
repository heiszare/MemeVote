document.addEventListener('DOMContentLoaded', function() {
    setActiveIcon();
    
    const getButton = document.querySelector('.get-button');
    const transferButton = document.querySelector('.transfer-button');
    const withdrawButton = document.querySelector('.withdraw-button');
    const taskButtons = document.querySelectorAll('.task-button');
    
    getButton.addEventListener('click', function() {
        alert('Get MeMeCoin feature coming soon!');
    });
    
    transferButton.addEventListener('click', function() {
        alert('Transfer feature coming soon!');
    });
    
    withdrawButton.addEventListener('click', function() {
        alert('Withdraw feature coming soon!');
    });
    
    taskButtons.forEach(button => {
        button.addEventListener('click', function() {
            const taskName = this.parentElement.querySelector('.task-name').textContent;
            alert(`Starting task: ${taskName}`);
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
        } else if (currentPage === 'about.html') {
            document.querySelector('.about-icon').classList.add('active');
            document.querySelector('.about-icon').nextElementSibling.style.color = '#ffffff';
        } else if (currentPage === 'profile.html') {
            profileCircle.classList.add('active');
            profileCircle.nextElementSibling.style.color = '#ffffff';
        }
    }
    
    animateBalanceCount();
    
    function animateBalanceCount() {
        const balanceElement = document.querySelector('.balance-amount');
        const targetBalance = 1250;
        let currentBalance = 0;
        const duration = 1500;
        const interval = 20;
        const steps = duration / interval;
        const increment = targetBalance / steps;
        
        const counter = setInterval(() => {
            currentBalance += increment;
            if (currentBalance >= targetBalance) {
                currentBalance = targetBalance;
                clearInterval(counter);
            }
            balanceElement.textContent = Math.floor(currentBalance).toLocaleString();
        }, interval);
    }
});

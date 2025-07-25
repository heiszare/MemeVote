document.addEventListener('DOMContentLoaded', function() {
    console.log('Template loaded successfully');
    
    // فقط یک بار در روز کش را بروزرسانی می‌کنیم
    checkAndRefreshCache();
    
    setActiveIcon();
    
    function setActiveIcon() {
        const currentPage = window.location.pathname.split('/').pop();
        
        const allIcons = document.querySelectorAll('.icon');
        allIcons.forEach(icon => {
            icon.classList.remove('active');
        });
        
        const profileCircle = document.querySelector('.profile-circle');
        if (profileCircle) profileCircle.classList.remove('active');
        
        document.querySelectorAll('.icon-label').forEach(label => {
            label.style.color = '#999999';
        });
        
        if (currentPage === '' || currentPage === 'index.html') {
            const homeIcon = document.querySelector('.home-icon');
            if (homeIcon) {
                homeIcon.classList.add('active');
                if (homeIcon.nextElementSibling) homeIcon.nextElementSibling.style.color = '#ffffff';
            }
        } else if (currentPage === 'upload.html') {
            const uploadIcon = document.querySelector('.upload-icon');
            if (uploadIcon) {
                uploadIcon.classList.add('active');
                if (uploadIcon.nextElementSibling) uploadIcon.nextElementSibling.style.color = '#ffffff';
            }
        } else if (currentPage === 'wallet.html') {
            const walletIcon = document.querySelector('.wallet-icon');
            if (walletIcon) {
                walletIcon.classList.add('active');
                if (walletIcon.nextElementSibling) walletIcon.nextElementSibling.style.color = '#ffffff';
            }
        } else if (currentPage === 'about.html') {
            const aboutIcon = document.querySelector('.about-icon');
            if (aboutIcon) {
                aboutIcon.classList.add('active');
                if (aboutIcon.nextElementSibling) aboutIcon.nextElementSibling.style.color = '#ffffff';
            }
        } else if (currentPage === 'profile.html') {
            if (profileCircle) {
                profileCircle.classList.add('active');
                if (profileCircle.nextElementSibling) profileCircle.nextElementSibling.style.color = '#ffffff';
            }
        } else if (currentPage === 'competition.html') {
            const homeIcon = document.querySelector('.home-icon');
            if (homeIcon) {
                homeIcon.classList.add('active');
                if (homeIcon.nextElementSibling) homeIcon.nextElementSibling.style.color = '#ffffff';
            }
        }
    }
    
    function checkAndRefreshCache() {
        // بررسی می‌کنیم آیا امروز قبلاً کش را بروزرسانی کرده‌ایم یا خیر
        const today = new Date().toDateString();
        const lastCacheRefresh = localStorage.getItem('lastCacheRefresh');
        
        // اگر امروز هنوز کش را بروزرسانی نکرده‌ایم، این کار را انجام می‌دهیم
        if (lastCacheRefresh !== today) {
            console.log('Refreshing cache for today');
            forceCacheRefresh();
            localStorage.setItem('lastCacheRefresh', today);
        } else {
            console.log('Cache already refreshed today');
            // فقط متاتگ‌های کنترل کش را اضافه می‌کنیم
            addCacheControlMetaTags();
        }
    }
    
    function forceCacheRefresh() {
        addCacheControlMetaTags();
        
        const version = new Date().getTime();
        
        refreshStylesheets(version);
        refreshScripts(version);
        
        setTimeout(function() {
            refreshImages(version);
        }, 100);
    }
    
    function addCacheControlMetaTags() {
        const head = document.head;
        
        // اگر متاتگ‌های کنترل کش قبلاً اضافه شده‌اند، آنها را حذف می‌کنیم
        const existingMetaTags = document.querySelectorAll('meta[http-equiv]');
        existingMetaTags.forEach(tag => {
            if (tag.getAttribute('http-equiv').toLowerCase() === 'cache-control' || 
                tag.getAttribute('http-equiv').toLowerCase() === 'pragma' || 
                tag.getAttribute('http-equiv').toLowerCase() === 'expires') {
                tag.remove();
            }
        });
        
        // متاتگ‌های جدید را اضافه می‌کنیم
        const cacheControl = document.createElement('meta');
        cacheControl.setAttribute('http-equiv', 'Cache-Control');
        cacheControl.setAttribute('content', 'no-cache, no-store, must-revalidate');
        head.appendChild(cacheControl);
        
        const pragma = document.createElement('meta');
        pragma.setAttribute('http-equiv', 'Pragma');
        pragma.setAttribute('content', 'no-cache');
        head.appendChild(pragma);
        
        const expires = document.createElement('meta');
        expires.setAttribute('http-equiv', 'Expires');
        expires.setAttribute('content', '0');
        head.appendChild(expires);
    }
    
    function refreshStylesheets(version) {
        const styleSheets = document.querySelectorAll('link[rel="stylesheet"]');
        
        styleSheets.forEach(styleSheet => {
            const href = styleSheet.getAttribute('href');
            if (href) {
                // پارامتر نسخه قبلی را حذف می‌کنیم
                let newHref = href.replace(/[?&]v=\d+/g, '');
                
                // پارامتر نسخه جدید را اضافه می‌کنیم
                newHref += (newHref.includes('?') ? '&' : '?') + 'v=' + version;
                
                // لینک را با آدرس جدید به‌روزرسانی می‌کنیم
                const newLink = document.createElement('link');
                newLink.rel = 'stylesheet';
                newLink.href = newHref;
                
                // لینک جدید را جایگزین لینک قبلی می‌کنیم
                styleSheet.parentNode.replaceChild(newLink, styleSheet);
            }
        });
    }
    
    function refreshScripts(version) {
        const scripts = document.querySelectorAll('script[src]');
        
        scripts.forEach(script => {
            const src = script.getAttribute('src');
            if (src) {
                // اسکریپت فعلی را نادیده می‌گیریم
                if (src.includes('template.js')) return;
                
                // پارامتر نسخه قبلی را حذف می‌کنیم
                let newSrc = src.replace(/[?&]v=\d+/g, '');
                
                // پارامتر نسخه جدید را اضافه می‌کنیم
                newSrc += (newSrc.includes('?') ? '&' : '?') + 'v=' + version;
                
                // اسکریپت جدید را ایجاد می‌کنیم
                const newScript = document.createElement('script');
                newScript.src = newSrc;
                
                // اسکریپت جدید را جایگزین اسکریپت قبلی می‌کنیم
                script.parentNode.replaceChild(newScript, script);
            }
        });
    }
    
    function refreshImages(version) {
        const images = document.querySelectorAll('img');
        
        images.forEach(img => {
            const src = img.getAttribute('src');
            if (src) {
                // پارامتر نسخه قبلی را حذف می‌کنیم
                let newSrc = src.replace(/[?&]v=\d+/g, '');
                
                // پارامتر نسخه جدید را اضافه می‌کنیم
                newSrc += (newSrc.includes('?') ? '&' : '?') + 'v=' + version;
                
                // آدرس تصویر را به‌روزرسانی می‌کنیم
                img.setAttribute('src', newSrc);
            }
        });
    }
});

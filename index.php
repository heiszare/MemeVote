<!DOCTYPE html>
<html lang="en">
<head>
    <?php include('./parts/heads.php');?>
    <title>MeMeVote  - Home</title>
    <link rel="stylesheet" href="./styles/index.css">
    <style>
        html.visited .splash-screen {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
        }
        
        html.visited .header {
            display: flex !important;
        }
        
        html.visited .main-content {
            opacity: 1 !important;
        }
        html.visited .footer {
            display: block !important;
        }
    </style>
    <script>
        if (sessionStorage.getItem('hasVisitedHome')) {
            document.documentElement.classList.add('visited');
        }
    </script>
</head>
<body>
    <div class="switch-page-button" id="switchPageButton">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
        </svg>
        <span>Competition</span>
    </div>
    <?php include('./parts/loader.php');?>
    <?php include('./parts/header.php');?>
    <main class="main-content">
        <section class="featured-image-section">
            <div class="featured-image-container">
                <img src="Image/meme1.webp" alt="Featured image" class="featured-image">
            </div>
        </section>

        <section class="content-section">
            <h2 class="section-title">Current Challenge</h2>
            <div class="description-container">
                <p class="description-text">
                    Create the funniest meme using this week's image. The best meme will win amazing prizes!
                </p>
            </div>
            
            <div class="download-button-container">
                <button class="download-button">
                    <svg class="download-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                    </svg>
                    Download Image
                </button>
            </div>
        </section>
        
        <div class="divider"></div>
        
        <section class="timeline-section">
            <h3 class="timeline-title">Challenge Timeline</h3>
            <div class="timeline-container">
                <div class="timeline-item">
                    <div class="timeline-date">Start: May 1, 2023</div>
                    <div class="timeline-date">End: May 7, 2023</div>
                </div>
                <div class="timeline-progress">
                    <div class="timeline-progress-bar"></div>
                </div>
            </div>
        </section>
    </main>
    <?php include('./parts/footer.php');?>
    <div id="imageModal" class="modal">
        <div class="modal-content-wrapper">
            <span class="close-modal">&times;</span>
            <img class="modal-content" id="modalImage">
        </div>
    </div>
    <?php include('./parts/footer.php');?>
    <script src="./scripts/template.js"></script>
    <script src="./scripts/index.js"></script>
</body>
</html>

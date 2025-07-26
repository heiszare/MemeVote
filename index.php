<?php require './functions.php';?>
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
        <img src="./assets/images/pen.svg" alt="pen svg icon">
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
                    <img src="./assets/images/download.svg" class="download-icon"  alt="svg download icon">
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
        <?php include('./parts/footer.php');?>
    </main>
    <div id="imageModal" class="modal">
        <div class="modal-content-wrapper">
            <span class="close-modal">&times;</span>
            <img class="modal-content" id="modalImage">
        </div>
    </div>
    <?php include('./parts/menu.php');?>
    <script src="./scripts/template.js"></script>
    <script src="./scripts/index.js"></script>
</body>
</html>

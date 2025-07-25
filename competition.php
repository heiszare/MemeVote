<!DOCTYPE html>
<html lang="en">
<head>
    <?php include('./parts/heads.php');?>
    <title>MeMeVote - Competition</title>
    <link rel="stylesheet" href="./styles/competition.css">
</head>
<body>
    <div class="switch-page-button" id="switchPageButton">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <span>Home</span>
    </div>
    <?php include('./parts/loader.php');?>
    <?php include('./parts/header.php');?>
    <main class="main-content">
        <section class="original-image-section">
            <h2 class="section-title">Original Image</h2>
            <div class="original-image-container">
                <img src="Image/meme2.webp" alt="Original image by manager" class="original-image">
            </div>
        </section>

        <section class="voting-section">
            <h2 class="section-title">Which meme do you vote for?</h2>
            
            <div class="memes-container">
                <div class="meme-card">
                    <div class="meme-image-container">
                        <img src="Image/meme3.webp" alt="Meme 1" class="meme-image">
                    </div>
                    <div class="meme-text">Meme by User1</div>
                    <div class="meme-info">
                        <button class="vote-button" data-meme-id="1">Vote</button>
                    </div>
                </div>

                <div class="meme-card">
                    <div class="meme-image-container">
                        <img src="Image/meme4.webp" alt="Meme 2" class="meme-image">
                    </div>
                    <div class="meme-text">Meme by User2</div>
                    <div class="meme-info">
                        <button class="vote-button" data-meme-id="2">Vote</button>
                    </div>
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
    <script src="./scripts/template.js"></script>
    <script src="./scripts/competition.js"></script>
</body>
</html>

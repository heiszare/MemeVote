<?php require './functions.php';?>
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
                <?php $memes=['user1'=>['meme3'],'user2'=>['meme4']];
                $c=0;
                foreach($memes as $meme=>$items):?>
                <div class="meme-card">
                    <div class="meme-image-container">
                        <img src="./memes/<?= $items[0];?>.webp" alt="<?= $items[0];?> image" class="meme-image">
                    </div>
                    <div class="meme-text">Meme by <?= $meme;?></div>
                    <div class="meme-info">
                        <button class="vote-button" data-meme-id="<?= $c;?>">Vote</button>
                    </div>
                </div>
                <?php endforeach;?>
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

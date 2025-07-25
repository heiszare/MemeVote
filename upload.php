<!DOCTYPE html>
<html lang="en">
<head>
    <?php include('./parts/heads.php');?>
    <title>MeMeVote - Upload</title>
    <link rel="stylesheet" href="./styles/upload.css">
</head>
<body>
    <?php include('./parts/header.php');?>
    <main class="main-content">
        <section class="upload-section">
            <h2 class="section-title">Upload Meme</h2>
            <p class="section-description">Upload your meme to participate in this week's challenge</p>
            
            <div class="upload-container" id="uploadContainer">
                <div class="upload-area" id="uploadArea">
                    <input type="file" id="fileInput" accept="image/*" class="file-input">
                    <div class="upload-placeholder" id="uploadPlaceholder">
                        <svg class="upload-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <p class="upload-text" style="color: #000000;">Click to upload or drag and drop</p>
                    </div>
                    <div class="preview-container" id="previewContainer">
                        <img id="imagePreview" class="image-preview" src="" alt="Preview">
                    </div>
                </div>
                <p class="points-required">You need 140 points to upload</p>
                <div class="submit-container">
                    <button id="submitButton" class="submit-button" disabled>Submit Meme</button>
                </div>
            </div>
        </section>
    </main>

    <!-- Terms Modal -->
    <div class="terms-modal" id="termsModal">
        <div class="terms-content">
            <h3 class="terms-title">Terms and Conditions</h3>
            <div class="terms-text" id="termsText">
                <p>Welcome to MeMeVote! Before uploading your meme, please read and agree to the following terms and conditions:</p>
                
                <h4>1. Content Guidelines</h4>
                <p>All memes must be appropriate for a general audience. Content that is offensive, discriminatory, or contains hate speech will be removed.</p>
                
                <h4>2. Voting and Competition</h4>
                <p>All uploaded memes will be part of the weekly competition. Users can vote for their favorite memes.</p>
                
                <h4>3. Points System</h4>
                <p>You need 140 points to upload a meme. Points can be earned by participating in the community.</p>
                
                <h4>4. User Conduct</h4>
                <p>Be respectful to other users. Harassment or bullying will not be tolerated.</p>
                
                <h4>5. Privacy</h4>
                <p>Your username will be displayed alongside your meme. Do not include personal information in your memes.</p>
            </div>
            <div class="terms-actions">
                <div class="terms-checkbox-container">
                    <input type="checkbox" id="termsCheckbox" disabled>
                    <label for="termsCheckbox">I have read and agree to the terms and conditions</label>
                </div>
                <div class="terms-buttons">
                    <button id="agreeButton" class="agree-button" disabled>I Agree</button>
                    <button id="cancelButton" class="cancel-button">Cancel</button>
                </div>
            </div>
        </div>
    </div>

    <?php include('./parts/footer.php');?>
    <script src="./scripts/template.js"></script>
    <script src="./scripts/upload.js"></script>
</body>
</html>

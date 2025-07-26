<?php require './functions.php';?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include('./parts/heads.php');?>
    <title>MeMeVote - Profile</title>
    <link rel="stylesheet" href="./styles/profile.css">
</head>
<body>
    <header class="header">
        <h1 class="site-name">MeMeVote</h1>
        <div class="auth-buttons">
            <a href="login.php" class="auth-button login-button">Login</a>
            <a href="sign up.php" class="auth-button signup-button">Sign Up</a>
        </div>
    </header>

    <main class="main-content">
        <section class="profile-header">
            <div class="profile-image-container">
                <img src="./assets/images/profile.png" alt="Profile" class="profile-image-large">
                <div class="edit-profile-image profile-circle">
                    <img src="./assets/images/edit.svg" alt="edit svg icon" class="edit-icon icon">
                </div>
            </div>
            <h2 class="profile-name">John Doe</h2>
            <p class="profile-username">@johndoe</p>
        </section>

        <section class="profile-tabs">
            <div class="tabs-container">
                <button class="tab-button active" data-tab="edit-profile">Edit Profile</button>
                <button class="tab-button" data-tab="settings">Settings</button>
                <button class="tab-button" data-tab="notifications">Notifications</button>
                <button class="tab-button" data-tab="awards">Awards & Titles</button>
            </div>
        </section>

        <section class="profile-content">
            <div class="tab-content active" id="edit-profile">
                <h3 class="section-title">Edit Profile</h3>
                <form class="profile-form">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" value="John Doe">
                    </div>
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" id="username" value="johndoe">
                    </div>
                    <div class="form-group">
                        <label for="bio">Biography</label>
                        <textarea id="bio" rows="4">Meme enthusiast and creator. I love making people laugh!</textarea>
                    </div>
                    <button type="submit" class="save-button">Save Changes</button>
                </form>
                
                <div class="password-section">
                    <h3 class="section-title">Change Password</h3>
                    <form class="password-form">
                        <div class="form-group">
                            <label for="current-password">Current Password</label>
                            <input type="password" id="current-password">
                        </div>
                        <div class="form-group">
                            <label for="new-password">New Password</label>
                            <input type="password" id="new-password">
                        </div>
                        <div class="form-group">
                            <label for="confirm-password">Confirm New Password</label>
                            <input type="password" id="confirm-password">
                        </div>
                        <button type="submit" class="save-button">Update Password</button>
                    </form>
                </div>
            </div>

            <div class="tab-content" id="settings">
                <h3 class="section-title">Settings</h3>
                <div class="settings-container">
                    <div class="setting-item">
                        <span class="setting-label">Dark Mode</span>
                        <label class="switch">
                            <input type="checkbox" id="dark-mode-toggle">
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div class="setting-item">
                        <span class="setting-label">Language</span>
                        <select class="language-select">
                            <option value="en">English</option>
                            <option value="es">Español</option>
                            <option value="fr">Français</option>
                            <option value="de">Deutsch</option>
                            <option value="fa">فارسی</option>
                        </select>
                    </div>
                    <div class="logout-container">
                        <button class="logout-button">Logout</button>
                    </div>
                </div>
            </div>

            <div class="tab-content" id="notifications">
                <h3 class="section-title">Notifications</h3>
                <div class="notification-settings">
                    <div class="notification-group">
                        <h4 class="notification-group-title">Wallet Notifications</h4>
                        <div class="notification-item">
                            <span class="notification-label">Meme Coins Reminder</span>
                            <label class="switch">
                                <input type="checkbox" checked>
                                <span class="slider round"></span>
                            </label>
                        </div>
                        <div class="notification-item">
                            <span class="notification-label">Prize Notifications</span>
                            <label class="switch">
                                <input type="checkbox" checked>
                                <span class="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div class="notification-group">
                        <h4 class="notification-group-title">League Notifications</h4>
                        <div class="notification-item">
                            <span class="notification-label">League Start</span>
                            <label class="switch">
                                <input type="checkbox" checked>
                                <span class="slider round"></span>
                            </label>
                        </div>
                        <div class="notification-item">
                            <span class="notification-label">League Results</span>
                            <label class="switch">
                                <input type="checkbox" checked>
                                <span class="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div class="notification-group">
                        <h4 class="notification-group-title">Other Notifications</h4>
                        <div class="notification-item">
                            <span class="notification-label">New Tasks</span>
                            <label class="switch">
                                <input type="checkbox" checked>
                                <span class="slider round"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tab-content" id="awards">
                <h3 class="section-title">Awards & Titles</h3>
                <div class="awards-container">
                    <div class="ranking-info">
                        <h4 class="ranking-title">Current Ranking</h4>
                        <div class="ranking-badge">
                            <span class="rank-number">42</span>
                            <span class="rank-label">Meme Master</span>
                        </div>
                    </div>
                    <div class="awards-list">
                        <h4 class="awards-title">Your Awards</h4>
                        <div class="award-item">
                            <div class="award-icon">🏆</div>
                            <div class="award-details">
                                <h5 class="award-name">Top Memer</h5>
                                <p class="award-description">Awarded for creating the funniest meme of the month</p>
                            </div>
                        </div>
                        <div class="award-item">
                            <div class="award-icon">🥇</div>
                            <div class="award-details">
                                <h5 class="award-name">League Champion</h5>
                                <p class="award-description">First place in the Spring 2023 Meme League</p>
                            </div>
                        </div>
                        <div class="award-item">
                            <div class="award-icon">⭐</div>
                            <div class="award-details">
                                <h5 class="award-name">Rising Star</h5>
                                <p class="award-description">Awarded to new members who show great potential</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <?php include('./parts/footer.php');?>
    </main>
    <?php include('./parts/menu.php');?>
    <script src="./scripts/template.js"></script>
    <script src="./scripts/profile.js"></script>
</body>
</html>

<?php require './functions.php';?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include('./parts/heads.php');?>
    <title>MeMeVote - Wallet</title>
    <link rel="stylesheet" href="./styles/wallet.css">
</head>
<body>
    <?php include('./parts/header.php');?>
    <main class="main-content">
        <section class="wallet-section">
            <h2 class="coin-name">MeMeCoin</h2>
            
            <div class="coin-balance-container">
                <div class="coin-balance">
                    <div class="balance-wrapper">
                        <span class="balance-amount">1,250</span>
                        <svg class="coin-logo" viewBox="0 0 336 336" xmlns="http://www.w3.org/2000/svg">
                            <path d="M264.073 219.96c-17.935 31.09-44.447 48.767-79.629 53.503-55.172 7.428-108.332-29.354-117.594-85.96-8.86-54.158 28.02-106.748 82.737-116.665 43.172-7.825 79.801 4.903 106.474 40.133 22.79 30.1 26.394 63.832 12.583 99.16-1.269 3.245-2.917 6.342-4.571 9.83m-72.42 41.087c24.168-5.334 43.294-18.276 57.76-38.264 1.737-2.402 2.855-4.663 1.123-7.732-4.022-7.128-8.202-14.117-13.916-20.053-7.366-7.652-15.967-10.23-26.301-6.797-8.966 2.978-16.845 7.921-24.714 12.917-14.333 9.099-27.726 19.646-42.7 27.755-1.893 1.025-3.904 1.842-5.892 2.678-15.372 6.461-25.05.636-27.442-16.014-1.314-9.148-.563-18.281-.955-27.413-.071-1.65.871-3.662-1.495-5.22-7.859 7.967-14.21 17.08-20.566 26.191-1.08 1.548-.214 2.789.484 4.143 8.743 16.976 21.78 29.776 38.492 38.726 20.57 11.016 42.454 13.836 66.121 9.083m-77.655-145.783c1.534-.646 3.036-1.389 4.609-1.92 9.938-3.357 17.27.013 21.297 9.688 1.805 4.336 2.646 8.909 3.426 13.495 1.586 9.323 2.266 18.803 4.619 27.988 1.443 5.632 2.891 6.043 7.428 2.628 6.561-4.937 11.97-11.084 17.693-16.9 9.578-9.732 18.682-19.993 30.01-27.816 15.68-10.829 27.942-10.407 42.88 1.229 3.753 2.923 6.958 6.41 10.618 10.5-11.702-30.008-49.723-59.249-97.034-53.877-36.263 4.117-67.493 30.997-75.874 58.416 10.02-8.568 18.686-17.357 30.328-23.431z"/>
                            <path d="M203.644 231.65c2.865-3.057 5.252-6.03 7.311-9.284.877-1.385 2.016-2.651 3.223-3.77 2.133-1.974 4.686-2.863 7.229-.974 2.77 2.057 2.558 5.061 1.047 7.64-9.021 15.391-21.107 26.525-39.924 28.02-2.652.21-5.304.778-7.942.698-3.087-.093-6.127-.93-6.768-4.634-.665-3.847 1.84-5.506 5.073-6.094 4.07-.741 8.222-1.033 12.3-1.742 7.081-1.23 13.29-4.228 18.45-9.86z"/>
                        </svg>
                    </div>
                    <span class="balance-label">MeMeCoins</span>
                </div>
            </div>
            
            <div class="wallet-actions">
                <div class="action-row">
                    <button class="wallet-button get-button">
                        <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 5v14M5 12h14"></path>
                        </svg>
                        Get MeMeCoin
                    </button>
                    
                    <button class="wallet-button transfer-button">
                        <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M7 17l10-10M7 7h10v10"></path>
                        </svg>
                        Transfer
                    </button>
                </div>
                
                <div class="action-row">
                    <button class="wallet-button withdraw-button">
                        <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 19l-7-7 7-7M5 12h14"></path>
                        </svg>
                        Withdraw
                    </button>
                </div>
            </div>
        </section>
        
        <div class="divider"></div>
        
        <section class="transaction-section">
            <h3 class="section-title">Transaction History</h3>
            
            <div class="transaction-list">
                <div class="transaction-item">
                    <div class="transaction-info">
                        <span class="transaction-type deposit">Deposit</span>
                        <span class="transaction-date">May 5, 2023</span>
                    </div>
                    <span class="transaction-amount positive">+100 MeMeCoins</span>
                </div>
                
                <div class="transaction-item">
                    <div class="transaction-info">
                        <span class="transaction-type withdrawal">Withdrawal</span>
                        <span class="transaction-date">May 3, 2023</span>
                    </div>
                    <span class="transaction-amount negative">-50 MeMeCoins</span>
                </div>
                
                <div class="transaction-item">
                    <div class="transaction-info">
                        <span class="transaction-type reward">Challenge Reward</span>
                        <span class="transaction-date">May 1, 2023</span>
                    </div>
                    <span class="transaction-amount positive">+200 MeMeCoins</span>
                </div>
            </div>
        </section>
        
        <div class="divider"></div>
        
        <section class="tasks-section">
            <h3 class="section-title">Tasks</h3>
            
            <div class="task-list">
                <div class="task-item">
                    <div class="task-info">
                        <span class="task-name">Join Telegram Channel</span>
                        <span class="task-reward">+10 MeMeCoins</span>
                    </div>
                    <button class="task-button">Start</button>
                </div>
                
                <div class="task-item">
                    <div class="task-info">
                        <span class="task-name">Follow on Twitter</span>
                        <span class="task-reward">+15 MeMeCoins</span>
                    </div>
                    <button class="task-button">Start</button>
                </div>
                
                <div class="task-item">
                    <div class="task-info">
                        <span class="task-name">Share on Social Media</span>
                        <span class="task-reward">+25 MeMeCoins</span>
                    </div>
                    <button class="task-button">Start</button>
                </div>
            </div>
        </section>
        <?php include('./parts/footer.php');?>
    </main>
    <?php include('./parts/menu.php');?>
    <script src="./scripts/template.js"></script>
    <script src="./scripts/wallet.js"></script>
</body>
</html>

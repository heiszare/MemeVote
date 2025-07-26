<menu class="footer-menu">
        <?php $m_items=(new jsonReader('menu_items'))->read_json();foreach($m_items as $item=>$options):?>
        <a href="<?=$item;?>.php" class="menu-item">
            <img src="./assets/images/<?=$options[0]['icon_name'];?>" class="icon <?=$item;?>-icon" alt="<?=$item;?> svg icon">
            <span class="menu-label"><?=$options[0]['name_fa'];?></span>
        </a>
    <?php endforeach;?>
</menu>
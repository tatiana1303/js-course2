export const Browse = {

    data() {
        return {
            showBrowseMenu: false,
        }
    },

    template: ` 
        <div class="browse" @click="showBrowseMenu = !showBrowseMenu">Browse <i class="fas fa-caret-down"></i></div>
        <div class="browse-menu__wrapper">
        <div class="browse-menu" v-show="showBrowseMenu">
        <p class="browse-menu__title">Women</p>
        <a href="#" class="browse-menu__link">Dresses</a>
        <a href="#" class="browse-menu__link">Tops</a>
        <a href="#" class="browse-menu__link">Sweaters/Knits</a>
        <a href="#" class="browse-menu__link">Jackets/Coats</a>
        <a href="#" class="browse-menu__link">Blazers</a>
        <a href="#" class="browse-menu__link">Denim</a>
        <a href="#" class="browse-menu__link">Leggings/Pants</a>
        <a href="#" class="browse-menu__link">Skirts/Shorts</a>
        <a href="#" class="browse-menu__link">Accessoires</a>
         <p class="browse-menu__title">Men</p>
        <a href="#" class="browse-menu__link">Tees/Tank tops</a>
        <a href="#" class="browse-menu__link">Shirts/Polos</a>
        <a href="#" class="browse-menu__link">Sweaters</a>
        <a href="#" class="browse-menu__link">Sweatshirts/Hoodies</a>
        <a href="#" class="browse-menu__link">Blazers</a>
        <a href="#" class="browse-menu__link">Jackets/vets</a>
        </div>
</div>
    `
};
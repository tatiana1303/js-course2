export const Topnavigation = {

    data() {
        return {
            showTopNavMenu: false,
        }
    },

    template: `
 <nav class="topNav container">
        <a href="#" class="topNav__link">Home</a> 
        <div class="topNav__link-wrapper">               
        <a href="men.html" class="topNav__link"  @mouseover="showTopNavMenu = !showTopNavMenu">Man</a>
        <div class="topNav__dd-menu" v-show="showTopNavMenu">
        <div class="dd-menu__col">
        <p class="dd-menu__title">Women</p>
        <a href="#" class="browse-menu__link">Dresses</a>
        <a href="#" class="browse-menu__link">Tops</a>
        <a href="#" class="browse-menu__link">Sweaters/Knits</a>
        <a href="#" class="browse-menu__link">Jackets/Coats</a>
        <a href="#" class="browse-menu__link">Blazers</a>
        <a href="#" class="browse-menu__link">Denim</a>
        <a href="#" class="browse-menu__link">Leggings/Pants</a>
        <a href="#" class="browse-menu__link">Skirts/Shorts</a>
        <a href="#" class="browse-menu__link">Accessoires</a>
        </div>
        <div class="dd-menu__col">
        <div>
        <p class="dd-menu__title">Women</p>
        <a href="#" class="browse-menu__link">Dresses</a>
        <a href="#" class="browse-menu__link">Tops</a>
        <a href="#" class="browse-menu__link">Sweaters/Knits</a>
        <a href="#" class="browse-menu__link">Jackets/Coats</a>
        </div>
        <div>
        <p class="dd-menu__title">Women</p>
         <a href="#" class="browse-menu__link">Dresses</a>
        <a href="#" class="browse-menu__link">Tops</a>
        <a href="#" class="browse-menu__link">Sweaters/Knits</a>
        </div>
        </div>
        <div class="dd-menu__col">
        <div>
        <p class="dd-menu__title">Women</p>
        <a href="#" class="browse-menu__link">Dresses</a>
        <a href="#" class="browse-menu__link">Tops</a>
        <a href="#" class="browse-menu__link">Sweaters/Knits</a>
        <a href="#" class="browse-menu__link">Jackets/Coats</a>
        </div>
        <div class="dd-menu__img">
        <img src="./img/dd-menu-img.jpg" alt="">
        <p class="dd-menu__img__text">Super<span>Sale!</span></p>
        </div>
        </div>
        </div> 
           </div>            
        <a href="women.html" class="topNav__link">Women </a>                
        <a href="#" class="topNav__link">Kids</a>                
        <a href="#" class="topNav__link">Accoseriese</a>                 
        <a href="#" class="topNav__link">Featured</a>               
        <a href="#" class="topNav__link">Hot Deals</a>
    </nav>
    `
};

// <div class="browse" @click="showBrowseMenu = !showBrowseMenu">Browse <i class="fas fa-caret-down"></i></div>
//   <div class="browse-menu__wrapper">
// <div class="browse-menu" v-show="showBrowseMenu">
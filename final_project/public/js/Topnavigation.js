import {NavBlock} from "./NavBlock.js";

export const Topnavigation = {
    components: {
        NavBlock,
    },

    data() {
        return {
            man: false,
            home: false,
            women: false,
            kids: false,
            accoseriese: false,
            featured: false,
            hotDeals: false,


        }
    },

    template: `
 <nav class="topNav container">
         <div class="topNav__link-wrapper" @mouseover="home = true" @mouseleave="home = false" >               
        <a href="catalog.html" class="topNav__link"  @mouseover="home = true" @mouseleave="home = false">Home</a>
       <navBlock v-show="home"></navBlock>
           </div>    
        <div class="topNav__link-wrapper"  @mouseover="man = true" @mouseleave="man = false">               
        <a href="catalog.html" class="topNav__link">Man</a>
       <navBlock v-show="man"></navBlock>
           </div>     
                    <div class="topNav__link-wrapper" @mouseover="women = true" @mouseleave="women = false">               
        <a href="catalog.html" class="topNav__link">Women</a>
       <navBlock v-show="women"></navBlock>
           </div>  
                  <div class="topNav__link-wrapper" @mouseover="kids = true" @mouseleave="kids = false" >               
        <a href="catalog.html" class="topNav__link">Kids</a>
       <navBlock v-show="kids"></navBlock>
           </div>     
              <div class="topNav__link-wrapper" @mouseover="accoseriese = true" @mouseleave="accoseriese = false">               
        <a href="catalog.html" class="topNav__link"  >Accoseriese</a>
       <navBlock v-show="accoseriese"></navBlock>
           </div>   
                 <div class="topNav__link-wrapper" @mouseover="featured = true" @mouseleave="featured = false">               
        <a href="catalog.html" class="topNav__link"  >Featured</a>
       <navBlock v-show="featured" ></navBlock>
           </div> 
            <div class="topNav__link-wrapper"  @mouseover="hotDeals = true" @mouseleave="hotDeals = false">               
        <a href="catalog.html" class="topNav__link" >Hot Deals</a>
       <navBlock v-show="hotDeals" ></navBlock>
           </div>      
        
    </nav>
    `
};

// <div class="browse" @click="showBrowseMenu = !showBrowseMenu">Browse <i class="fas fa-caret-down"></i></div>
//   <div class="browse-menu__wrapper">
// <div class="browse-menu" v-show="showBrowseMenu">
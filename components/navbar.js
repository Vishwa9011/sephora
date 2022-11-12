const navbar = () => {
	return `<div id="first">
     <div class="first-nav-container">
          <div id="firstR">
               <img src="https://cdn02.nnnow.com/web-images/master/navtree_metaData/59b2425ae4b0d70964ee66e0/1505806763887/12NNNOWLOGODESKTOP.png"
                    alt="">
               <span> | </span>
               <p>
                    <span class="material-symbols-outlined" style='color:#f39'>
                         location_on
                    </span>
               </p>
               <p>Store Locator</p>
          </div>
          <div id="firstM">
               <div class="star">
                    <div><span class="material-symbols-outlined" style="color: #704280">star</span></div>
                    <div><span class="material-symbols-outlined" style="color: #ffc001;">star</span>
                    </div>
                    <div><span class="material-symbols-outlined" style="color: #ec008c;">star</span>
                    </div>
               </div>
               <div id="star-mid-text" style="text-align: center; padding:0 10px;">
                    <p>Get 10% OFF on your first purhace.Use code:</p>
                    <p>BEAUTY10</p>
               </div>
               <div class="star">
                    <div><span class="material-symbols-outlined" style="color: #704280">star</span></div>
                    <div><span class="material-symbols-outlined" style="color: #ffc001;">star</span>
                    </div>
                    <div><span class="material-symbols-outlined" style="color: #ec008c;">star</span>
                    </div>
               </div>
          </div>
          <div id="firstL">
               <span class="material-symbols-outlined" style='color:#f39'>system_update</span>
               <p>Get APP</p>
               <span>|</span>
               <span class="material-symbols-outlined" style='color:#f39'>check_box_outline_blank</span>
               <p>Track Order</p>
               <span>|</span>
               <span class="material-symbols-outlined" style='color:#f39;'>military_tech</span>
               <p>Loyalty</p>
               <div>
               </div>
          </div>
     </div>
</div>
<div id="mid">
     <div class="mid-nav-container">
          <div id="midSearch">
               <div>
                    <span class="material-symbols-outlined" style='color:#f39'>search</span>
                    <input type="text" id="search" placeholder="Search SEPHORA">
               </div>
          </div>
          <div id="midimg">
               <div id="midGrid"> <span class="material-symbols-outlined">menu</span></div>
                    <a href="/"> <img src="./images/SEPHORA.png" alt="logo"></a>
               </div>
          <div id="midspan">
               <div>
                    <a>
                         <span id="gotoFavPage" class="material-symbols-outlined" style='color:#f39'>favorite</span>
                    </a>
               </div>
               <div>
                    <a>
                         <span id="gotoCartPage" class="material-symbols-outlined" style='color:#f39'>shopping_bag</span>
                    </a>
               </div>
               <div id="loginBtn"  class="loginBtn">
                    <span class="material-symbols-outlined" style='color:#f39'>person</span>
                    <span><a>Login</a></span>
               </div>
               <div id="userLogin">
                    <div id="userId"><span id="loginUserName"></span><span id="loginArrow"></span></div>
                    <ul id="logOut">
                         <li><a href="account.html"> <img src="./images/user.png" class="login-img"> <span>My Account</span> </a></li>
                         <li><a href="myorders.html"><img src="./images/cube.png" class="login-img"> <span>My Order</span> </a></li>
                         <li id="signOut"><img src="./images/logout.png" class="login-img"> <span>Sign Out</span> </li>
                    </ul>
               </div>
          </div>
     </div>
</div>
<div id="last">
     <ul id="nav-links">
          <li>
               <a id="sale" href="sale.html">SALE</a>
          </li>
          <li>
                 <a id="nav-makeup"> MAKEUP</a>
               <div class="megamenu">
                    <ul>
                         <li>Face</li>
                         <li>BB & CC Cream</li>
                         <li>Concealer</li>
                         <li> Face Primes</li>
                         <li> Highlighte </li>
                         <li> Face Brushes</li>
                         <li> Makeup Palete</li>
                    </ul>
                    <ul>
                         <li>Eye</li>
                         <li>Eye Palettes</li>
                         <li>Mascara</li>
                         <li>Eyeliner</li>
                         <li>Eyebrow</li>
                         <li>Eyeshadow</li>
                         <li>Eye Primer</li>
                         <li>Eye Brushes</li>
                         <li>Contact Lenses</li>
                    </ul>
                    <ul>
                         <li>LIP</li>
                         <li> Lipstick</li>
                         <li> Lip Stain</li>
                         <li> Lip Gloss</li>
                         <li> Lip Liner</li>
                         <li> Lip Balm & Treatment</li>
                         <li>Lip Brushes</li>
                    </ul>
                    <ul>
                         <li>CHEEK</li>
                         <li> Blush</li>
                         <li> Bronzer</li>
                         <li> Highlighter</li>
                         <li> Face Oils</li>
                    </ul>
                    <ul>
                         <li>NAIL MAKEUP</li>
                         <li>Nail Polish</li>
                         <li>Nail Care</li>
                         <li>Manicure & Pedicure Tools</li>
                    </ul>
                    <ul>
                         <li>MAKEUP ACCESSORIES</li>
                         <li>Tweezers & Eyebrow Tools</li>
                         <li>Makeup Removers</li>
                         <li>Sponges & Applicators</li>
                         <li>Makeup Bags & Travel Cases</li>
                    </ul>
                    <ul>
                         <li>VEGAN</li>
                         <li>Eye </li>
                         <li>Face</li>
                    </ul>
               </div>
          <li>
               <a id="nav-skincare">SKINCARE</a>
               <div class="megamenu">
                    <ul>
                         <li>MOISTURIZERS</li>
                         <li>Moisturizers</li>
                         <li>Night Creams</li>
                         <li>Mists & Essences</li>
                         <li>BB & CC Creams </li>
                    </ul>
                    <ul>
                         <li>CLEANSERS</li>
                         <li>Face Wash & Cleansers</li>
                         <li>Makeup Removers</li>
                         <li>Face Wipes</li>
                         <li>Toners</li>
                         <li>Hand Sanitizers</li>
                    </ul>
                    <ul>
                         <li>MASKS</li>
                         <li> Face Masks </li>
                         <li> Sheet Masks</li>
                         <li> Eye Masks </li>
                         <li> Nose Masks & Strips</li>
                         <li> Lip Masks </li>
                         <li> Hair Masks </li>
                         <li> Hand Masks </li>
                         <li> Foot Masks </li>
                    </ul>
                    <ul>
                         <li>BATH & SHOWER</li>
                         <li> Body Wash and Shower Gel</li>
                         <li> Scrub and Exfoliants </li>
                         <li> Exfoliators </li>
                    </ul>
                    <ul>
                         <li>NAIL MAKEUP</li>
                         <li>Nail Polish</li>
                         <li>Nail Care</li>
                         <li>Manicure & Pedicure Tools</li>
                    </ul>
                    <ul>
                         <li>BODY MOISTURIZERS</li>
                         <li>Body Lotions & Body Oils</li>
                         <li>Hand Cream & Foot Cream </li>
                    </ul>
                    <ul>
                         <li>VEGAN</h1>
                         <li>Face Care</li>
                    </ul>
               </div>
          </li>
          <li>
               <a id="nav-fragrance"> FRAGRANCE</a>
               <div class="megamenu">
                    <ul>
                         <li>WOMEN</li>
                         <li>Perfume </li>
                         <li>Mists and Deodorants</li>
                    </ul>
                    <ul>
                         <li>MEN</li>
                         <li> Perfume </li>
                         <li> Body Sprays & Deodorant</li>
                    </ul>


               </div>
          </li>
          <li>
               <a id="nav-haircare"> HAIRCARE</a>
               <div class="megamenu">
                    <ul>
                         <li>SHAMPOO & CONDITIONER</li>
                         <li>Shampoo </li>
                         <li>Conditioner</li>
                    </ul>
                    <ul>
                         <li>HAIR STYLING & TREATMENTS</li>
                         <li>Hair Spray & Styling Products</li>
                         <li>Hair Oil</li>
                         <li>Hair Masks</li>
                         <li>Hair Clips</li>
                    </ul>
               </div>
          </li>
          <li>
               <a id="nav-brushes"> TOOLS & BRUSHES</a>
               <div class="megamenu">
                    <ul>
                         <li>BRUSHES</li>
                         <li>Face Brushes</;>
                         <li>Eye Brushes </;>
                         <li>Lip Brushes </;>
                    </ul>
                    <ul>
                         <li>TOOLS</li>
                         <li>Sponges & Applicators</li>
                         <li>Face Tools</li>
                         <li>Hair Clips</li>
                         <li> Sharpeners</li>
                         <li>Tweezers & Eyebrow Tools</li>
                         <li>Eyelash Curlers</li>
                         <li>Accessories</li>
                         <li>Brush Cleaners</li>
                    </ul>
                    <ul>
                         <li>VEGAN</li>
                         <li>Face Brushes</li>
                         <li>Eye Brushes</li>
                    </ul>
               </div>
          </li>
          <li>
               <a id="nav-brands"> BRANDS</a>
               <div class="megamenu">
                    <ul>
                         <li>TOP MAKEUP BRANDS</li>
                         <li> Sephora Collection</li>
                         <li>Lancôme</li>
                         <li>Huda Beauty</li>
                         <li>Benefit Cosmetics</li>
                         <li>Anastasia Beverly Hills</li>
                         <li>Bobbi Brown</li>
                         <li>Smashbox</li>
                         <li>Estee Lauder</li>
                         <li>Nudestix</li>
                         <li>MAC</li>
                         <li>Make Up For Ever</li>
                         <li>Guerlain</li>
                    </ul>
                    <ul>
                         <li>TOP SKINCARE BRANDS</li>
                         <li>Lancôme</li>
                         <li>Caudalie</li>
                         <li>Kora Organics</li>
                         <li>Mario Badescu</li>
                         <li>Foreo</li>
                         <li>Pixi</li>
                         <li>Shiseido</li>
                         <li>Estee Lauder</li>
                         <li>Clarins</li>
                         <li>Elizabeth Arden</li>
                         <li>Clinique</li>
                         <li>Gallinee</li>
                         <li>Wishful</li>
                         <li>Sunday Riley</li>
                    </ul>
                    <ul>
                         <li>TOP FRAGRANCE BRANDS</li>
                         <li>Tom Ford</li>
                         <li>Hugo Boss</li>
                         <li>Issey Miyake</li>
                         <li>Ermenegildo Zegna</li>
                         <li>Dolce & Gabbana</li>
                         <li>Paco Rabanne</li>
                         <li>Bvlgari</li>
                         <li>Kayali</li>
                         <li>Roberto Cavalli</li>
                         <li>Versace</li>
                         <li>Davidoff</li>
                         <li>Calvin Klein</li>
                         <li>Chopard</li>
                         <li>Yves Saint Laurent</li>
                         <li>Burberry</li>
                    </ul>
                    <ul>
                         <li>NEW IN</li>
                         <li>ONE/SIZE by Patrick Starrr</li>
                         <li>Dior</li>
                         <li>Too Faced</li>
                         <li>Hanz de Fuko</li>
                         <li>Ikoo</li>
                         <li> Ouai</li>
                         <li>Abhati Suisse</li>
                         <li>Kora Organics</li>
                         <li>Caudalie</li>
                         <li>Mario Badescu</li>
                         <li>Moroccanoil</li>
                    </ul>
                    <ul>
                         <li>BRANDS A - Z</li>
                    </ul>
               </div>
          </li>
     </ul>
</div>`;
};

export { navbar };

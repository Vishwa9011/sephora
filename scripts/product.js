console.log("welcome in Product.js");

import { navbar } from "../components/navbar.js";
import { footer } from "../components/footer.js";

document.querySelector("#navbar").innerHTML = navbar();
document.querySelector("#footer").innerHTML = footer();

let productBrandId = JSON.parse(localStorage.getItem("productBrand"));

const getBrandName = () => {
	if (productBrandId === "ikoo-img") return "ikoo";
	else if (productBrandId === "hanz-de-fuko-img") return "hanz-de-fuko";
	else if (productBrandId === "pixi-img") return "pixi";
	else if (productBrandId === "abhati-img") return "abhati";
};

const getProductData = async () => {
	const productBrand = getBrandName();
	const url = `http://localhost:3000/${productBrand}`;
	const res = await fetch(url);
	const data = await res.json();
	console.log("data: ", data);
	appendProductBrandData(data);
};

getProductData();

const appendProductBrandData = async (data) => {
	document.querySelector("#product-container").innerHTML = "";
	data.forEach((el) => {
		const showTemplate = `<div class="product-item">
                                   <div class="product-image">
                                        <div>
                                             <img src="${el.img}" alt="">
                                        </div>
                                        <div class="product-cart">
                                             <div>
                                                  <span class="material-symbols-outlined"> shopping_bag </span>
                                                  <p>SHOP NNNOW</p>
                                             </div>
                                             <div>
                                                  <span class="material-symbols-outlined"> favorite </span>
                                                  <p>FAVORITE</p>
                                             </div>
                                        </div>
                                   </div>
                                   <div class="product-details">
                                        <div class="offer">
                                             <img src="https://cdn02.nnnow.com/web-images/master/product_tags/cb6e9f96-922e-42cb-84ae-9337178f87fa/1554297283453/Sale.png"
                                                  alt="">
                                             <p>OFFER</p>
                                        </div>
                                        <p class="product-brand">${el.brand}</p>
                                        <p class="product-description">${el.product}</p>
                                        <p class="product-price">${el.price}</p>
                                   </div>
                              </div>`;
		document.querySelector("#product-container").innerHTML +=
			showTemplate;
	});
};

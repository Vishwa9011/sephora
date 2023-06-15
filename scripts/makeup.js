console.log("welcome in makeup.js");

let goToPageName = JSON.parse(localStorage.getItem("goToPage"));

const getDataParticularPage = async () => {
	const url = `https://sephors.onrender.com/${goToPageName}`;
	const res = await fetch(url);
	const data = await res.json();
	console.log("data: ", data);
	// setTimeout(() => {
	for (let i in data) {
		appendDataOnPage(data[i], i);
	}
	// }, 2000);

	localStorage.setItem("currentPageContent", JSON.stringify(data));
};

getDataParticularPage();

const appendDataOnPage = ({ id, pageData }) => {
	document.querySelector(`.slider-cover${id} #product-container`).innerHTML =
		"";
	pageData.forEach((el, i) => {
		const showTemplate = `<div class="product-item" >
							<div class="product-image" >
								<div onclick="CreateDescription('${el.img}','${el.brand}','${el.product}','${el.price}')">
									<img title="${id}-${i}" src="${el.img}"	alt="">
								</div>
								<div class="product-cart">
                                             <div>
                                                  <span id="product-shop-now" class="material-symbols-outlined"> shopping_bag </span>
                                                  <p id="product-shop-now">SHOP NNNOW</p>
                                             </div>
                                             <div>
                                                  <span id="product-fav-add" class="material-symbols-outlined"> favorite </span>
                                                  <p id="product-fav-add">FAVORITE</p>
                                             </div>
                                        </div>
							</div>
							<div class="product-details" onclick="CreateDescription('${el.img}','${el.brand}','${el.product}','${el.price}')">
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
		document.querySelector(
			`.slider-cover${id} #product-container`,
		).innerHTML += showTemplate;
	});
};

document.body.onclick = (event) => {
	if (event.target.id == "product-fav-add") {
		let id =
			event.target.parentNode.parentNode.parentNode.children[0]
				.children[0].title;
		console.log("id: ", id);

		//todo addProductToFavorite();
		addProductToFavorite(id);
	}

	if (event.target.id == "product-shop-now") {
		let id =
			event.target.parentNode.parentNode.parentNode.children[0]
				.children[0].title;
		console.log("id: ", id);

		//todo addProductToCart();
		addProductToCart(id);
	}
};

//todo taking the existing userDetails from ls
let existingUserDataFromLS = JSON.parse(localStorage.getItem("existingUser"));
let currentPageContent = JSON.parse(localStorage.getItem("currentPageContent"));

// todo checking and getting the clicked proudct from dom
const gettingClickedProduct = (id) => {
	// console.log("temp: ", temp);

	if (existingUserDataFromLS != undefined) {
		id = id.split("-").map(Number);
		console.log("id: ", id[0]);
		console.log("id: ", id[1]);
		let temp = currentPageContent[id[0] - 1].pageData[id[1]];
		temp["email"] = existingUserDataFromLS.email;
		return temp;
	} else {
		document.querySelector("#login-signup").style.display = "flex";
		document.querySelector(".overlay").style.display = "block";
		document.querySelector("#login").style.display = "block";
	}
};

// todo adding the product into the cart database
const addProductToCart = async (id) => {
	let clickedProductData = gettingClickedProduct(id);
	if (clickedProductData) {
		try {
			const url = `https://sephors.onrender.com/cart`;
			const res = await fetch(url, {
				method: "POST",
				body: JSON.stringify(clickedProductData),
				headers: {
					"Content-Type": "application/json",
				},
			});
			const data = await res.json();
		} catch (error) {
			console.log("error: ", error);
		}
	}
};

const addProductToFavorite = async (id) => {
	let clickedProductData = gettingClickedProduct(id);
	if (clickedProductData) {
		try {
			const url = `https://sephors.onrender.com/favorite`;
			const res = await fetch(url, {
				method: "POST",
				body: JSON.stringify(clickedProductData),
				headers: {
					"Content-Type": "application/json",
				},
			});
			const data = await res.json();
		} catch (error) {
			console.log("error: ", error);
		}
	}
};

//todo containers
// !1
let product_slider_container1 = document.querySelector(
	".slider-cover1 #product-slider",
);

//todo navigation button
let product_slide_next1 = document.querySelector(
	".slider-cover1 #product-slider-next",
);
let product_slide_prev1 = document.querySelector(
	".slider-cover1 #product-slider-prev",
);

product_slide_next1.onclick = () => {
	console.log("next");
	product_slider_container1.scrollLeft += 208;
};
product_slide_prev1.onclick = () => {
	product_slider_container1.scrollLeft -= 208;
};

// !2
let product_slider_container2 = document.querySelector(
	".slider-cover2 #product-slider",
);
// var product_item = [...document.querySelectorAll(".product-item")];
// console.log("product_item: ", product_item);

//todo navigation button
let product_slide_next2 = document.querySelector(
	".slider-cover2 #product-slider-next",
);
let product_slide_prev2 = document.querySelector(
	".slider-cover2 #product-slider-prev",
);

product_slide_next2.onclick = () => {
	console.log("next");
	product_slider_container2.scrollLeft += 208;
};
product_slide_prev2.onclick = () => {
	product_slider_container2.scrollLeft -= 208;
};

let product_slider_container3 = document.querySelector(
	".slider-cover3 #product-slider",
);

//todo navigation button
let product_slide_next3 = document.querySelector(
	".slider-cover3 #product-slider-next",
);
let product_slide_prev3 = document.querySelector(
	".slider-cover3 #product-slider-prev",
);

product_slide_next3.onclick = () => {
	console.log("next");
	product_slider_container3.scrollLeft += 208;
};
product_slide_prev3.onclick = () => {
	product_slider_container3.scrollLeft -= 208;
};

// todo descritpion

const CreateDescription = (img, brand, product, price) => {
	let obj = { img, brand, product, price };
	localStorage.setItem("productExaminData", JSON.stringify(obj));
	window.location.href = "description.html";
};

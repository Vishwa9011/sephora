console.log("welcome in Product.js");

let productBrandId = JSON.parse(localStorage.getItem("productBrand"));

const getBrandName = () => {
	if (productBrandId === "ikoo-img") return "ikoo";
	else if (productBrandId === "hanz-de-fuko-img") return "hanz-de-fuko";
	else if (productBrandId === "pixi-img") return "pixi";
	else if (productBrandId === "abhati-img") return "abhati";
};

const getProductData = async () => {
	const productBrand = getBrandName();
	const url = `https://sephors.onrender.com/${productBrand}`;
	const res = await fetch(url);
	const data = await res.json();
	console.log("data: ", data);
	localStorage.setItem("sale-product-data", JSON.stringify(data));
	appendProductBrandData(data);
};

getProductData();

const appendProductBrandData = async (data) => {
	document.querySelector("#product-container").innerHTML = "";
	data.forEach((el, i) => {
		const showTemplate = `<div class="product-item">
                                   <div class="product-image">
                                        <div>
                                             <img title="${i}" src="${el.img}" alt="" onclick="CreateDescription('${i}')">
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
                                   <div class="product-details" onclick="CreateDescription('${i}')">
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

// ?=================================================================?//
// todo Order Management

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

// todo checking and getting the clicked proudct from dom
const gettingClickedProduct = (id) => {
	if (existingUserDataFromLS != undefined) {
		let sale_product_data = JSON.parse(
			localStorage.getItem("sale-product-data"),
		);

		let addemailINProduct = sale_product_data[id];
		console.log("addemailINProduct: ", addemailINProduct);
		addemailINProduct["email"] = existingUserDataFromLS.email;
		return addemailINProduct;
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

// todo show the product details in the description
const CreateDescription = (Index) => {
	let sale_product_data = JSON.parse(
		localStorage.getItem("sale-product-data"),
	);

	localStorage.setItem(
		"productExaminData",
		JSON.stringify(sale_product_data[Index]),
	);
	window.location.href = "description.html";
};

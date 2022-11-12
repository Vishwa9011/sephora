console.log("sejal");

let des_largeImg = document.querySelectorAll(".describtionLargeImg");
let count = 0;
des_largeImg.forEach((element, i) => {
	element.style.left = `${i * 100}%`;
});

const previous = () => {
	count--;
	console.log("prev");
	slideImage();
};

const next = () => {
	count++;
	console.log("next");
	slideImage();
};
const img1 = () => {
	count = 0;
	slideImage();
};
const img2 = () => {
	count = 1;
	slideImage();
};
const slideImage = () => {
	if (count < 0) {
		count = des_largeImg.length - 1;
	}
	if (count == des_largeImg.length) {
		count = 0;
	}
	des_largeImg.forEach((el) => {
		el.style.translate = `-${100 * count}%`;
	});
	console.log("slide");
};

// todo description data

let descriptionDataFromLS = JSON.parse(
	localStorage.getItem("productExaminData"),
);
console.log({ descriptionDataFromLS });

//todo dom manupulation for appending
let smallImg = document.querySelector(".slidesmallimg>img");
let largeImg = document.querySelector(".describtionLargeImg>img");
let brandContainer = document.querySelector("#sepCollection");
let descriptionContainer = document.querySelector("#desName");
let priceContainer = document.querySelector("#dprice");

//todo productExmainData for appending
let { img, product, brand, price } = descriptionDataFromLS;

smallImg.src = img;
largeImg.src = img;
brandContainer.innerHTML = brand;
descriptionContainer.innerHTML = product;
priceContainer.innerHTML = price;

//? todo =========================Add to bag button==============================
const AddtoBagFromDescription = document.querySelector("#addToBag");
const AddtoFavFromDescription = document.querySelector("#addtoFavorite");

AddtoFavFromDescription.onclick = () => {
	addProductToFav();
};

AddtoBagFromDescription.onclick = () => {
	addProductToCart();
};

//todo taking the existing userDetails from ls
let existingUserDataFromLS = JSON.parse(localStorage.getItem("existingUser"));
let currentPageContent = JSON.parse(localStorage.getItem("productExaminData"));

// todo checking and getting the clicked proudct from dom
const gettingClickedProduct = () => {
	if (existingUserDataFromLS != undefined) {
		currentPageContent["email"] = existingUserDataFromLS.email;
		// console.log("currentPageContent: ", currentPageContent);
		return currentPageContent;
	} else {
		document.querySelector("#login-signup").style.display = "flex";
		document.querySelector(".overlay").style.display = "block";
		document.querySelector("#login").style.display = "block";
	}
};

// todo adding the product into the cart database
const addProductToCart = async () => {
	let clickedProductData = gettingClickedProduct();
	if (clickedProductData) {
		try {
			const url = `http://localhost:3000/cart`;
			const res = await fetch(url, {
				method: "POST",
				body: JSON.stringify(clickedProductData),
				headers: {
					"Content-Type": "application/json",
				},
			});
			const data = res.json();
		} catch (error) {
			console.log("error: ", error);
		}
	}
};

const addProductToFav = async () => {
	let clickedProductData = gettingClickedProduct();
	if (clickedProductData) {
		try {
			const url = `http://localhost:3000/favorite`;
			const res = await fetch(url, {
				method: "POST",
				body: JSON.stringify(clickedProductData),
				headers: {
					"Content-Type": "application/json",
				},
			});
			const data = res.json();
		} catch (error) {
			console.log("error: ", error);
		}
	}
};

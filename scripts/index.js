console.log("Welcome in Index.js");

import { footer } from "../components/footer.js";
import { navbar } from "../components/navbar.js";
import { loginComp } from "../components/login.js";

const footerContainer = document.querySelector("#footer");
footerContainer.innerHTML = footer();

const navbarContainer = document.querySelector("#navbar");
navbarContainer.innerHTML = navbar();

const loginContainer = document.querySelector("#loginComponent");
loginContainer.innerHTML = loginComp();

// todo nav-links part
const navbar_nav_links = document.querySelector("#nav-links");
// console.log("navbar_nav_links: ", navbar_nav_links);

navbar_nav_links.onclick = (event) => {
	// console.log('event: ', event);
	let nav_links_id = [
		"nav-makeup",
		"nav-skincare",
		"nav-fragrance",
		"nav-haircare",
		"nav-brushes",
	];

	if (nav_links_id.includes(event.target.id)) {
		let val = event.target.id;
		val = val.split("-");
		console.log("val: ", val[1]);
		localStorage.setItem("goToPage", JSON.stringify(val[1]));
		window.location.href = `${val[1]}.html`;
	}
};

// ?=================================================================?//
let existingUserDataFromLS = JSON.parse(localStorage.getItem("existingUser"));

navbarContainer.onclick = (event) => {
	if (event.target.id == "gotoFavPage") {
		if (existingUserDataFromLS) {
			gotoPage("favorite");
		} else {
			document.querySelector("#login-signup").style.display = "flex";
			document.querySelector(".overlay").style.display = "block";
			document.querySelector("#login").style.display = "block";
		}
	} else if (event.target.id == "gotoCartPage") {
		if (existingUserDataFromLS) {
			gotoPage("cart");
		} else {
			document.querySelector("#login-signup").style.display = "flex";
			document.querySelector(".overlay").style.display = "block";
			document.querySelector("#login").style.display = "block";
		}
	}
};

const gotoPage = (val) => {
	localStorage.removeItem("AddressData");
	window.location.href = `${val}.html`;
};

// todo navbar navigation
let number = 0;
document.getElementById("midGrid").addEventListener("click", () => {
	console.log(number++);
	if (number % 2 == 1) {
		document.getElementById("last").style.display = "flex";
	} else {
		document.getElementById("last").style.display = "none";
	}
});

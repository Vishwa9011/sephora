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
console.log("navbar_nav_links: ", navbar_nav_links);

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

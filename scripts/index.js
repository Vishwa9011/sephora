import { footer } from "../components/footer.js";
import { navbar } from "../components/navbar.js";

const footerContainer = document.querySelector("#footer");
footerContainer.innerHTML = footer();

const navbarContainer = document.querySelector("#navbar");
navbarContainer.innerHTML = navbar();

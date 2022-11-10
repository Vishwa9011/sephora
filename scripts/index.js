import { footer } from "../components/footer.js";
import { navbar } from "../components/navbar.js";
import { loginComp } from "../components/login.js";

const footerContainer = document.querySelector("#footer");
footerContainer.innerHTML = footer();

const navbarContainer = document.querySelector("#navbar");
navbarContainer.innerHTML = navbar();

const loginContainer = document.querySelector("#loginComponent");
loginContainer.innerHTML = loginComp();

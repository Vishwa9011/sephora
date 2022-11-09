import { navbar } from "../components/navbar.js";
import { footer } from "../components/footer.js";

document.querySelector("#navbar").innerHTML = navbar();
document.querySelector("#footer").innerHTML = footer();

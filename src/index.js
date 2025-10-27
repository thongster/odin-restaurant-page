import "./../node_modules/modern-normalize/modern-normalize.css";
import "./assets/styles/styles.css";
import {createHeader} from "./components/header.js";
import {createNav} from "./components/nav.js";
import {createFooter} from "./components/footer.js";
import {displayHome} from "./pages/home.js";

createHeader();
createNav();
createFooter();
displayHome();

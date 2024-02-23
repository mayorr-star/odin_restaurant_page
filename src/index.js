import "./styles/homepage.css";
import "./styles/menupage.css";
import "./styles/contactpage.css";
import "./styles/nav.css";
import renderHomePage, { removeContent } from  "./pages/homepage";
import  renderMenuPage  from "./pages/menuPage";
import renderContactPage from "./pages/contactpage";

window.addEventListener("DOMContentLoaded", renderHomePage);

const navButtons = Array.from(document.querySelectorAll(".button"));
navButtons.forEach(button => {
    button.addEventListener("click", e => {
        switch (e.target.dataset.id) {
            case "home_btn":
                removeContent();
                renderHomePage();
                break;
            case "menu_btn":
                removeContent();
                renderMenuPage();
                console.log(e.target.dataset.id)
                break;
            default:
                removeContent();
                renderContactPage()
        }
    })
})
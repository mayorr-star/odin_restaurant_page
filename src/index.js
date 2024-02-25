import "./styles/homepage.css";
import "./styles/menupage.css";
import "./styles/contactpage.css";
import "./styles/nav.css";
import renderHomePage, { removeContent } from  "./pages/homepage";
import  renderMenuPage  from "./pages/menuPage";
import renderContactPage from "./pages/contactpage";

window.addEventListener("DOMContentLoaded", renderHomePage);


const navButtons = Array.from(document.querySelectorAll(".button"));
const showActivePage = (e) => {
    for (const button of navButtons) {
        if (!e.target.classList.contains("active_btn")) {
            e.target.classList.add("active_btn");
        };
        if ((button.dataset.id !== e.target.dataset.id) && button.classList.contains("active_btn")) {
            button.classList.remove("active_btn");
        }
    }
}
navButtons.forEach(button => {
    button.addEventListener("click", e => {
        switch (e.target.dataset.id) {
            case "home_btn":
                removeContent();
                renderHomePage();
                showActivePage(e);
                break;
            case "menu_btn":
                removeContent();
                renderMenuPage();
                showActivePage(e);
                break;
            default:
                removeContent();
                renderContactPage()
                showActivePage(e);
        }
    })
})
import { createMenuElement } from "./menuPage";
import { contentContainer } from "./homepage";
const header = createMenuElement("h1", "header", "Contact Us");
const contacts = createMenuElement("article", "contacts", null);
const email = createMenuElement("span", "email", "Email: nanasCocina@gmail.com");
const number = createMenuElement("span", "number", "Phone Number: +233 509502507");
const instagram = createMenuElement("span", "ig", "Instagram: Nana's_Cocina");
const wrapper = createMenuElement("div", "wrapper", null);
const contactsContent = createMenuElement("div", "contact_content", null);

contacts.appendChild(email);
contacts.appendChild(number);
contactsContent.appendChild(header);
contactsContent.appendChild(contacts);
contacts.appendChild(instagram);
wrapper.appendChild(contactsContent);
const renderContactPage = () => {
    contentContainer.appendChild(wrapper);
}

export default renderContactPage;
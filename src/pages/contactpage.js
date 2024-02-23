import { contentContainer } from "./homepage";
import { createHtmlElement } from "./menupage";
const header = createHtmlElement("h1", "header", "Contact Us");
const contacts = createHtmlElement("article", "contacts", null);
const email = createHtmlElement("span", "email", "Email: nanasCocina@gmail.com");
const number = createHtmlElement("span", "number", "Phone Number: +233 509502507");
const instagram = createHtmlElement("span", "ig", "Instagram: Nana's_Cocina");
const wrapper = createHtmlElement("div", "wrapper", null);
const contactsContent = createHtmlElement("div", "contact_content", null);

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
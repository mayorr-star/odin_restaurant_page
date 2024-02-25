import { contentContainer } from "./homepage";
import menuData from "../data";

export const createHtmlElement = (element, elementClass, elementContent) => {
    const createdElement = document.createElement(element);
    createdElement.classList.add(elementClass);
    createdElement.textContent = elementContent;

    return createdElement;
}

const createMeal = (name, price, type, imgSrc) => {
    const meal = createHtmlElement("article", "meal", null);
    meal.classList.add(type);
    const textContainer = createHtmlElement("div", "text", null);
    const imgContainer = createHtmlElement("div", "image", null);
    const mealName = createHtmlElement("span", "name", name);
    const mealPrice = createHtmlElement("span", "price", price);
    const mealImage = createHtmlElement("img", "img", null);
    mealImage.src = imgSrc;
    textContainer.appendChild(mealName);
    textContainer.appendChild(mealPrice);
    imgContainer.appendChild(mealImage);
    meal.appendChild(textContainer);
    meal.appendChild(imgContainer);

    return meal;
}

const renderMenuPage = () => {
    const menuContainer = createHtmlElement("main", "menu", null);
    const mainDishSection = createHtmlElement("section", "main_dishes", null);
    const sideDishSection = createHtmlElement("section", "side_dishes", null);
    const dessertSection = createHtmlElement("section", "desserts", null);
    const mainDishesHeader = createHtmlElement("h3", null, "Main Dish");
    const sideDishesHeader = createHtmlElement("h3", null, "Side Dish");
    const dessertsHeader = createHtmlElement("h3", null, "Desserts");
    const mainDishesContainer = createHtmlElement("div", "dish", null);
    const sideDishesContainer = createHtmlElement("div", "dish", null);
    const dessertsContainer = createHtmlElement("div", "dish", null);
    
    mainDishSection.appendChild(mainDishesHeader);
    mainDishSection.appendChild(mainDishesContainer);
    sideDishSection.appendChild(sideDishesHeader);
    sideDishSection.appendChild(sideDishesContainer);
    dessertSection.appendChild(dessertsHeader);
    dessertSection.appendChild(dessertsContainer);

    for (const meal of menuData) {
        const foodItem = createMeal(meal.name, meal.price, meal.type, meal.imageSrc)
        if (foodItem.classList.contains("main_dish")) {
            mainDishesContainer.appendChild(foodItem);
        } else if (foodItem.classList.contains("side_dish")) {
            sideDishesContainer.appendChild(foodItem);
        } else {
            dessertsContainer.appendChild(foodItem);
        }
    } 
    
    menuContainer.appendChild(mainDishSection);
    menuContainer.appendChild(sideDishSection);
    menuContainer.appendChild(dessertSection);
    contentContainer.appendChild(menuContainer);
}

export default renderMenuPage;

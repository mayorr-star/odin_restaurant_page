import { contentContainer } from "./homepage";
class Meal{
    constructor(name, price, type, description, imgSrc) {
        this.name = name;
        this.price = price;
        this.type = type;
        this.description = description;
    }

    storeMeal() {
        this.menu.push(this);
    }
}
Meal.prototype.menu = [];

const brownies = new Meal("Brownies", "$12.99", "dessert", "Best", "./src/images/brownies.jpeg");
const redVelvetCake = new Meal("Red Velvet Cake ", "$12.99", "dessert", "Best", "./src/images/Red Velvet Cake.jpeg");
const pumpkinPie = new Meal("Pumpkin Pie", "$12.99", "dessert", "Best", "./src/images/pumpkin pie.jpeg");
const bananaPudding = new Meal("Banana Pudding", "$12.99", "dessert", "Best", "./src/images/banana.jpeg");
const jollof = new Meal("Jollof", "$12.99", "main_dish", "Best", "./src/images/jollof.jpeg");
const banku = new Meal("Banku and Tilapia", "$12.99", "main_dish", "Best", "./src/images/banku and tilapia.jpeg");
const beans = new Meal("Beans and Plantain", "$12.99", "main_dish", "Best", "./src/images/beans.jpeg");
const waakye = new Meal("Waakye", "$12.99", "main_dish", "Best", "./waakye.jpeg");
const frenchFries = new Meal("French Fries", "$12.99", "side_dish", "Best", "./src/images/frech fries.jpeg");
const smashedPotatoes = new Meal("Smashed Potatoes", "$12.99", "side_dish", "Best", "./src/images/Smashed Potatoes.jpeg");
const creamedSpinach = new Meal("Creamed Spinach", "$12.99", "side_dish", "Best", "./src/images/creamed spinach");
const friedRice = new Meal("Fried Rice", "$12.99", "side_dish", "Best", "./src/images/fried rice.jpeg");

const addMeal = () => {
    brownies.storeMeal();
    redVelvetCake.storeMeal();
    pumpkinPie.storeMeal();
    bananaPudding.storeMeal();
    jollof.storeMeal();
    beans.storeMeal();
    banku.storeMeal();
    waakye.storeMeal();
    frenchFries.storeMeal();
    smashedPotatoes.storeMeal();
    creamedSpinach.storeMeal();
    friedRice.storeMeal();
}
addMeal();

export const createHtmlElement = (element, elementClass, elementContent) => {
    const createdElement = document.createElement(element);
    createdElement.classList.add(elementClass);
    createdElement.textContent = elementContent;

    return createdElement;
}

const createMeal = (name, price, type, description, imgSrc) => {
    const meal = createHtmlElement("article", "meal", null);
    meal.classList.add(type);
    const textContainer = createHtmlElement("div", "text", null);
    const imgContainer = createHtmlElement("div", "image", null);
    const mealName = createHtmlElement("span", "name", name);
    const mealPrice = createHtmlElement("span", "price", price);
    const mealDescription = createHtmlElement("p", "description", description);
    const mealImage = createHtmlElement("img", "img", null);
    mealImage.src = imgSrc;

    textContainer.appendChild(mealName);
    textContainer.appendChild(mealPrice);
    textContainer.appendChild(mealDescription);
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

    for (const meal of brownies.menu) {
        const foodItem = createMeal(meal.name, meal.price, meal.type, meal.description, meal.imgSrc)
        if (foodItem.classList.contains("main_dish")) {
            mainDishesContainer.appendChild(foodItem);
        } else if (foodItem.classList.contains("side_dish")) {
            sideDishesContainer.appendChild(foodItem);
        } else {
            dessertsContainer.appendChild(foodItem);
        }
    } 
    
    brownies.menu = [];
    menuContainer.appendChild(mainDishSection);
    menuContainer.appendChild(sideDishSection);
    menuContainer.appendChild(dessertSection);
    contentContainer.appendChild(menuContainer);
}

export default renderMenuPage;

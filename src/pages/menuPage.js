const createMenuElement = (element, elementClass, elementContent) => {
    const createdElement = document.createElement(element);
    createdElement.classList.add(elementClass);
    createdElement.textContent = elementContent;

    return createdElement;
}

const createMeal = (mealName, mealPrice, mealInfo, mealType) => {
    const menuArticle = createMenuElement("article", mealType, null)
    menuArticle.classList.add("meal");
    const mealNameHeader = createMenuElement("h4", null, mealName);
    const price = createMenuElement("span", "price", mealPrice);
    const info = createMenuElement("p", "info", mealInfo);

    menuArticle.appendChild(mealNameHeader);
    menuArticle.appendChild(price);
    menuArticle.appendChild(info);

    return menuArticle;
}

const addToMenu = (meal) => {
    menuArray.push(meal);
}

const menuContainer = createMenuElement("main", "menu", null);
const menuArray = [];

class MenuDish{
    constructor(meal, price, info, mealType) {
        this.meal = meal;
        this.price = price;
        this.info = info;
        this.mealType = mealType;
    }
}

const vanillaIceCream = new MenuDish("Vanilla Ice Cream", "$12.00", "yhbfbf", "dessert");
const va = new MenuDish("Vanilla Ice Cream", "$12.00", "yhbfbf", "dessert");
const van = new MenuDish("Vanilla Ice Cream", "$12.00", "yhbfbf", "dessert");
const vani = new MenuDish("Vanilla Ice Cream", "$12.00", "yhbfbf", "main-dish");
const vanil = new MenuDish("Vanilla Ice Cream", "$12.00", "yhbfbf", "main-dish");
const vanila = new MenuDish("Vanilla Ice Cream", "$12.00", "yhbfbf", "main-dish");
const vanilaI = new MenuDish("Vanilla Ice Cream", "$12.00", "yhbfbf", "side-dish");
const vanilaIc = new MenuDish("Vanilla Ice Cream", "$12.00", "yhbfbf", "side-dish");
const vanilaO = new MenuDish("Vanilla Ice Cream", "$12.00", "yhbfbf", "side-dish");
const vas = new MenuDish("Vanilla Ice Cream", "$12.00", "yhbfbf", "side-dish");
const vag = new MenuDish("Vanilla Ice Cream", "$12.00", "yhbfbf", "dessert");
const vat = new MenuDish("Vanilla Ice Cream", "$12.00", "yhbfbf", "main-dish");

addToMenu(vanillaIceCream);
addToMenu(va);
addToMenu(van);
addToMenu(vani);
addToMenu(vanil);
addToMenu(vanila);
addToMenu(vanilaI);
addToMenu(vanilaIc);
addToMenu(vanilaO);
addToMenu(vas);
addToMenu(vag);
addToMenu(vat);

const renderMenuPage = () => {
    const contentContainer = document.getElementById("content");
    const dessertSection = createMenuElement("section", "desserts", null);
    const mainDishSection = createMenuElement("section", "main_dishes", null);
    const sideDishSection = createMenuElement("section", "side_dishes", null);

    const dessertsHeader = createMenuElement("h3", null, "Desserts");
    const mainDishesHeader = createMenuElement("h3", null, "Main Dish");
    const sideDishesHeader = createMenuElement("h3", null, "Side Dish");

    const dessertsContainer = createMenuElement("div", "dish", null);
    const mainDishesContainer = createMenuElement("div", "dish", null);
    const sideDishesContainer = createMenuElement("div", "dish", null);

    dessertSection.appendChild(dessertsHeader);
    dessertSection.appendChild(dessertsContainer);
    mainDishSection.appendChild(mainDishesHeader);
    mainDishSection.appendChild(mainDishesContainer);
    sideDishSection.appendChild(sideDishesHeader);
    sideDishSection.appendChild(sideDishesContainer);
    
    for (const foodItem of menuArray) {
        const food = createMeal(foodItem.meal, foodItem.price, foodItem.info, foodItem.mealType);
        if (food.classList.contains("dessert")) {
            dessertsContainer.appendChild(food);
        } else if (food.classList.contains("main-dish")){
            mainDishesContainer.appendChild(food);
        } else {
            sideDishesContainer.appendChild(food);
        }
    }
    menuContainer.appendChild(dessertSection);
    menuContainer.appendChild(mainDishSection);
    menuContainer.appendChild(sideDishSection);

    contentContainer.appendChild(menuContainer);
}
export default renderMenuPage;
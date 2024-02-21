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

const vanillaIceCream = new MenuDish("Vanilla Ice Cream", "$8.00", "A subtle but intoxicating combination of sweet, creamy and floral notes.", "dessert");
const StrawberryCrunchCake = new MenuDish("Strawberry Crunch Poke Cake", "$8.00", "Made with real strawberries and rich cream frosting with crunchy cookies.", "dessert");
const caramelCake = new MenuDish("Caramel Cake", "$10.00", "Consist of super moist vanilla brown sugar cake layers and deep flavoured caramel frosting.", "dessert");
const ghanaJollof = new MenuDish("Ghana Jollof", "$20.00", "Perfectly cooked with tantalizing ghanaian spices and flavours.", "main-dish");
const banku = new MenuDish("Banku and Tilapia", "$25.00", "Traditional Ghanaian dish.", "main-dish");
const beans = new MenuDish("Beans and Plantain", "$6.00", "A Ghanaian comfort dish like no other. Rich in protein.", "main-dish");
const garlicBread = new MenuDish("Garlic Bread", "$12.00", "Classic side dish.", "side-dish");
const frenchFries = new MenuDish("French Fries", "$15.00", "Deep fried potatoes, well seasoned with salt.", "side-dish");
const hummus = new MenuDish("Hummus", "$12.00", "Middle eastern dip.", "side-dish");
const bruschetta = new MenuDish("Bruschetta", "$10.00", "Popular italian appetizer.", "side-dish");
const pancake = new MenuDish("Pancake", "$6.00", "Look no further, steaming stack of perfectly soft, fluffy pancakes are right here.", "dessert");
const beefEnchiladas = new MenuDish("Beef Enchiladas", "$20.00", "100% worth your time once you tatse them.", "main-dish");

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
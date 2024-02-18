const renderContent = () => {
    const contentContainer = document.getElementById("content");
    const mainContainer = document.createElement("main");
    const mainHeading = document.createElement("h1");
    const eatSpan = document.createElement("span");
    const drinkSpan = document.createElement("span");
    const smileSpan = document.createElement("span");
    const subHeading = document.createElement("h2");
    
    mainContainer.classList.add("content");
    
    eatSpan.textContent = "Eat.";
    drinkSpan.textContent = "Drink.";
    smileSpan.textContent = "Smile.";
    subHeading.textContent = "Nana's Cocina serves you the best local and continental dishes. Just Eat, Drink and Smile."

    contentContainer.appendChild(mainContainer);
    mainContainer.appendChild(mainHeading);
    mainContainer.appendChild(subHeading);
    mainHeading.appendChild(eatSpan);
    mainHeading.appendChild(drinkSpan);
    mainHeading.appendChild(smileSpan);
}
export default renderContent;
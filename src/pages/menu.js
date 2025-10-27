function displayMenu() {
    const main = document.querySelector("#main");
    const menuContent = document.createElement("div");
    menuContent.id = "content";

    const menuInner = document.createElement("div");
    menuInner.classList.add("menuInner");
    
    main.append(menuContent);
    menuContent.append(menuInner);
};

export {displayMenu};
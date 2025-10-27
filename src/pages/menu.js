function displayMenu() {
    const main = document.querySelector("#main");
    const menuContent = document.createElement("div");
    menuContent.id = "content";
    menuContent.textContent = "This is a test for menu";

    main.append(menuContent);
};

export {displayMenu};
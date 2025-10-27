function displayMenu() {
    const main = document.querySelector("#main");
    const menuContent = document.createElement("div");
    menuContent.id = "content";

    const menuInner = document.createElement("div");
    menuInner.classList.add("menuInner");

    const menuItems = [
        {
            name: "cà phê đen đá",
            description: "traditional vietnamese iced coffee brewed with phin and poured over ice",
            price: "$4.00 | ₫100,000",
            category: "vietnamese classics"
        },
        {
            name: "cà phê sữa đá",
            description: "vietnamese iced coffee with condensed milk — strong, sweet, and smooth",
            price: "$4.50 | ₫110,000",
            category: "vietnamese classics"
        },
        {
            name: "bạc xỉu",
            description: "a sweeter, milk-forward variation of vietnamese iced coffee",
            price: "$4.50 | ₫110,000",
            category: "vietnamese classics"
        },
        {
            name: "matcha latte",
            description: "ceremonial grade matcha whisked with steamed milk, lightly sweetened",
            price: "$5.00 | ₫125,000",
            category: "tea & botanicals"
        },
        {
            name: "jasmine iced tea",
            description: "fragrant jasmine green tea served chilled over ice",
            price: "$4.00 | ₫100,000",
            category: "tea & botanicals"
        },
        {
            name: "lychee mint tea",
            description: "iced green tea with lychee juice and fresh mint",
            price: "$4.75 | ₫120,000",
            category: "tea & botanicals"
        },
        {
            name: "americano",
            description: "espresso over hot water — smooth and balanced",
            price: "$3.50 | ₫90,000",
            category: "modern signatures"
        },
        {
            name: "coconut cold foam americano",
            description: "iced americano topped with creamy house-made coconut foam",
            price: "$5.25 | ₫130,000",
            category: "modern signatures"
        },
        {
            name: "salted caramel cold brew",
            description: "slow-steeped cold brew with sea salt caramel cream",
            price: "$5.50 | ₫135,000",
            category: "modern signatures"
        },
    ];

    const menuHeading = document.createElement("h2");
    menuHeading.textContent = "our menu";
    const menuDisplay = document.createElement("div");
    menuDisplay.classList.add("menuDisplay");

    main.append(menuContent);
    menuContent.append(menuInner);
    menuInner.append(menuHeading, menuDisplay);

    menuItems.forEach(function(e) {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menuItem");
        const itemName = document.createElement("h3");
        itemName.textContent = e.name;
        const itemDesc = document.createElement("p");
        itemDesc.textContent = e.description;
        const itemPrice = document.createElement("p");
        itemPrice.textContent = e.price;
        const itemCat = document.createElement("p");
        itemCat.textContent = e.category;

        menuDisplay.append(menuItem);
        menuItem.append(itemName, itemDesc, itemPrice, itemCat);
    });


};

export {displayMenu};
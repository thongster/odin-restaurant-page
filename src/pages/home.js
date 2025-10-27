function displayHome() {
    const main = document.querySelector("#main");
    const homeContent = document.createElement("div");
    homeContent.id = "content";

    const homeInner = document.createElement("div");
    homeInner.classList.add("homeInner");
    const heading = document.createElement("h2");
    heading.textContent = "where east brews west";
    const paragraph = document.createElement("p");
    paragraph.textContent = "from saigon’s alley phin to your morning espresso — crafted with balance, brewed with purpose.";

    main.append(homeContent);
    homeContent.append(homeInner);
    homeInner.append(heading);
    homeInner.append(paragraph);

    return homeContent;
};

export {displayHome};
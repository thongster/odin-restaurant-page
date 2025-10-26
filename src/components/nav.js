function createNav() {
    const content = document.querySelector("#main");
    const nav = document.createElement("div");
    nav.classList.add("nav");
    const home = document.createElement("button");
    const menu = document.createElement("button");
    const about = document.createElement("button");
    const contact = document.createElement("button");

    home.textContent = "home";
    menu.textContent = "menu";
    about.textContent = "about";
    contact.textContent = "contact";

    content.append(nav);
    nav.append(home);
    nav.append(menu);
    nav.append(about);
    nav.append(contact);

    return nav;
};

export {createNav};
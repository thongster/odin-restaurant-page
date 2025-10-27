import backgroundimg from "../assets/images/homebackground.jpg";

function displayHome() {
    const main = document.querySelector("#main");
    const homeContent = document.createElement("div");
    homeContent.id = "content";
    const heading = document.createElement("h2");
    heading.textContent = "where east brews west";
    const paragraph = document.createElement("p");
    paragraph.textContent = "from saigon’s alley phin to your morning espresso — crafted with balance, brewed with purpose.";

    homeContent.style.backgroundImage = `linear-gradient(to left, rgba(247, 243, 238, 0.5), rgba(247, 243, 238, 1)), url(${backgroundimg})`;
    homeContent.style.backgroundSize = "cover";
    homeContent.style.backgroundPosition = "center";
    homeContent.style.height = "100%";
    homeContent.style.width = "100%";
    homeContent.style.display = "flex";
    homeContent.style.flexDirection = "column";
    homeContent.style.justifyContent = "space-between";
    homeContent.style.padding = "3rem";
    homeContent.style.textShadow = "1px 1px 0 #f7f3ee";

    main.append(homeContent);
    homeContent.append(heading);
    homeContent.append(paragraph);

    return homeContent;
};

export {displayHome};
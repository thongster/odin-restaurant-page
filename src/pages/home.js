function displayHome() {
    const main = document.querySelector("#main");
    const content = document.createElement("div");
    content.id = "content";

    main.append(content);
    content.textContent = "test first";
};

export {displayHome};
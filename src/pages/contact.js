function displayContact() {
    const main = document.querySelector("#main");
    const contactContent = document.createElement("div");
    contactContent.id = "content";
    contactContent.textContent = "This is a test for contact";

    main.append(contactContent);
};

export {displayContact};
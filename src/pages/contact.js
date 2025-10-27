function displayContact() {
    const main = document.querySelector("#main");
    const contactContent = document.createElement("div");
    contactContent.id = "content";

    const contactInner = document.createElement("div");
    contactInner.classList.add("contactInner");

    main.append(contactContent);
    contactContent.append(contactInner);
};

export {displayContact};
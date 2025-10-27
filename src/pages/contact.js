function displayContact() {
    const main = document.querySelector("#main");
    const contactContent = document.createElement("div");
    contactContent.id = "content";

    const contactInner = document.createElement("div");
    contactInner.classList.add("contactInner");

    const contactHeading = document.createElement("h2");
    contactHeading.textContent = "say hello.";
    const contactText = document.createElement("p");
    contactText.textContent = "ask about beans. ask about balance. ask about anything.";

    const contactForm = document.createElement("form");

    const nameDiv = document.createElement("div");
    const nameLabel = document.createElement("label");
    const nameInput = document.createElement("input");
    nameLabel.setAttribute("for", "name");
    nameLabel.textContent = "name: ";
    nameInput.type = "text";
    nameInput.id = "name";
    nameInput.name = "name";
    nameInput.required = true;
    nameInput.placeholder = "your name";
    
    const emailDiv = document.createElement("div");
    const emailLabel = document.createElement("label");
    const emailInput = document.createElement("input");
    emailLabel.setAttribute("for", "email");
    emailLabel.textContent = "email";
    emailInput.type = "email";
    emailInput.id = "email";
    emailInput.name = "email";
    emailInput.required = true;
    emailInput.placeholder = "you@example.com";

    const messageDiv = document.createElement("div");
    const messageLabel = document.createElement("label");
    const messageTextArea = document.createElement("textarea");
    messageLabel.setAttribute("for", "message");
    messageLabel.textContent = "message";
    messageTextArea.id = "message";
    messageTextArea.name = "message";
    messageTextArea.rows = 5;
    messageTextArea.required = true;
    messageTextArea.placeholder = "your message...";

    const button = document.createElement("button");
    button.type = "submiit";
    button.textContent = "send";

    // button functionality
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("thank you for reaching out — we'll get back soon.");
    });

    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contactInfo");
    const infoHeader = document.createElement("h2");
    infoHeader.textContent = "find us";

    const addr = document.createElement("p");
    addr.textContent = "address: 12 nguyễn huệ, district 1, ho chi minh city, vietnam";
    const phone = document.createElement("p");
    phone.textContent = "phone: +84 00 0000 0000";
    const hours = document.createElement("p");
    hours.textContent = "hours: mon–fri 7:00–19:00 · sat–sun 8:00–18:00";

    main.append(contactContent);
    contactContent.append(contactInner);
    contactInner.append(contactHeading, contactText, contactForm, contactInfo);
    contactForm.append(nameDiv, emailDiv, messageDiv, button);
    nameDiv.append(nameLabel, nameInput);
    emailDiv.append(emailLabel, emailInput);
    messageDiv.append(messageLabel, messageTextArea);

    contactInfo.append(infoHeader, addr, phone, hours);

};

export {displayContact};
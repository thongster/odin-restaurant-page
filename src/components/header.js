import logo from "../assets/images/icon.png";

function createHeader() {
    const headerSection = document.querySelector("header");
    const headerMain = document.createElement("div");
    headerMain.classList.add("headerMain");
    const headerLogo = document.createElement("img");
    const headerText = document.createElement("h1");

    headerLogo.src = logo;
    headerLogo.alt = "sông & steam logo";
    
    headerSection.append(headerMain);
    headerMain.append(headerLogo);
    headerMain.append(headerText);
    headerText.textContent = "sông & steam";

    return headerMain;
};

export {createHeader};
function createFooter() {
    const body = document.querySelector("body");
    const footer = document.createElement("footer");
    const sourceCode = document.createElement("a");
    sourceCode.textContent = "Source Code";

    sourceCode.href = "https://github.com/thongster/odin-restaurant-page";
    sourceCode.target = "_blank";
    sourceCode.rel = "noreferrer";

    body.append(footer);
    footer.append("Developed by Thongster | ")
    footer.append(sourceCode)
    return footer;
};

export {createFooter};
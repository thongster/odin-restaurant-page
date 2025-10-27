function displayAbout() {
    const main = document.querySelector("#main");
    const aboutContent = document.createElement("div");
    aboutContent.id = "content";

    const aboutInner = document.createElement("div");
    aboutInner.classList.add("aboutInner");

    const aboutIntroHeading = document.createElement("h2");
    aboutIntroHeading.textContent = "born from balance."
    const aboutIntroParagraph = document.createElement("p");
    aboutIntroParagraph.textContent = "sông & steam was created to bridge worlds — where vietnamese coffee culture meets modern design. each cup is a quiet conversation between old and new, east and west, slow and strong.";

    const ourStoryHeading = document.createElement("h3");
    ourStoryHeading.textContent = "our story"
    const ourStoryParagraph = document.createElement("p");
    ourStoryParagraph.textContent = "our journey began in saigon’s narrow alleys, where phin filters drip slowly into tall glasses of condensed milk. we took that same ritual and gave it room to breathe — a space of light, calm, and precision. sông & steam is a reflection of this balance — crafted by hand, grounded in culture, designed with intent.";

    const ourValuesHeading = document.createElement("h3");
    ourValuesHeading.textContent = "our values";
    const ourValuesList = document.createElement("ul");
    const ourValuesPointOne = document.createElement("li");
    ourValuesPointOne.textContent = "sustainability — small-batch beans, fair trade, mindful sourcing";
    const ourValuesPointTwo = document.createElement("li");
    ourValuesPointTwo.textContent = "craftsmanship — precision in every pour, care in every detail";
    const ourValuesPointThree = document.createElement("li");
    ourValuesPointThree.textContent = "culture — honoring vietnam’s heritage with modern design";

    main.append(aboutContent);
    aboutContent.append(aboutInner);
    aboutInner.append(aboutIntroHeading, aboutIntroParagraph,
                        ourStoryHeading, ourStoryParagraph, 
                        ourValuesHeading, ourValuesList);
    ourValuesList.append(ourValuesPointOne, ourValuesPointTwo, ourValuesPointThree);

};

export {displayAbout};
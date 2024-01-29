function generateGuide(event) {
  event.preventDefault();

  new Typewriter("#guide", {
    strings: "Now generating guide...",
    autoStart: true,
    delay: 15,
    cursor: "",
  });
}

let guideFormElement = document.querySelector("#guide-generator");
guideFormElement.addEventListener("submit", generateGuide);

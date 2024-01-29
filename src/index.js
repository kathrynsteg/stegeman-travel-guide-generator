function displayGuide(response) {
  new Typewriter("#guide", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function generateGuide(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "15aa7ff71012241631cb1665815teob0";
  let prompt = `User Instructions: Generate a concise travel guide with the 5 best things to do as a tourist in ${instructionsInput.value}.`;
  let context =
    "You are an expert travel guide and love cultural sites and local cuisine. Your mission is to generate a 5 line travel guide in basic HTML. Generate the title as an <h1> and all remaining text as <p>, separating each line with a <br />. Make sure to use the User Instructions. Sign guide at the end with <strong>xoxo, SheCodes AI ❤</strong>";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let guideElement = document.querySelector("#guide");
  guideElement.innerHTML = `<div class="generating">Now generating your travel guide for ${instructionsInput.value}...</div>`;

  axios.get(apiUrl).then(displayGuide);
}

let guideFormElement = document.querySelector("#guide-generator");
guideFormElement.addEventListener("submit", generateGuide);

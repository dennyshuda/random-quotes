const quotes = [
  {
    quote: "Java is to JavaScript what car is to Carpet.",
    people: "Chris Heilmann",
  },
  {
    quote: "First, solve the problem. Then, write the code.",
    people: "John Johnson",
  },
  {
    quote: "Experience is the name everyone gives to their mistakes.",
    people: "Oscar Wilde",
  },
  {
    quote: "In order to be irreplaceable, one must always be different",
    people: "Coco Chanel",
  },
  {
    quote: "Knowledge is power.",
    people: "Francis Bacon",
  },
];
const nextButtonElement = document.querySelector(".next-button");
const quoteWrapperElement = document.querySelector(".quote-wrapper");

function createQuoteElement() {
  const result = Math.floor(Math.random() * quotes.length);
  let quoteElement = `<p id="quote">
                        "${quotes[result].quote}"
                      </p>
                      <p class="people"> - ${quotes[result].people} - </p>`;
  quoteWrapperElement.innerHTML = quoteElement;
}

window.addEventListener("DOMContentLoaded", () => {
  createQuoteElement();
});

nextButtonElement.onclick = createQuoteElement;

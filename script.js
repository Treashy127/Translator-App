// DOM ELEMENTS


const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");

const sourceLang = document.getElementById("sourceLang");
const targetLang = document.getElementById("targetLang");

const translateBtn = document.getElementById("translateBtn");
const switchBtn = document.getElementById("switchBtn");

const copyInput = document.getElementById("copyInput");
const copyOutput = document.getElementById("copyOutput");

const speakInput = document.getElementById("speakInput");
const speakOutput = document.getElementById("speakOutput");

const charCount = document.getElementById("charCount");



// CHARACTER COUNT


function updateCharCount() {

  if (inputText.value.length > 500) {
    inputText.value = inputText.value.substring(0, 500);
  }

  charCount.textContent = `${inputText.value.length}/500`;

}



// DEBOUNCE FUNCTION


function debounce(func, delay) {

  let timer;

  return function (...args) {

    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);

  };

}



// TRANSLATION FUNCTION


async function translateText() {

  const text = inputText.value.trim();

  if (!text) {
    outputText.textContent = "";
    return;
  }

  const from = sourceLang.value;
  const to = targetLang.value;

  const sourceCode = from === "auto" ? "" : from;

  const langpair = `${sourceCode}|${to}`;

  outputText.textContent = "Translating...";

  try {

    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${langpair}`
    );

    const data = await response.json();

    if (data.responseData) {

      outputText.textContent = data.responseData.translatedText;

    } else {

      outputText.textContent = "Translation failed.";

    }

  } catch (error) {

    console.error(error);

    outputText.textContent = "Translation failed.";

  }

}


// Debounced translation
const debouncedTranslate = debounce(translateText, 500);



// EVENT LISTENERS



// Translate button
translateBtn.addEventListener("click", translateText);


// Default translation on load
window.addEventListener("load", () => {

  inputText.value = "Hello, how are you";

  sourceLang.value = "en";
  targetLang.value = "fr";

  updateCharCount();

  translateText();

});


// Real-time translation
inputText.addEventListener("input", () => {

  updateCharCount();

  debouncedTranslate();

});


// Language change triggers translation
sourceLang.addEventListener("change", translateText);
targetLang.addEventListener("change", translateText);



// SWITCH LANGUAGE BUTTON


switchBtn.addEventListener("click", () => {

  const tempLang = sourceLang.value;

  sourceLang.value = targetLang.value;
  targetLang.value = tempLang;

  translateText();

});


// COPY FUNCTIONS


copyInput.addEventListener("click", () => {

  navigator.clipboard.writeText(inputText.value);

});

copyOutput.addEventListener("click", () => {

  navigator.clipboard.writeText(outputText.textContent);

});



// TEXT TO SPEECH

function speak(text, lang) {

  if (!text) return;

  speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(text);

  speech.lang = lang;

  speechSynthesis.speak(speech);

}


speakInput.addEventListener("click", () => {

  const lang = sourceLang.value === "auto" ? "en" : sourceLang.value;

  speak(inputText.value, lang);

});


speakOutput.addEventListener("click", () => {

  speak(outputText.textContent, targetLang.value);

});


// INITIALIZE CHARACTER COUNT


updateCharCount();
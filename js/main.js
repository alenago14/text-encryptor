// Add JS here
const inputText = document.querySelector(".input-text");
const outputText = document.querySelector(".output-text");
const bntCopy = document.querySelector(".btn-copy");
const textInformation = document.querySelector(".text-information");
function encryptText() {
  if (inputText.value == "") {
    outputText.innerHTML = "";
    outputText.style.backgroundImage = "url('/assets/muneco.svg')";
    outputText.style.backgroundRepeat = "no-repeat";
    outputText.style.backgroundPosition = "center";
} else {
      textInformation.style.display = "none";
    outputText.style.backgroundImage = "none";
    bntCopy.style.display = "block";
    outputText.innerHTML = encrypt(inputText.value);
  }
}
function decryptText() {
  if (inputText.value == "") {
    outputText.innerHTML = "";
    outputText.style.backgroundImage = "url('/assets/muneco.svg')";
    outputText.style.backgroundRepeat = "no-repeat";
    outputText.style.backgroundPosition = "center";
  } else {
    outputText.style.backgroundImage = "none";
    bntCopy.style.display = "block";
    outputText.innerHTML = decrypt(inputText.value);
}
}
function encrypt(text) {
  return text
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
}
function decrypt(text) {
  return text
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
}
async function copyToClipboard() {
  const textarea = document.getElementById("output-text");
  try {
    await navigator.clipboard.writeText(textarea.value);
    alert("Texto copiado al portapapeles");
  } catch (err) {
    console.error("Error al copiar al portapapeles: ", err);
  }
}

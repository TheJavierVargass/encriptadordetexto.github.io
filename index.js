function executeOperation() {
  const inputText = document.getElementById("inputText").value;
  const operation = document.querySelector('input[name="operation"]:checked').value;
  let result = "";
  if (inputText.length > 0 && validateInput(inputText)) {
    if (operation === "encrypt") {
      result = encrypt(inputText);
    } else {
      result = decrypt(inputText);
    }
    document.getElementById("outputText").value = result;
    document.getElementById("copyButton").disabled = false;
  } else {
    document.getElementById("outputText").value = "";
    document.getElementById("copyButton").disabled = true;
  }
}

function copyResult() {
  const outputText = document.getElementById("outputText");
  if (outputText.value.length > 0) {
    outputText.select();
    document.execCommand("copy");
    alert("Resultado copiado al portapapeles");
  }
}

function validateInput(text) {
  const regex = /^[a-z\s]*$/;
  if (!regex.test(text)) {
    alert("¡Ojo! Solo se permiten letras minúsculas y espacios sin acentos ni caracteres especiales.");
    return false;
  }
  return true;
}

function encrypt(text) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    const letter = text[i];
    switch (letter) {
      case "e":
        result += "enter";
        break;
      case "i":
        result += "imes";
        break;
      case "a":
        result += "ai";
        break;
      case "o":
        result += "ober";
        break;
      case "u":
        result += "ufat";
        break;
      default:
        result += letter;
    }
  }
  return result;
}

function decrypt(text) {
  let result = "";
  let i = 0;
  while (i < text.length) {
    const letter = text[i];
    if (letter === "e" && text.substr(i, 5) === "enter") {
      result += "e";
      i += 5;
    } else if (letter === "i" && text.substr(i, 4) === "imes") {
      result += "i";
      i += 4;
    } else if (letter === "a" && text.substr(i, 2) === "ai") {
      result += "a";
      i += 2;
    } else if (letter === "o" && text.substr(i, 4) === "ober") {
      result += "o";
      i += 4;
    } else if (letter === "u" && text.substr(i, 4) === "ufat") {
      result += "u";
      i += 4;
    } else {
      result += letter;
      i++;
    }
  }
  return result;
}

$(document).scroll(function() {
  navbarScroll();
});

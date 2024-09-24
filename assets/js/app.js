const messageInput = document.getElementById("message");
const keyInput = document.getElementById("key");
const resultDiv = document.getElementById("result");

const predefinedKeyHash = "Y2xhdmUtdXRu";

function hashKey(key) {
  return btoa(key);
}

document.getElementById("encryptBtn").addEventListener("click", async () => {
  const message = messageInput.value;
  const key = keyInput.value;

  const keyHash = hashKey(key);

  if (keyHash === predefinedKeyHash) {
    const encryptedMessage = btoa(message);
    resultDiv.textContent = encryptedMessage;
  } else {
    resultDiv.textContent = "Clave incorrecta.";
  }

  resultDiv.style.display = resultDiv.textContent ? "block" : "none";
});

document.getElementById("decryptBtn").addEventListener("click", async () => {
  const message = messageInput.value;
  const key = keyInput.value;

  const keyHash = hashKey(key);

  if (keyHash === predefinedKeyHash) {
    try {
      const decryptedMessage = atob(message);
      resultDiv.textContent = decryptedMessage;
    } catch (error) {
      resultDiv.textContent = "Error al desencriptar el mensaje.";
    }
  } else {
    resultDiv.textContent = "Clave incorrecta.";
  }

  resultDiv.style.display = resultDiv.textContent ? "block" : "none";
});

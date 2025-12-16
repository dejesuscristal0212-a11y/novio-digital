function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value;
  if (message === "") return;

  addMessage("Tú", message);
  input.value = "";

  setTimeout(() => {
    boyfriendReply(message);
  }, 800);
}

function addMessage(sender, text) {
  const messages = document.getElementById("messages");
  const msg = document.createElement("div");
  msg.textContent = sender + ": " + text;
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}

function boyfriendReply(text) {
  let reply = "Háblame bonito 😌";

  if (text.toLowerCase().includes("hola")) {
    reply = "Hola, amor 💙";
  } else if (text.toLowerCase().includes("triste")) {
    reply = "Ven, yo te cuido 😔💞";
  } else if (text.toLowerCase().includes("te extraño")) {
    reply = "Yo más… no te me vayas 😏";
  }

  addMessage("Él", reply);
}
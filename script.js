// ================================
// SOFT PICK UP - CONFIGURAÇÃO
// Antes de publicar, substitua estes números pelo WhatsApp real da empresa.
// Formato: código do país + número, sem +, espaços ou símbolos.
// Exemplo de Moçambique: 25884XXXXXXX
// ================================
const WHATSAPP_NUMBER = "258XXXXXXXXX";

document.getElementById("year").textContent = new Date().getFullYear();

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("#nav");
menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const whatsappBtn = document.getElementById("whatsappBtn");
if (!WHATSAPP_NUMBER.includes("X")) {
  whatsappBtn.href = `https://wa.me/${WHATSAPP_NUMBER}`;
} else {
  whatsappBtn.addEventListener("click", e => {
    e.preventDefault();
    alert("Configure o número de WhatsApp da Soft Pick Up no ficheiro script.js antes de publicar.");
  });
}

document.getElementById("quoteForm").addEventListener("submit", function(e){
  e.preventDefault();
  const data = new FormData(this);
  const text = `Olá, Soft Pick Up!%0A%0ANome: ${encodeURIComponent(data.get("nome"))}%0ATelefone: ${encodeURIComponent(data.get("telefone"))}%0AServiço: ${encodeURIComponent(data.get("servico"))}%0AMensagem: ${encodeURIComponent(data.get("mensagem"))}`;
  const msg = document.getElementById("formMessage");

  if (!WHATSAPP_NUMBER.includes("X")) {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    msg.textContent = "A mensagem foi preparada para envio pelo WhatsApp.";
  } else {
    msg.textContent = "Configure primeiro o número de WhatsApp no ficheiro script.js.";
  }
});

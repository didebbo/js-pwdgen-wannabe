// Chideo i dati da inserire:
// nome, cognome, colore
var nome = prompt("Inserisci il tuo nome");
var cognome = prompt("Inserisci il tuo cognome");
var colore = prompt("Inserisci il tuo colore preferito");

// Numero della classe #40
const classe = "40";

// Prendo elemento password
const password = document.getElementById("password");
const eye = document.getElementById("eye");

// Scrivo la password nell'html
password.value = nome + cognome + colore + classe;

// Al click rendo visibile la password
eye.onclick = () => {
    if (password.type === "password") password.type = "text";
    else password.type = "password";
}
const name = prompt("Iserisci il tuo nome");
console.log(name)

const username = prompt("Iserisci il tuo cognome");
console.log(username)

const Color = prompt("Iserisci il tuo colore");
console.log(Color)

let password= name + username + Color + "69";
document.getElementById("Password").textContent = password;


document.getElementById("Nome").textContent = name;

document.getElementById("Cognome").textContent = username;

document.getElementById("Colore").textContent = Color;
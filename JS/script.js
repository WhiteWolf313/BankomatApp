// Skapar två användare med namn, användarnamn, kod och startsaldo
const users = [
    { namn: "Anna", anv: "anna1", kod: "1234", saldo: 1000 },
    { namn: "Johan", anv: "johan1", kod: "5678", saldo: 1000 }
];

// Variabel för att spara aktuell inloggad användare
let currentUser = null;

// Sparar knapptryckningarna
let input = "";

// Funktion som körs när man trycker på en siffra
function press(value) {
    input += value;
    updateInput();
}

// Rensar inputfältet
function clearInput() {
    input = "";
    updateInput();
}

// Uppdaterar inputfältet så att det som skrivs in visas
function updateInput() {
    document.getElementById("input").value = input;
}

// Skriver ut ett meddelande på skärmen
function showMessage(msg) {
    document.getElementById("output").innerText = msg;
}

// Loggar in användare med rätt kod
function login() {
    const kod = input;
    const found = users.find(u => u.kod === kod);
    if (found) {
        currentUser = found;
        document.getElementById("userDisplay").innerText = `Inloggad: ${found.namn}`;
        showMessage("Inloggning lyckades!");
    } else {
        showMessage("Fel kod!");
    }
    clearInput();
}

// Loggar ut användaren
function logout() {
    currentUser = null;
    document.getElementById("userDisplay").innerText = "Ej inloggad";
    showMessage("Utloggad");
}

// Visar saldo om användaren är inloggad
function checkBalance() {
    if (!currentUser) return showMessage("Du måste logga in först!");
    showMessage(`Saldo: ${currentUser.saldo} kr`);
}

// Gör en insättning efter kontroll
function deposit() {
    if (!currentUser) return showMessage("Du måste logga in först!");
    const amount = Math.floor(Number(input));
    if (isNaN(amount) || amount <= 0) {
        showMessage("Felaktig inmatning vid insättning!");
    } else {
        currentUser.saldo += amount;
        showMessage(`Du satte in ${amount} kr`);
    }
    clearInput();
}

// Gör ett uttag med kontroll av saldo och inmatning
function withdraw() {
    if (!currentUser) return showMessage("Du måste logga in först!");
    const amount = Math.floor(Number(input));
    if (isNaN(amount) || amount <= 0) {
        showMessage("Felaktig inmatning vid uttag!");
    } else if (amount > currentUser.saldo) {
        showMessage("Otillräckligt saldo!");
    } else {
        currentUser.saldo -= amount;
        showMessage(`Du tog ut ${amount} kr`);
    }
    clearInput();
}

# BankomatApp 🏦

En interaktiv webbaserad bankomatsimulator byggd med HTML, CSS och JavaScript. Applikationen tillåter användare att logga in med en pinkod, kontrollera sitt saldo samt utföra transaktioner.

## 📋 Innehållsförteckning

- [Funktioner](#-funktioner)
- [Installation](#-installation)
- [Användning](#️-användning)
- [Teknisk Stack](#-teknisk-stack)
- [Förinställda Testkonton](#-förinställda-testkonton)

## ✨ Funktioner

- **Inloggningssystem:** Autentisering via en numerisk knappsats med dold inmatning (password-typ).

- **Saldokontroll:** Möjlighet att se aktuellt saldo för den inloggade användaren.
- **Insättningar & Uttag:** Logik för att öka eller minska saldot med validering (t.ex. kontroll av tillräckliga medel vid uttag).
- **Responsiv Layout:** Ett centrerat användargränssnitt med en tydlig digital skärm och knappsats.

## 🚀 Installation

För att köra projektet lokalt:

1. Klona detta repository eller ladda ner filerna.
2. Öppna mappen i **Visual Studio Code**.
3. Högerklicka på `Index.html` och välj **"Open with Live Server"** (eller öppna filen direkt i din webbläsare).

## 🕹️ Användning

1. Använd de numeriska knapparna (0-9) för att skriva in din pinkod.
2. Klicka på **"Logga in"**.
3. När du är inloggad kan du:
    - Trycka på **"Visa saldo"** för att se ditt nuvarande belopp.
    - Skriva in en summa och trycka på **"Insättning"** eller **"Uttag"**.
4. Använd **"C"** för att rensa inmatningsfältet.
5. Klicka på **"Logga ut"** för att avsluta sessionen.

## 🛠 Teknisk Stack

- **HTML5:** För strukturering av appen och dess komponenter.

- **CSS3:** För styling, layout (Flexbox) och knappeffekter.
- **JavaScript:** För hantering av användardata, inloggningslogik och beräkningar.

## 👤 Förinställda Testkonton

Följande användare är fördefinierade i systemet:

| Namn | Pinkod | Startsaldo |
| :--- | :--- | :--- |
| Anna | `1234` | 1000 kr |
| Johan | `5678` | 1000 kr |

---
*Detta projekt är skapat som en del av en övning i webbutveckling.*

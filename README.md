# 🪨📄✂️ **STONE PAPER SCISSOR GAME**

A **single-player Stone-Paper-Scissor game** built using **HTML, CSS, and JavaScript**, where the user competes against the computer in a fun and interactive way.

This project focuses on **core frontend fundamentals** like **DOM manipulation, event handling, and conditional logic**, making it perfect for beginners and portfolio showcasing.

---

## 🎮 **GAMEPLAY**

* The user selects **Stone 🪨, Paper 📄, or Scissor ✂️**

* The computer generates a **random move each round**

* The result is displayed instantly:

  * ✅ **You Win**
  * ❌ **Computer Wins**
  * 🤝 **It's a Draw**

* Scores update **dynamically after every round**

---

## 🧠 **GAME RULES**

* 🪨 **Stone beats Scissor**
* 📄 **Paper beats Stone**
* ✂️ **Scissor beats Paper**
* 🤝 Same choice = **Draw**

---

## ✨ **FEATURES**

* 🤖 **Single Player vs Computer**
* 🎲 **Randomized Computer Choice**
* 📊 **Live Score Tracking System**
* ⚡ **Instant Result Display**
* 🎨 **Clean & Responsive UI Design**
* 🖼️ **Custom Images for Game Choices**
* 🚀 **Fast and Lightweight (No frameworks used)**

---

## 🛠️ **TECH STACK**

* **HTML5** – Structure
* **CSS3** – Styling & Layout
* **JavaScript (Vanilla JS)** – Game Logic

👉 No frameworks. No libraries. Pure frontend development.

---

## 📂 **PROJECT STRUCTURE**

```
stone-paper-scissor/
│
├── index.html        # Main HTML structure
├── styles.css        # Styling
├── map.js            # Game logic
├── rock.png          # Rock image
├── paper.png         # Paper image
├── scissor.png       # Scissor image
└── README.md
```

---

## ⚙️ **HOW IT WORKS (LOGIC OVERVIEW)**

* Event listeners detect **user selection**
* Computer choice is generated using:

```javascript
Math.floor(Math.random() * 3)
```

* Conditional statements determine:

  * Win ✅
  * Loss ❌
  * Draw 🤝

* Score values are updated dynamically using the **DOM**

---

## 🧪 **RUN LOCALLY**

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/RajDalvi08/stone-paper-scissor.git
```

### 2️⃣ Navigate to Project Folder

```bash
cd stone-paper-scissor
```

### 3️⃣ Launch the Game

Open `index.html` in your browser.

👉 No dependencies required ✅

---

## 🎯 **LEARNING OUTCOMES**

This project helps in understanding:

* DOM Selection & Manipulation
* Event Handling in JavaScript
* Random Number Generation
* Conditional Game Logic
* State & Score Management
* UI/UX Structuring Basics

---

## 📈 **FUTURE ENHANCEMENTS**

* 🔊 Sound Effects
* 🎞️ Animations & Smooth Transitions
* 🌙 Dark / Light Mode
* 🧠 AI Difficulty Levels
* 🏆 Match History Tracking
* 📱 Advanced Mobile Responsiveness

---

## 👨‍💻 **AUTHOR**

**Raj Dalvi**
🔗 GitHub: https://github.com/RajDalvi08

---

## 📄 **LICENSE**

This project is licensed under the **MIT License**.

---

💡 **Note:** This project is a great demonstration of **JavaScript fundamentals + interactive UI design**, making it ideal for beginners and strong for portfolio presentation.


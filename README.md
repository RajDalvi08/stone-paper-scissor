🪨📄✂️ Stone Paper Scissor

A single-player Stone-Paper-Scissor game built using HTML, CSS, and JavaScript.
The player competes against the computer, which generates a random move each round.

This project demonstrates core JavaScript concepts including DOM manipulation, event handling, and conditional game logic.

🎮 Gameplay

The user selects Stone, Paper, or Scissor

The computer randomly generates its move

The result is displayed instantly:

✅ You Win

❌ Computer Wins

🤝 It's a Draw

Scores update dynamically after every round

🧠 Game Rules

🪨 Stone beats Scissor

📄 Paper beats Stone

✂️ Scissor beats Paper

Same choice = Draw

✨ Features

🤖 Single Player vs Computer

🎲 Randomized Computer Choice

📊 Live Score Tracking

⚡ Instant Result Display

🎨 Clean and Responsive UI

🖼️ Custom Images for Game Choices

🛠️ Tech Stack

HTML5 – Structure

CSS3 – Styling & Layout

JavaScript – Game Logic

No frameworks. No libraries. Pure frontend fundamentals.

📂 Project Structure
stone-paper-scissor/
│
├── index.html      # Main HTML structure
├── styles.css      # Styling
├── map.js          # Game logic
├── rock.png        # Rock image
├── paper.png       # Paper image
├── scissor.png     # Scissor image
└── README.md

⚙️ How It Works (Logic Overview)

Event listeners detect user selection.

Computer choice is generated using:

Math.floor(Math.random() * 3)


Conditional statements determine:

Win

Loss

Draw

Score values are updated in the DOM dynamically.

🧪 Run Locally
1️⃣ Clone the repository
git clone https://github.com/RajDalvi08/stone-paper-scissor.git

2️⃣ Open the project
cd stone-paper-scissor

3️⃣ Launch the game

Open index.html in your browser.

No dependencies required ✅


🎯 Learning Outcomes

This project helped reinforce:

DOM Selection & Manipulation

Event Handling in JavaScript

Random Number Generation

Conditional Game Logic

Score State Management

Basic UI/UX structuring

🔮 Future Enhancements

🔊 Sound Effects

🎞️ Animations & Transitions

🌙 Dark / Light Mode

🧠 AI Difficulty Levels

🏆 Match History Tracking

📱 Enhanced Mobile Optimization

👨‍💻 Author

Raj Dalvi
GitHub: https://github.com/RajDalvi08

📄 License

This project is licensed under the MIT License.

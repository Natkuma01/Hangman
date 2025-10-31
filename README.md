# Hangman Game

A simple web‑based Hangman game built with React + TypeScript and Vite.

## 🎯 Project Purpose  
This project was mainly created to **practice React and TypeScript skills**. It demonstrates managing component state, handling user input, and building interactive UI components.  


## 🧰 Tech Stack  
- **React** (with functional components and hooks) — for building the UI.  
- **TypeScript** — to provide type safety and catch errors at compile time.  
- **Vite** — for a fast development server and optimized production build.  
- CSS / simple styling (you can swap in Tailwind, if desired).  
- Basic game logic implemented in JavaScript/TypeScript (e.g., state management of guesses, word reveal logic, lives count).

## 🚀 Getting Started  
1. Clone the repository:  
   ```bash
   git clone https://github.com/YourUsername/Hangman.git 
   
2. Navigate into the directory:
```bash
cd Hangman
npm install
npm run dev
```
 
Open http://localhost:3000 in your browser.

## 🎮 How to Play

- When the game loads, you’ll see blanks representing the secret word.  
- Guess letters by either **clicking on-screen buttons** or **typing on your keyboard**.  
- Correct guesses reveal the letters in the word.  
- Incorrect guesses reduce your “lives” ☠️ 👻.  
- The game ends when you either reveal the full word (**win**) or run out of lives (**lose**).  
- You can start a new game to play again.  

## ✅ Features

- Word-guessing logic with correct/incorrect guesses.  
- Dual input support: keyboard and mouse clicks.  
- Display of letters and game status.  
- Reset / restart functionality.  

## 🚧 Future Improvements

- Load words from an external API or file.  
- Add difficulty levels.  
- Improve UI with animations or responsive design.  
- Add unit/integration tests for the game logic.  

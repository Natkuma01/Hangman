import { useEffect, useState, useCallback } from "react";
import words from "./wordList.json";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";

function App () {
  const [wordToGuess, setWordToGuess] = useState(()  => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])


  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return

      setGuessedLetters(currentLetters => [...currentLetters, letter])
  }, [guessedLetters, isLoser, isWinner])

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const key = event.key
      if (!key.match(/^[a-z]$/)) return

      event.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])

  return (
    <>
  <div>
    {isWinner && "You Win! Refresh to try again."}
    {isLoser && "You Lose! Refresh to try again."}
  </div>
  <HangmanDrawing numberOfGuess={incorrectLetters.length} />
  <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
  <Keyboard 
    disabled={isWinner || isLoser}
    activeLetters=
    {guessedLetters.filter(letter => wordToGuess.includes(letter))}
    inactiveLetters={incorrectLetters}
    addGuessedLetter={addGuessedLetter} 
    /> 
  </>
  )
}
export default App
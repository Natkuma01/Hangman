import "./HangmanWord.css";

type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
}

export function HangmanWord({ guessedLetters, wordToGuess}: HangmanWordProps) {

    return (
        <div className="words-container">
            {wordToGuess.split("").map((letter, index) => (
                <span className="under-line" key={index}>
                    <span style={{ 
                        visibility: guessedLetters.includes(letter)
                            ? "visible"
                            : "hidden",
                             }}>
                            {letter}
                    </span>
                </span>
            ))}
        </div>
    )
}
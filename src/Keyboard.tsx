import "./Keyboard.css";

const KEYS = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
    "k", "l", "m", "n", "o", "p", " q", "r", "s",
    "t", "u", "v", "w", "x", "y", "z"
]

type KeyboardProps = { 
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
    disabled: boolean
}

export function Keyboard({ activeLetters, inactiveLetters, addGuessedLetter, disabled=false }: KeyboardProps) {
    return (
        <div className="keyboard-container">
        {KEYS.map(key => {
            const isActive = activeLetters.includes(key)
            const notActive = inactiveLetters.includes(key)
            return (
                <button
                  onClick={() => addGuessedLetter(key)}
                  className={`btn ${isActive ? "active" : ""}
                                  ${notActive ? "inactive" : ""}`} 
                  disabled={notActive || isActive || disabled}
                  key={key}>
                    {key}
                </button>
            )
            })}
        </div>
    )
}
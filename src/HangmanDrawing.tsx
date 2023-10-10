import "./HangmanDrawing.css"

const HEAD =  (
  <div style={{
    position: "absolute",
    borderRadius: "100%",
    border: "3px solid black",
    width: "50px",
    height: "50px",
    top: "195px",
    left: "415px",
    }} />
)

const BODY = (
  <div style = {{
    position: "absolute",
    height: "80px",
    border: "2px solid black",
    top: "250px",
    left: "441px"
  }} />
)

const RIGHT_ARM = (
  <div style = {{
    position: "absolute",
    width: "30px",
    border: "2px solid black",
    top: "280px",
    left: "440px",
    rotate: "30deg",
  }} />
)

const RIGHT_LEG = (
  <div style = {{
    position: "absolute",
    width: "30px",
    border: "2px solid black",
    top: "340px",
    rotate: "30deg",
    left: "440px",
  }} />
)

const LEFT_LEG = (
  <div style = {{
    position: "absolute",
    width: "30px",
    border: "2px solid black",
    top: "340px",
    left: "410px",
    rotate: "-30deg",
  }} />
)

const LEFT_ARM = (
  <div style = {{
    position: "absolute",
    width: "30px",
    border: "2px solid black",
    top: "280px",
    left: "410px",
    rotate: "-30deg",
  }} />
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, RIGHT_LEG, LEFT_LEG, LEFT_ARM]

type HangmanDrawProps = {numberOfGuess: number}

export function HangmanDrawing ({ numberOfGuess }: HangmanDrawProps) {
  return (
    <>
    <div className="box"> 
        {BODY_PARTS.slice(0, numberOfGuess)}
      <div className="line1" />
      <div className="line2" />
      <div className="line3" />
      <div className="line4" />
    </div>
    </>
  )
}


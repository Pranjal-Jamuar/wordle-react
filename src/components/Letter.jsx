import { useContext } from "react"
import { AppContext } from "../App"

const Letter = ({ letterPos, attemptVal }) => {
  const { board, currAttempt, correctWord } = useContext(AppContext)
  const letter = board[attemptVal][letterPos]
  const correct = correctWord.toUpperCase()[letterPos] === letter
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter)
  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error")

  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  )
}

export default Letter

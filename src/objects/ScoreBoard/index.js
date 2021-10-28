import "./style.css"
import PlayerName from "../../components/PlayerName"

function ScoreBoard() {
    return /*html*/`
      <header class="score-board">
        ${PlayerName("player1")}
        ${PlayerName("player2")}
      </header>
    `
}

export default ScoreBoard;
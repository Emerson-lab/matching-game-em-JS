import "./style.css"
import PlayerName from "../../components/PlayerName"
import VsPlayer from "../../components/VsPlayer";

function ScoreBoard() {
    return /*html*/`
      <header class="score-board">
        ${PlayerName("player1")}
        ${VsPlayer()}
        ${PlayerName("player2")}
      </header>
    `
}

export default ScoreBoard;
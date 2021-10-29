import "./style.css";
import PlayerName from "../../components/PlayerName";
import VsPlayer from "../../components/VsPlayer";
import PlayerScore from "../../components/PlayerScore";
import ArrowDown from "../../components/ArrowDown";

function ScoreBoard() {
  return /*html*/ `
      <header class="score-board">
        ${ArrowDown(2)}
        ${PlayerName("player1")} 
        ${PlayerScore(1)}
        ${VsPlayer()}
        ${PlayerScore(3)}
        ${PlayerName("player2")}
      </header>
    `;
}

export default ScoreBoard;

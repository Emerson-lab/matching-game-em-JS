import "./style.css";
import CardFrontBack from "../../components/CardFrontBack";
import cards from "./data.js";

function BoardGame() {
  window.boardGame = {}
  window.boardGame.handleClick = () => {
    const $boardGame = document.querySelector(".board-game")

    const $cardsActive = $boardGame.querySelector(".card-front-back.-active")
  }
  const htmlCardsList = cards.map((card) =>
    CardFrontBack(card.icon, card.altIcon)
  );
  const $htmlCards = htmlCardsList.join("");

  return /*html*/ `
    <section class="board-game" onClick="boardGame.handleClick()">
      ${$htmlCards}
    </section>
  `;
}

export default BoardGame;

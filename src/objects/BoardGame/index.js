import "./style.css";
import CardFrontBack from "../../components/CardFrontBack";
import cards from "./data.js";

function BoardGame() {
  window.boardGame = {}
  window.boardGame.handleClick = () => {
    const $boardGame = document.querySelector(".board-game")
    const $cardsActive = $boardGame.querySelectorAll(".card-front-back.-active")
    if ($cardsActive.length == 2) {
      $cardsActive.forEach((card) => card.classList.remove('-active'))
    }
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

import "./style.css";
import CardFrontBack from "../../components/CardFrontBack";

function BoardGame(amountCards) {
  const cards = [{
    icon: 'logo-html',
    altIcon: 'logo do html',
  },

];
  const $htmlCardFrontBack = CardFrontBack(cards[0].icon, cards[0].altIcon);

  return /*html*/ `
    <section class="board-game">
      ${$htmlCardFrontBack}
    </section>
  `;
}

export default BoardGame;

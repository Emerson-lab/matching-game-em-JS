import CardGame from "../../components/CardGame"

function BoardGame(amountCards) {
  const $htmlCardGame = CardGame()
  const $htmlBoardGame = $htmlCardGame.repeat(amountCards)

  return /*html*/`
    ${$htmlBoardGame}
  `
}

export default BoardGame;
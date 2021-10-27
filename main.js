import "./src/styles/settings/colors.css";
import "./src/styles/generec/reset.css";
import "./src/styles/elements/base.css";

import BoardGame from "./src/objects/boardGame";

const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(6)

$root.insertAdjacentHTML("beforeend", $htmlBoardGame);

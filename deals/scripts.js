const games_url = "https://www.cheapshark.com/api/1.0/deals";

const newGameButton = document.getElementById("new-game");

newGameButton.addEventListener("click", getGame);

async function getGame () {
  const response = await fetch(games_url);
  const json = await response.json();

  const firstGame = json[Math.floor(Math.random() * 59)]

  const title = firstGame["title"];
  const gameTitle = document.getElementById("game-name");
  gameTitle.innerHTML = title;

  const salePrice = firstGame["salePrice"];
  const gamePrice = document.getElementById("game-price");
  gamePrice.innerHTML = salePrice;

  const thumb = firstGame["thumb"];
  const gameImg = document.getElementById("game-img");
  gameImg.setAttribute("src", thumb);


  const secondGame = json[Math.floor(Math.random() * 59)]

  const title2 = secondGame["title"];
  const gameTitle2 = document.getElementById("game-name2");
  gameTitle2.innerHTML = title2;

  const salePrice2 = secondGame["salePrice"];
  const gamePrice2 = document.getElementById("game-price2");
  gamePrice2.innerHTML = salePrice2;

  const thumb2 = secondGame["thumb"];
  const gameImg2 = document.getElementById("game-img2");
  gameImg2.setAttribute("src", thumb2);

}

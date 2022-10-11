const canvas = document.getElementById("game");
const context = canvas.getContext("2d");
const bkImage = new Image();
bkImage.src = "./Imagens/bk-fish.webp";
bkImage.onload = () => {
context.drawImage(bkImage,0,0);
}
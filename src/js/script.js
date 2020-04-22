// Função pra rodar as imagens
var i = 0;
function change_img(){
  document.getElementById("slideshow").src = "src/img/img" + (i++ % 5) + ".jpg";
};
function slider() {
  setInterval(change_img, 5000);
}
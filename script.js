const btnMenu = document.querySelectorAll(".botoes *");
const testMenuChilds = document.querySelectorAll(".container_conteudo");
const menuChilds = document.querySelectorAll(".container_conteudo").childNodes;
const content = document.querySelectorAll(".conteudo");

function changeDisplay(btn, item, index) {
  if (btn === item) {
    item.classList.add("active");
    content[index].style.display = "block";
  }
}

function cleanSelection() {
  content.forEach((item) => {
    item.style.display = "none";
  });
  btnMenu.forEach((item) => {
    item.classList.remove("active");
  });
}

function callback(event) {
  let clickedBtn = event.target;
  cleanSelection();
  btnMenu.forEach((item, index) => {
    changeDisplay(clickedBtn, item, index);
  });
}

btnMenu.forEach((item) => {
  item.addEventListener("click", callback);
});

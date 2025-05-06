const menuBtn = document.getElementById("menu-button");
const closeBtn = document.getElementById("close-button");

function handleOpenMenu(event) {
  alert("You opened the menu!");
}

function handleClosePost(event) {
  alert("You closed the post!");
}

menuBtn.addEventListener("click", handleOpenMenu);
closeBtn.addEventListener("click", handleClosePost);

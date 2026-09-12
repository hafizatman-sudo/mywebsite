const nobtn = document.getElementById("nobtn");
const yesbtn = document.getElementById("yesbtn");

// No button moves away
nobtn.addEventListener("mouseover", () => {
  nobtn.style.position = "absolute";

  const btnWidth = nobtn.offsetWidth;
  const btnHeight = nobtn.offsetHeight;

  const maxX = window.innerWidth - btnWidth;
  const maxY = window.innerHeight - btnHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  nobtn.style.left = randomX + "px";
  nobtn.style.top = randomY + "px";
});

// Yes button click
yesbtn.addEventListener("click", () => {
  alert("Thank you for me , Anisha❤️🥰");

  // Go to the next page
  window.location.href = "./message.html";
});

// Reset No button
yesbtn.addEventListener("mouseover", () => {
  nobtn.style.position = "static";
  nobtn.style.left = "";
  nobtn.style.top = "";
});

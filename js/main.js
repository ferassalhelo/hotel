var typed = new Typed("#text", {
  strings: [`SKY DUBAI HOTEL`],
  typeSpeed: 100,
  loop: true
});
var li = document.querySelectorAll("li");

for (let i = 0; i < li.length; i = i + 1) {
  li[i].addEventListener("click", () => {
    window.location.reload();
  });
}

const easterEggs = ["luigi", "mario", "spongebob", "squidward1", "squidward2"];

function randomizeEl() {
  return easterEggs[Math.floor(Math.random() * easterEggs.length)];
}

$(document).ready(() => {
  $("#secret").click(() => $(`#${randomizeEl()}`).fadeToggle(250));
});

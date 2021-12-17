const easterEggs = [
  "spongebob",
  "squidward1",
  "squidward2",
  "JeanLucAguilera",
  "ColinSpears",
  "pierce",
];

$(() => {
  const $krabby = $("#krabby-patty");
  let hardMode = false;
  startWhackAPatty();

  $("#secret").click(() => $(`#${randomizeEl()}`).fadeToggle(250));

  $("#luigi-trigger").click(() => {
    $(`#luigi`).slideToggle(250).delay(1500).slideToggle(250);
  });

  $("#mario-trigger").click(() => {
    $(`#mario`).slideToggle(250).delay(1500).slideToggle(250);
  });

  $krabby.click(() => {
    $("#hard-mode").fadeIn("slow");

    $(`#${randomizeEl()}`)
      .css({
        right: `${randomPercentage(75)}%`,
        bottom: `${randomPercentage(45)}%`,
      })
      .slideToggle("fast")
      .delay(3000)
      .slideToggle("fast");
  });

  function startWhackAPatty() {
    setInterval(() => {
      const settings = {
        slideSpeed: 400,
        delay: 2000,
      };
      hardMode = $("#hard-mode-switch").is(":checked");

      if (hardMode) {
        settings.slideSpeed = 100;
        settings.delay = 800;
      }

      $krabby
        .css({
          right: `${randomPercentage(75)}%`,
          bottom: `${randomPercentage(45)}%`,
        })
        .delay("fast")
        .slideToggle(settings.slideSpeed)
        .delay(settings.delay)
        .slideToggle(settings.slideSpeed);
    }, 5000);
  }
});

function randomizeEl() {
  const roll = Math.floor(Math.random() * 99);
  console.log(`rolled a: ${roll}`);
  if (roll <= 35) {
    return "squidward1";
  } else if (roll > 35 && roll <= 60) {
    return "squidward2";
  } else if (roll > 50 && roll <= 75) {
    return "Spongebob";
  } else if (roll > 75 && roll <= 95) {
    return "pierce";
  } else if (roll > 95 && roll <= 97) {
    return "ColinSpears";
  } else if (roll > 97 && roll <= 99) {
    return "JeanLucAguilera";
  }
}

function randomDirection() {
  return directions[Math.floor(Math.random() * easterEggs.length)];
}

function randomPercentage(ceiling) {
  return Math.floor(Math.random() * ceiling);
}

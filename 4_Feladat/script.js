var MAX_TIPS = 20;
var MIN = 0;
var MAX = 1000000;

function randomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
  var solution = randomIntInclusive(MIN, MAX);
  var step = 1;

  while (step <= MAX_TIPS) {
    var raw = prompt(
      "Add meg a(z) " +
        step +
        ". tippedet (" +
        MIN +
        " és " +
        MAX +
        " között):"
    );

    var guess = parseInt(raw, 10);

    if (isNaN(guess)) {
      alert("Kérlek, számot adj meg!");
      continue;
    }

    if (guess > solution) {
      alert(step + ". tipp nem talált: A megoldás kisebb.");
      step++;
      continue;
    }

    if (guess < solution) {
      alert(step + ". tipp nem talált: A megoldás nagyobb.");
      step++;
      continue;
    }

    alert("Gratulálok, " + step + " lépésből eltaláltad!");
    return;
  }

  alert("Sajnos ez most nem sikerült! A megoldás: " + solution);
}

var startBtn = document.getElementById("startBtn");
if (startBtn) {
  startBtn.addEventListener("click", startGame);
}


var delay = 0;

function delayed() {
  console.log("Delay: " + delay / 1000 + "s");
  delay += 1000;
  setTimeout(delayed, delay);
}

delayed();

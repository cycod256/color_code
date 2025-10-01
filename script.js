const ecran = document.getElementById("ecran");
function calcColors() {
  const anneau1 = parseInt(document.getElementById("anneau1").value);
  const anneau2 = parseInt(document.getElementById("anneau2").value);
  const anneau3 = parseInt(document.getElementById("anneau3").value);
  const anneau4 = parseFloat(document.getElementById("anneau4").value);
  if (anneau3 === -1) {
    ecran.textContent = ` ${(anneau1 * 10 + anneau2) / 10} Ω  ±${anneau4} %`;
  } else if (anneau3 === -2) {
    ecran.textContent = ` ${(anneau1 * 10 + anneau2) / 100} Ω  ±${anneau4} %`;
  } else {
    let totale = (anneau1 * 10 + anneau2) * 10 ** anneau3;
    if (totale <= 990) {
      totale = totale / 1;
      ecran.textContent = `${totale} Ω  ±${anneau4} %`;
    } else if (totale > 990 && totale <= 990000) {
      totale = totale / 1000;
      ecran.textContent = `${totale} KΩ  ±${anneau4} %`;
    } else if (totale > 990000 && totale <= 990000000) {
      totale = totale / 1000000;
      ecran.textContent = `${totale} MΩ  ±${anneau4} %`;
    } else if (totale > 990000000) {
      totale = totale / 1000000000;
      ecran.textContent = `${totale} GΩ  ±${anneau4} %`;
    } else {
      ecran.textContent = "ERROR";
      ecran.style.color = "red";
      setTimeout(() => {
        ecran.textContent = "";
        ecran.style.color="white"
      }, 2000);
    }
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    calcColors();
  }
});
function copyResult() {
  const ecran = document.getElementById("ecran").textContent;
  if (ecran.trim() === "") {
    alert("Veuillez a chosire les couleurs avant !");
  } else {
    navigator.clipboard.writeText(ecran).then(() => {
      alert("Copie effectuer avec succès");
    });
  }
}

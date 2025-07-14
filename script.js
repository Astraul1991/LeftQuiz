const questions = [
  "Dovremmo partecipare alle elezioni nelle democrazie liberali",
  "È possibile arrivare ad una società socialista tramite la democrazia liberale",
  "Riformare il capitalismo è meglio che abbatterlo",
  "In tempo di pace, il riformismo parlamentare è la strada giusta",
  "È possibile convincere pacificamente la classe borghese ad accettare uno stato socialista",
  "È possibile socializzare pacificamente la borghesia nel nostro sistema socialista",
  "La rivoluzione è il modo migliore di arrivare al socialismo",
  "La rivoluzione armata è l'unico modo possibile per arrivare al socialismo",
  "Dovremmo penetrare le istituzioni liberali per parassitarle dall'interno",
  "Quando un governo opprime un popolo e tutte le alternative sono impossibili, è giusto usare la violenza"
];

const weights = [1, 1, 1, 1, 1, 1, -1, -1, -1, -1];

const form = document.getElementById("quiz-form");

questions.forEach((q, i) => {
  const block = document.createElement("div");
  block.className = "question-block";

  const label = document.createElement("label");
  label.textContent = q;

  const input = document.createElement("input");
  input.type = "range";
  input.min = 1;
  input.max = 7;
  input.value = 4;
  input.id = "q" + i;

  block.appendChild(label);
  block.appendChild(input);
  form.appendChild(block);
});

function calculateResults() {
  let total = 0;
  for (let i = 0; i < questions.length; i++) {
    let value = parseInt(document.getElementById("q" + i).value);
    let weight = weights[i];
    let score = value - 4;
    total += score * weight;
  }

  let maxScore = 3 * questions.length;
  let percentage = ((total + maxScore) / (2 * maxScore)) * 100;

  document.getElementById("results").innerHTML = `
    <h2>Risultato: Sovversione vs Riformismo</h2>
    <p><strong>Riformismo:</strong> ${percentage.toFixed(1)}%</p>
    <p><strong>Sovversione:</strong> ${(100 - percentage).toFixed(1)}%</p>
  `;
}

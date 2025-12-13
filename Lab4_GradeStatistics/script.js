const submitBtn = document.getElementById("submitBtn");
const mathInput = document.getElementById("mathInput");
const englishInput = document.getElementById("englishInput");
const tableBody = document.querySelector("#gradeTable tbody");

let rowCount = 0;

submitBtn.addEventListener("click", function () {
  const math = parseFloat(mathInput.value);
  const english = parseFloat(englishInput.value);

  if (isNaN(math) || isNaN(english)) {
    alert("Please enter valid numbers.");
    return;
  }

  rowCount++;
  const avg = ((math + english) / 2).toFixed(2);

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${rowCount}</td>
    <td>${math}</td>
    <td>${english}</td>
    <td>${avg}</td>
  `;

  tableBody.appendChild(row);

  updateColumnAverages();

  mathInput.value = "";
  englishInput.value = "";
});

function updateColumnAverages() {
  const rows = tableBody.querySelectorAll("tr");
  let mathSum = 0;
  let englishSum = 0;

  rows.forEach(row => {
    mathSum += parseFloat(row.children[1].innerText);
    englishSum += parseFloat(row.children[2].innerText);
  });

  const count = rows.length;
  const mathAvg = (mathSum / count).toFixed(2);
  const englishAvg = (englishSum / count).toFixed(2);
  const overallAvg = ((mathSum + englishSum) / (count * 2)).toFixed(2);

  document.getElementById("mathAvg").innerText = mathAvg;
  document.getElementById("englishAvg").innerText = englishAvg;
  document.getElementById("overallAvg").innerText = overallAvg;
}
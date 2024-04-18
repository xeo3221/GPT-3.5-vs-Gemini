const form = document.getElementById("oplaty-form");
const table = document
  .getElementById("oplaty-table")
  .getElementsByTagName("tbody")[0];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nazwa = document.getElementById("nazwa").value;
  const kwota = document.getElementById("kwota").value;
  const typ = document.getElementById("typ").value;

  const row = table.insertRow();
  const cellNazwa = row.insertCell(0);
  const cellKwota = row.insertCell(1);
  const cellTyp = row.insertCell(2);
  const cellAkcje = row.insertCell(3);

  cellNazwa.innerHTML = nazwa;
  cellKwota.innerHTML = kwota;
  cellTyp.innerHTML = typ;
  cellAkcje.innerHTML =
    '<input type="button" value="Edytuj" onclick="editRow(this)">' +
    ' <input type="button" value="Usuń" onclick="deleteRow(this)">';

  if (typ === "cykliczna") {
    alert("Opłata cykliczna");
  }

  form.reset();
});

function editRow(button) {
  const row = button.parentNode.parentNode;
  const cells = row.getElementsByTagName("td");

  const nazwa = cells[0].innerText;
  const kwota = cells[1].innerText;
  const typ = cells[2].innerText;

  document.getElementById("nazwa").value = nazwa;
  document.getElementById("kwota").value = kwota;
  document.getElementById("typ").value = typ;

  row.remove();
}

function deleteRow(button) {
  const row = button.parentNode.parentNode;
  row.remove();
}

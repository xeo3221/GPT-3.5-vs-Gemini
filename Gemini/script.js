// Tablica przechowująca opłaty
if (oplata.typ === "cykliczna") {
  var alertMessage =
    "Oplata cykliczna: " + oplata.nazwa + "\nKwota: " + oplata.kwota + " zł";
  alert(alertMessage);
}

var oplaty = [];

// Funkcja pobierająca dane z formularza dodawania
function pobierzDaneZFormularzaDodawania() {
  var nazwa = document.getElementById("nazwa").value;
  var kwota = parseFloat(document.getElementById("kwota").value);
  var typ = document.getElementById("typ").value;
  var okres = document.getElementById("okres").value;

  return {
    nazwa: nazwa,
    kwota: kwota,
    typ: typ,
    okres: okres,
  };
}

// Funkcja dodająca opłatę
function dodajOplate(nazwa, kwota, typ, okres) {
  var oplata = {
    nazwa: nazwa,
    kwota: kwota,
    typ: typ,
    okres: okres,
  };

  oplaty.push(oplata);

  aktualizujListeOplat();
}

// Funkcja aktualizująca listę opłat
function aktualizujListeOplat() {
  var listaOplat = document.getElementById("oplaty-lista").querySelector("ul");
  listaOplat.innerHTML = "";

  oplaty.forEach(function (oplata) {
    var li = document.createElement("li");
    li.innerHTML = `
      <h3>${oplata.nazwa}</h3>
      <p>Kwota: ${oplata.kwota} zł</p>
      <p>Typ: ${oplata.typ}</p>
      ${oplata.okres ? `<p>Okres: ${oplata.okres}</p>` : ""}
      <button data-id="${oplata.id}">Edytuj</button>
      <button data-id="${oplata.id}">Usuń</button>
    `;

    listaOplat.appendChild(li);
  });

  // Dodawanie event listenerów do przycisków edycji i usuwania
  var przyciskiEdytuj = document.querySelectorAll(
    "#oplaty-lista button[data-id]"
  );
  przyciskiEdytuj.forEach(function (przycisk) {
    przycisk.addEventListener("click", function () {
      edytujOplate(przycisk.dataset.id);
    });
  });

  var przyciskiUsun = document.querySelectorAll(
    "#oplaty-lista button[data-id]"
  );
  przyciskiUsun.forEach(function (przycisk) {
    przycisk.addEventListener("click", function () {
      usunOplate(przycisk.dataset.id);
    });
  });
}

// Funkcja edytowania opłaty
function edytujOplate(id) {
  // Pobranie opłaty do edycji
  var oplataDoEdycji = oplaty.find(function (oplata) {
    return oplata.id === parseInt(id);
  });

  if (!oplataDoEdycji) {
    return; // Opłata o podanym ID nie została znaleziona
  }

  // Wypełnienie formularza edycji danymi opłaty
  document.getElementById("id").value = oplataDoEdycji.id;
  document.getElementById("nazwa").value = oplataDoEdycji.nazwa;
  document.getElementById("kwota").value = oplataDoEdycji.kwota;
  document.getElementById("typ").value = oplataDoEdycji.typ;
  document.getElementById("okres").value = oplataDoEdycji.okres;

  // Wyświetlenie formularza edycji
  document.getElementById("oplata-edytuj").style.display = "block";

  // Obsługa formularza edycji (pozostała część kodu)
}

// Funkcja usuwająca opłatę
function usunOplate(id) {
  // Usunięcie opłaty z tablicy
  oplaty = oplaty.filter(function (oplata) {
    return oplata.id !== parseInt(id);
  });

  // Aktualizacja listy opłat
  aktualizujListeOplat();

  // Ukrycie szczegółów opłaty i przycisków edycji/usuwania
  document.getElementById("oplata-szczegolowa").style.display = "none";
  document.getElementById("przycisk-edytuj").style.display = "none";
  document.getElementById("przycisk-usun").style.display = "none";

  // Wyświetlenie listy opłat
  document.getElementById("oplaty-lista").style.display = "block";
}

// Przykłady użycia
dodajOplate("Czynsz", 1500, "cykliczna", "miesiac");
dodajOplate("Rachunek za prąd", 300, "cykliczna", "miesiac");
dodajOplate("Bilet na pociąg", 50, "pojedyncza");

// Obsługa formularza dodawania
var formularzDodawania = document.getElementById("formularz-dodawania");
formularzDodawania.addEventListener("submit", function (event) {
  event.preventDefault();

  var dane = pobierzDaneZFormularzaDodawania();
  dodajOplate(dane.nazwa, dane.kwota, dane.typ, dane.okres);

  // Wyczyszczenie formularza
  formularzDodawania.reset();
});

function edytujOplate(id) {
  // Pobranie opłaty do edycji
  var oplataDoEdycji = oplaty.find(function (oplata) {
    return oplata.id === parseInt(id);
  });

  if (!oplataDoEdycji) {
    return; // Opłata o podanym ID nie została znaleziona
  }

  // Pobranie opłaty do edycji
  var oplataDoEdycji = oplaty.find(function (oplata) {
    return oplata.id === parseInt(id);
  });

  if (!oplataDoEdycji) {
    return; // Opłata o podanym ID nie została znaleziona
  }
}

function usunOplate(id) {
  // Usunięcie opłaty z tablicy
  oplaty = oplaty.filter(function (oplata) {
    return oplata.id !== parseInt(id);
  });

  // Aktualizacja listy opłat
  aktualizujListeOplat();
}

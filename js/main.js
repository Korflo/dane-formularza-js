//
// W pliku html stwórz podstawową strukturę html5, a następnie stwórz folder "js" a w nim plik "main.js". W pliku html podepnij Twój skrypt.

// W html stwórz prosty formularz z następującymi polami:
// 1. Imię
// 2. Nazwisko
// 3. Numer telefonu

// Poniżej formularza stwórz następującą strukturę:

// <button>Wyświetl dane</button>
// <div id="container">
//     <p>Dane:</p>
//     <p id="name"></p>
//     <p id="surname"></p>
//     <p id="phone"></p>
// </div> Twoim zadaniem jest stworzyć funkcję uruchamianą po kliknięciu buttona.

// Funkcja powinna pobierać dane z value inputa i wstawiać je do odpowiednich paragrafów.
// Należy użyć do tego metody JavaScript .value

// Przykład:

// let nazwa = document.getElementById("nazwa-id");
// console.log(nazwa.value);
// Dodatkowo do projektu dołącz plik css, w którym nadaj dowolny wygląd Twojej stronie

document.querySelector('button').onclick = function() {
  let inpName = document.querySelector('.inpName').value;
  console.log(inpName);
  let name =document.querySelector('#name');
  console.log(name);
  name.innerText = inpName;
}

document.querySelector('button').onclick = function() {
    let inpSurname = document.querySelector('.inpSurname').value;
    console.log(inpSurname);
    let surname = document.querySelector('#surname');
    console.log(surname);
    surname.innerHTML = inpSurname;
}

document.querySelector('button').onclick = function() {
    let inpPhone = document.querySelector('.inpPhone').value;
    console.log(inpPhone);
    let phone = document.querySelector('#phone');
    console.log(phone);
    phone.innerHTML = inpPhone;
}

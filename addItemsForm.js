// aduagam in HTML formularul de adaugare produs
mainPage.innerHTML += `
<div class="main">
    <p>ADD A NEW PHONE</p>
    <form name="formPhone" id="addPhone">
      <div class="info">
        <input type="text" id="phoneName" name="phoneName" placeholder="Name" required>
        <input type="number" id="phonePrice" name="phonePrice" placeholder="Price" required>
        <input type="number" id="phoneYear" name="phoneYear" placeholder="Year" required max=${Number(getCurrentDate().substring(6,10))}>
        <input type="text" id="phoneImage" name="phoneImage" placeholder="Image link" required>
      </div>
      <input type="submit" id="submit" value="ADD">
    </form>
  </div>
`;

function addFormFunctionality() {
  // adaugarea produsului
  function addProduct(nameP, priceP, imageP, yearP, dateP) {
    // preluam produsele din localStorage
    const products = APP.getProducts();
    // modificarea vectorului de produse

    indexPhone ++;
    idP = indexPhone;
    products.push({
      name: nameP,
      price: priceP,
      image: imageP,
      year: yearP,
      date: dateP,
      id: idP
    });
    // adaugam vectorul in localStorage
    APP.addProducts(products);

    // reafisam produsele
    APP.renderProductList(products);
    deleteEvent();
  }



  const form = document.querySelector('#addPhone');
  form.onsubmit = function(event) {
    // trebuie sa prevenim reincarcare paginii
    event.preventDefault();
    // luam numele si pretul introduse de utilizator
    const name = event.target.phoneName.value;
    const price = Number(event.target.phonePrice.value);
    const year = Number(event.target.phoneYear.value);
    const date = getCurrentDate();
    const image = event.target.phoneImage.value;

    // apelam functia de adaugare a produsului
    addProduct(name, price,image,year,date);
  form.reset();
  }
}

function getCurrentDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = dd + '.' + mm + '.' + yyyy;
  return today;
}
// la momentul incarcarii fisierului addItemsForm.js
// inca nu stim cine e APP.renderProductList.
// asadar, inainte ca respectiv functie sa fie apelata,
// vrem sa incarcam celelalte fisiere
window.addEventListener('load', addFormFunctionality);

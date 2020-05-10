// functia de sortare
function sortPhones(sortType) {
  switch(sortType) {
    // in cazul in care e apasat butonul de sortare dupa pret
    case "sortByPrice":
      // sortam dupa pret, modificand vectorul de produse
      // mai intai trebuie sa luam produsele din baza de date
      const sortedByPrice = APP.getProducts().sort((elem1, elem2) => {
        // daca primul element e mai mic, se returneaza un numar negativ
        // ceea ce insemana ca elementele nu vor fi schimbate
        if(elem1.price < elem2.price) {
          return -1;
        // elementele sunt schimbate
        } else if (elem1.price > elem2.price) {
          return 1;
        // elementele raman pe loc
        } else {
          return 0;
        }
        // return elem1.price - elem2.price;
      });
      // we put products in our database
      APP.addProducts(sortedByPrice);
      // then we render the sorted list
      APP.renderProductList(sortedByPrice);
      break;

    case "sortByYear":
      const sortedByYear = APP.getProducts().sort((elem1, elem2) => {
        if(elem1.year < elem2.year) {
          return -1;
        } else if (elem1.year > elem2.year) {
          return 1;
        } else {
          return 0;
        }
      });
      APP.addProducts(sortedByYear);
      APP.renderProductList(sortedByYear);
      break;

    case "sortByDate":
      const sortedByDate = APP.getProducts().sort((elem1, elem2) => {
        if(getDatePhone(elem1.date) < getDatePhone(elem2.date)) {
          return -1;
        } else if (getDatePhone(elem1.date) > getDatePhone(elem2.date)) {
          return 1;
        } else {
          return 0;
        }
      });
      APP.addProducts(sortedByDate);
      APP.renderProductList(sortedByDate);
      break;
  }
}

// cand se face click pe butonul de sortare dupa pret, se apeleaza functia de sortare
const sortByPrice = document.querySelector('#sortByPrice');
sortByPrice.addEventListener('click', function() {
  sortPhones('sortByPrice');
})

const sortByYear = document.querySelector('#sortByYear');
sortByYear.addEventListener('click', function() {
  sortPhones('sortByYear');
})

const sortByDate = document.querySelector('#sortByDate');
sortByDate.addEventListener('click', function() {
  sortPhones('sortByDate');
})

function getDatePhone(string){
  var d   = parseInt(string.substring(0,2));
  var m  = parseInt(string.substring(3,5));
  var y   = parseInt(string.substring(6,10));
  var date = new Date(y, m-1, d);
  return date;
}

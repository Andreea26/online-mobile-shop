var filterButton = document.querySelector('#filter');
var minimPrice = document.querySelector('#limitInf')
var maximPrice = document.querySelector('#limitSup');
function filterProducts(){
  if(minimPrice.value === ''){
    minimPrice.value ='0';
  }
  if(maximPrice.value === ''){
    maximPrice.value = '100000000';
  }

  const productsFiltered = APP.getProducts().filter(product => product.price > Number(minimPrice.value) && product.price < Number(maximPrice.value));
  APP.renderProductList(productsFiltered);
  minimPrice.value = '';
  maximPrice.value = ''
}

filterButton.addEventListener('click', filterProducts);

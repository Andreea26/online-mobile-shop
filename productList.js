// aduagam in pagina HTML butoanele de sortare
mainPage.innerHTML += `
<div class="buttons">
	<div class="buttonsSort">
		<button id="sortByPrice">Sorteaza dupa pret</button>
		<button id="sortByYear">Sorteaza dupa anul aparitiei</button>
		<button id="sortByDate">Sorteaza dupa data adaugarii</button>
	</div>
	<div class="inputs">
		<input id="limitInf" placeholder="Pret mai mare decat..."/>
		<button id="filter">Filtreaza dupa pret</button>
		<input id="limitSup" placeholder="Pret mai mic decat..."/>
	</div>
</div>
`;

// adaugam lista de produse in html
mainPage.innerHTML += `
	<div id="product-list">
	</div>
`;

APP.renderProductList = (productArray) => {
	// golim lista in care se vor afisa produsele
	const productList = document.querySelector('#product-list');
	productList.innerHTML = '';
	// pentru fiecare element din vectorul primit ca parametru
	productArray.forEach( (elem) => {
		// cream un produs
		product = new Product(elem.name, elem.price, elem.image, elem.year, elem.date, elem.id);
		// il afisam in pagina web
		product.renderProduct();
	});
}

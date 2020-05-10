// aduagam in pagina HTML butoanele de sortare
mainPage.innerHTML += `
<div class="buttons">
	<div class="buttonsSort">
		<button id="sortByPrice">Sort by price</button>
		<button id="sortByYear">Sort by year</button>
		<button id="sortByDate">Sort by date</button>
	</div>
	<div class="inputs">
		<input id="limitInf" placeholder="Higher price"/>
		<button id="filter">Filter by price</button>
		<input id="limitSup" placeholder="Lower price"/>
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

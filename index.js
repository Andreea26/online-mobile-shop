window.indexPhone = 0;
// cream un obiect global, numit APP
window.APP = {};
// index.js fiind primul fisier care se incarca, mainPage va fi available in toate celelalte fisiere
window.mainPage = document.querySelector('#root');
// tot in APP cream un vector de obiecte, numit products
APP.products = [
	{
		// un telefon are nume si pret
		name: 'Iphone XS',
		price: 4500,
		image: 'iphoneXS.jpg',
		year: 2018,
		date: '20.04.2019',
		id: 1
	},
	{
		name: 'Huawei P30',
		price: 4000,
		image: 'huawei30.jpg',
		year: 2018,
		date: '10.06.2019',
		id: 2
	},
	{
		name: 'Samsung S10',
		price: 4250,
		image: 's10.jpg',
		year: 2019,
		date: '10.07.2019',
		id: 3
	}
];

//pentru ca am hardcodat 3 produse initial.
indexPhone = 3;
// pentru stocare persistenta(sa nu se mai piarda datele la refresh), folosim lacalStorage
// avand in vedere ca vom face de mai multe ori operatiile de introducere a datelor in localStorage
// si de extragere a datelor din localStorage, vom face doua functii

// pentru a adauga vectorul de produse in local storage, trebuie mai intai sa il facem string
// pentru cheia "products", vom avea valoarea corespunzatoare, dar facuta string
APP.addProducts = (products) => {
	localStorage.setItem("products", JSON.stringify(products));
}
// pentru a extrage vectorul de produse, luam valoarea corespunzatoare cheii "products"
// apoi o parsam, pentru a deveni iar vector de obiecte, si o returnam
APP.getProducts = () => {
	const products = localStorage.getItem("products");
	return JSON.parse(products);
};
// daca nu avem nimic in baza de date
// introducem vectorul de produse in localStorage
if (APP.getProducts() === null){
	APP.addProducts(APP.products);
}


function startRendering() {
	// "randam" lista de produse, trimitand ca parametru APP.products (incarcat mai sus)
	APP.renderProductList(APP.getProducts());
}
// DUPA ce s-au incarcat TOATE scripturile, apelam functia startRendering
// facem asta pentru ca la momentul incarcarii lui index.js, nu stim cine renderProductList()
window.addEventListener('load', startRendering);

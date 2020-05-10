class Product {
	// un produs este creat cu o clasa cu urmtorul constructor:
	constructor(name, price, image, year, date, id) {
		this.name = name;
		this.price = price;
		this.image = image;
		this.year = year;
		this.date = date;
		this.id = id;
	}
	// metoda renderProduct adauga produse in interiorul listei de produse
	renderProduct() {
		const productList = document.querySelector('#product-list');
		productList.innerHTML += `
			<li class="product">
				<button class="delete" id=${this.id}>x</button>
				<span>${this.name}</span>
				<p>Price: ${this.price} RON</p>
				<p>Year: ${this.year}</p>
				<p>Date: ${this.date}</p>
				<image src=${this.image} alt="Not found" width=100 height=100/>
			</li>
		`;
	}
}

function store() {
	this.products = [
	  new product("ADDIDAS", "Addidas", "It is made in Germany", 1600, "UK", 5, "1yr"),
	  new product("ALLEN COOPER", "Allen copper","It is made in India", 1100, "India", 4.5, "1yr"),
	  new product("BATA", "Bata", "It is made in switzerland", 1300, "switzerland", 4.7, "1yr"),
	  new product("BROGUE", "Brogue", "It is made in spain", 900, "spain", 3.5, "1yr"),
	  new product("CANVAS", "Canvas", "It is made in Switzerland", 800, "china", 3.2, "6mns"),
	  new product("ElITE", "Elite", "It is made in United kingdom", 1200, "UK", 4.2, "1yr"),
	  new product("LOUIS PHILIPPE", "Louis Philippe", "It is made in india", 1400, "India", 4.5, "2yrs"),
	  new product("NIKE", "Nike", "It is made in USA", 2000, "USA", 5, "2yrs"),
	  new product("PUMA", "Puma", "It is made in Germany", 2500, "Germany", 5, "2yrs"),
	  new product("REEBOK", "Reebok", "It is made in Germany", 3000, "USA", 5, "2yrs"),
	  new product("SUESE", "Suese", "It is made in USA", 1200, "USA", 3, "8mns"),
	  new product("VAN", "Van", "It is made in California", 1500, "vietnam",4.3, "2yr"),
		
	]
}
 store.prototype.getProduct = function (sku) {
	 for(var i=0; i<this.products.length; i++){
		 if(this.products[i].sku == sku)
			 return this.products[i];
	 }
	 return null;
 }
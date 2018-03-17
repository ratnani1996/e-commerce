class Item{
constructor(id,name,descr, amount, discount , stock, image){
this.id = id;
this.name = name;
this.descr = descr;
this.amount = amount;
this.discount = discount;
this.stock = stock;
this.image = image;    
	this.markForDelete = false;
	
}
	toggleDelete(){
		this.markForDelete = ! this.markForDelete;
	}
}
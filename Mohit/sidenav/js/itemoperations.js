const itemOperations = {
itemList:[],
id:1,	
addItem(name,descr, amount, discount , stock, image){
	var itemObject = new Item(this.id,name,descr, amount, discount , stock, image);
	this.itemList.push(itemObject);
	this.id++;
},
deleteItem(){
	 return this.itemList = this.itemList.filter(function(itemObject){
		return itemObject.markForDelete ==false;
});
	
},
    
    
    
searchById(id){
	var index = this.itemList.findIndex(function(itemObject){
		return itemObject.id ==id;
	});
	return index;
},
countMark(){
	return this.itemList.filter(function(itemObject){
		return itemObject.markForDelete ;
	}).length;
},	
    
    
    
markRecordDelete(id){
	var index = this.searchById(id);
	var itemObject = this.itemList[index];
	itemObject.toggleDelete();
}	
}
window.addEventListener("load",bindEvents);

function bindEvents(){
    printId();
	document.getElementById('add').addEventListener("click",addItem);
	document.getElementById('delete').addEventListener("click",deleteItem);
	document.getElementById("update").addEventListener("click",updateItem);
}

function updateItem(){
	 itemObjectEdit.id= document.getElementById("itemno").innerHTML ;
	 itemObjectEdit.name= document.getElementById("itemname").value  ;
	itemObjectEdit.descr= document.getElementById("descr").value  ;
	   itemObjectEdit.amount = document.getElementById("amount").value;
	 itemObjectEdit.discount = document.getElementById("discount").value ;
    itemObjectEdit.stock = document.getElementById("stock").value ;
    itemObjectEdit.image = document.getElementById("image").value ;

	printTable();
}

function deleteItem(){
itemOperations.deleteItem();
	printTable();
}

const printId = ()=>document.getElementById("itemno").innerHTML = itemOperations.id;

function addItem(){
	//var itemNo = document.getElementById("itemno").value;
	var itemName = document.getElementById("itemname").value;
	var itemDesc = document.getElementById("descr").value;
	var amount = document.getElementById("amount").value;
	var discount = document.getElementById("discount").value;
	var stock = document.getElementById("stock").value;
    var image = document.getElementById("image").value;
	itemOperations.addItem(itemName,itemDesc, amount, discount , stock, image);
	var lastObject = itemOperations.itemList[itemOperations.itemList.length-1];
	printRecord(lastObject);
	
}

function printIcon(path,cls,fn,id){
	var image = document.createElement("img");
	image.src = path;
	image.className=cls;
	image.setAttribute("item-id",id);
	image.addEventListener("click",fn);
	return image;
}

/****************/
function printImg(path,cls,id){
    var image = document.createElement("img");
	image.src = path;
	image.className=cls;
	image.setAttribute("item-img-id",id);
    return image;
}
/*****************/
function markForDelete(event){
	var tr = event.srcElement.parentNode.parentNode;
	tr.classList.toggle("redrow");
	var id = event.srcElement.getAttribute("item-id");
	itemOperations.markRecordDelete(id);
}
var itemObjectEdit ;
function editRecord(event){
	var id = event.srcElement.getAttribute("item-id");
	var index= itemOperations.searchById(id);
	 itemObjectEdit = itemOperations.itemList[index];
	document.getElementById("itemno").innerHTML = itemObjectEdit.id;
	 document.getElementById("itemname").value = itemObjectEdit.name;
	 document.getElementById("descr").value = itemObjectEdit.descr;
	 document.getElementById("amount").value = itemObjectEdit.amount;
	 document.getElementById("discount").value = itemObjectEdit.discount;
	 document.getElementById("stock").value= itemObjectEdit.stock;
    document.getElementById("image").value= itemObjectEdit.image;
	//alert("Edit Record....");
}

function printTable(){
	document.getElementById("itemtable").innerHTML="";
	itemOperations.itemList.forEach((itemObject)=>printRecord(itemObject));
}

function printRecord(itemObject){
	
	printId();
	var tbody = document.getElementById("itemtable");
	var tr = tbody.insertRow();
	var index = 0;
	for(let key in itemObject){
		if(key=='markForDelete'){
			continue;
		}
		if(key=='image'){
			// var currentImg = document.getElementById("image").value;
    		var itemImg = printImg(itemObject[key],'itemstyle',itemObject.id);
    		var td = tr.insertCell(index);
			td.appendChild(itemImg);
			continue;
		}
		tr.insertCell(index).innerHTML = itemObject[key];
		index++;
	}
    
    /********************/
    // var currentImg = document.getElementById("image").value;
    // var itemImg = printImg(currentImg,'itemstyle',itemObject.id);
    // var td = tr.insertCell(index);
	// td.appendChild(itemImg);
    /********************/
	var deleteIcon = printIcon('images/delete.png','imagestyle',markForDelete,itemObject.id);
	var td = tr.insertCell(index);
	td.appendChild(deleteIcon);
	var editIcon = printIcon('images/edit.png','imagestyle',editRecord,itemObject.id);
	td.appendChild(editIcon);
	//tr.insertCell(0).innerHTML = itemObject.id;
	//tr.insertCell(1).innerHTML = itemObject.name;
}

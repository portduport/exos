console.log("exo-7");

console.log(jsonDatas);
var translateType = {'car':'Voiture','house':'Maison','game':'Jeux de Plateau','videoGame':'Jeux Vidéos','show':'Événement'};

function afficherOne(){
	for (var i = 0; i < jsonDatas.length; i++) {
		if(translateType.hasOwnProperty(jsonDatas[i].type)){
		console.log(jsonDatas[i].name);
		console.log(translateType[jsonDatas[i].type]);
		console.log(jsonDatas[i].description);
		console.log(jsonDatas[i].price);
		console.log(jsonDatas[i].quantity);
	}
	}
}

//afficherOne();

function productByType(){
	console.clear();
	var inputType = document.getElementById("afficheArticles").value;
	var checkBox = document.getElementById("inStock");
	for (var i = 0; i < jsonDatas.length; i++) {
		if(inputType === jsonDatas[i].type){
			if(checkBox.checked && jsonDatas[i].type.quantity > 0){
			console.log(jsonDatas[i].type.name);
			} else if(!checkBox.checked){
				console.log(jsonDatas[i].type.name);
			}
		}
	}
}

function compareValues(key, order='asc') {
	return function(a, b) {
		if(!a.hasOwnProperty(key) ||
			!b.hasOwnProperty(key)) {
			return 0;
		}

		const varA = (typeof a[key] === 'string') ?
			a[key].toUpperCase() : a[key];
		const varB = (typeof b[key] === 'string') ?
			b[key].toUpperCase() : b[key];

		let comparison = 0;
		if (varA > varB) {
			comparison = 1;
		} else if (varA < varB) {
			comparison = -1;
		}
		return (
			(order == 'desc') ?
				(comparison * -1) : comparison
		);
	};
}

function orderProduct() {
	console.clear();
	var selector = document.getElementById("listSort");
	var selected = selector.options[selector.selectedIndex].value;
	//console.log(selected);

	if(selected == 1) {
		console.log(
			jsonDatas.sort(compareValues('name', 'asc'))
		);
	}
	if(selected == 2) {
		console.log(
			jsonDatas.sort(compareValues('name', 'desc'))
		);
	}
	if(selected == 3) {
		console.log(
			jsonDatas.sort(compareValues('price', 'asc'))
		);
	}
	if(selected == 4) {
		console.log(
			jsonDatas.sort(compareValues('price', 'desc'))
		);
	}

}

function createArticle() {
	var obj = {};
	obj.name = document.getElementById("nameProduct").value;
	obj.type = document.getElementById("typeProduct").value;
	obj.description = document.getElementById("descriptionProduct").value;
	obj.price = document.getElementById("priceProduct").value;
	obj.quantity = document.getElementById("quantityProduct").value;
	jsonDatas.push(obj);
	console.log(obj);
	console.log(jsonDatas);
}

jsonDatas.forEach(function (type) {
	type.items.forEach(function (items) {
		console.log(items.contact);
	})
});




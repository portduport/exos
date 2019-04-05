console.log("exo-7");

var translateType = {
    'car': 'Voiture',
    'house': 'Maison',
    'game': 'Jeux de Plateau',
    'videoGame': 'Jeux Vidéos',
    'show': 'Événement'
};
// function insertData() {
// for (var i = 0; i < jsonDatas.length; i++){
//     document.write('<tr style="background-color: white">');
//     document.write('<td>' + jsonDatas[i].name + '</td>');
//     document.write('<td>' + jsonDatas[i].description + '</td>');
//     document.write('<td>' + jsonDatas[i].type + '</td>');
//     document.write('<td>' + jsonDatas[i].price + '</td>');
//     document.write('<td>' + jsonDatas[i].quantity + '</td>');
//     document.write('</tr>');
// }
// }

function dataFilter() {
    let valores = [];
    jsonDatas.forEach(function (element) {
        let myCurrentOption = document.createElement('option');
        myCurrentOption.setAttribute('value', element.type);
        if (translateType.hasOwnProperty(element.type)) {
            if (!valores.includes(element.type)) {
                let myCurrentText = document.createTextNode(translateType[element.type]);
                myCurrentOption.appendChild(myCurrentText);
                valores.push(element.type);
                var selectOPTION = document.getElementById('listFilter');
                selectOPTION.appendChild(myCurrentOption);
            }
        }
    })

}

dataFilter();

function FilterAllData() {
    eraseTable();
    let selector = document.getElementById("listFilter");
    let selected = selector.options[selector.selectedIndex].value;
    console.log(selected);
    for (var i = 0; i < jsonDatas.length; i++) {
        if (selected === jsonDatas[i].type) {
            let myCurrentRow = document.createElement('tr');
            let myCheckBox = document.createElement('input');
            myCheckBox.setAttribute('type', 'checkbox');
            for (var prop in jsonDatas[i]) {
                let myCurrentCell = document.createElement('td');
                let myCurrentText = document.createTextNode(jsonDatas[i][prop]);
                myCurrentCell.appendChild(myCurrentText);
                myCurrentRow.appendChild(myCurrentCell);
            }
            var tbodyTABLE = document.getElementById('bodyTable');
            tbodyTABLE.appendChild(myCurrentRow);
        }
        if (selected == 0) {
            eraseTable();
            insertData();
        }
    }
}


function insertData() {
    for (var i = 0; i < jsonDatas.length; i++) {
        let myCurrentRow = document.createElement('tr');
        let myCurrentCell = document.createElement('td');
        let myCheckBox = document.createElement('input');
        myCheckBox.setAttribute('type', 'checkbox');
        myCheckBox.setAttribute('id', jsonDatas[i].id);
        myCurrentCell.appendChild(myCheckBox);
        myCurrentRow.appendChild(myCurrentCell);
        for (var prop in jsonDatas[i]) {
            let myCurrentCell = document.createElement('td');
            let myCurrentText = document.createTextNode(jsonDatas[i][prop]);
            myCurrentCell.appendChild(myCurrentText);
            myCurrentRow.appendChild(myCurrentCell);
        }

        let tbodyTABLE = document.getElementById('bodyTable');
        tbodyTABLE.appendChild(myCurrentRow);
    }

}

insertData();

function eraseTable() {
    document.getElementById("bodyTable").innerHTML = "";
}


function createArticle() {
    console.clear();
    eraseTable();
    var obj = {};
    obj.name = document.getElementById("nameProduct").value;
    obj.type = document.getElementById("typeProduct").value;
    obj.description = document.getElementById("descriptionProduct").value;
    obj.price = document.getElementById("priceProduct").value;
    obj.quantity = document.getElementById("quantityProduct").value;
    jsonDatas.push(obj);
    insertData();
}

function orderProduct() {
    console.clear();
    var selector = document.getElementById("listSort");
    var selected = selector.options[selector.selectedIndex].value;
    //console.log(selected);

    if (selected == 1) {
        jsonDatas.sort(compareValues('name', 'asc'));
        eraseTable();
        insertData();
    }
    if (selected == 2) {
        jsonDatas.sort(compareValues('name', 'desc'));
        eraseTable();
        insertData();
    }
    if (selected == 3) {
        jsonDatas.sort(compareValues('price', 'asc'));
        eraseTable();
        insertData();
    }
    if (selected == 4) {
        jsonDatas.sort(compareValues('price', 'desc'))
        eraseTable();
        insertData();
    }

}

function compareValues(key, order = 'asc') {
    return function (a, b) {
        if (!a.hasOwnProperty(key) ||
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

function addToCart() {
    erasePanier();

    // We add the products to the cart

    let cart = [];
    jsonDatas.forEach(function (items) {
        //console.log(items);
        let checkBox = document.getElementById(items.id);
        if (checkBox.checked) {
            console.log(items.id);
            cart.push(items.id);

        }
    })

    // We create the cart with the product selection

    for (let i = 0; i < cart.length; i++) {
        let myCurrentRow = document.createElement('tr');
        let myCurrentCell = document.createElement('td');
        let myCheckBox = document.createElement('input');
        myCheckBox.setAttribute('type', 'checkbox');
        myCheckBox.setAttribute('id', cart[i]);
        myCurrentCell.appendChild(myCheckBox);
        myCurrentRow.appendChild(myCurrentCell);
        for (let n = 0; n < jsonDatas.length; n++) {
            if (cart[i] === jsonDatas[n].id){
            for (var prop in jsonDatas[n]) {
                let myCurrentCell = document.createElement('td');
                let myCurrentText = document.createTextNode(jsonDatas[n][prop]);
                myCurrentCell.appendChild(myCurrentText);
                myCurrentRow.appendChild(myCurrentCell);
            }}
        }

        let tbodyTABLE = document.getElementById('bodyPANIER');
        tbodyTABLE.appendChild(myCurrentRow);
    }
}

function erasePanier() {
    document.getElementById("bodyPANIER").innerHTML = "";
}

function Panier(){

}
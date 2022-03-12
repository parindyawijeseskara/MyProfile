/*Save Item Click Event*/
$("#btnSaveItem").click(function () {
   saveItem();
   loadAllItems();
   clearAll();
})

function saveItem() {
    let itemCode = $("#txtItemCode").val();
    let itemName = $("#txtItemName").val();
    let itemQty = $("#txtQty").val();
    let itemPrice = $("#txtItemPrice").val();


    var item = new Item(itemCode,itemName,itemQty,itemPrice);
    itemDB.push(item);
}

/* Search ItemCode*/
$("#btnSearchItem").click(function () {
    var searchID = $("#txtSearchItemCode").val();

    var response = searchItem(searchID);
    if (response) {
        $("#itemTable").empty();
        let row = `<tr><td>${response.getCode()}</td><td>${response.getDescription()}</td><td>${response.getQtyOnHand()}</td><td>${response.getUnitPrice()}</td><td><button type='button'
                                     class='btn btn-default' id="btnDlt" onclick="deleteCustomer(this)">
                    <span class='glyphicon glyphicon-remove' /></button></td>
                    <td><button type='button' onclick="onEdit(this)"
                                     class='btn btn-default' id="btnEdit">
                    <span class='glyphicon glyphicon-edit' /></button></td></tr>`;
        $("#itemTable").append(row);

    }else{
        clearAll();
        alert("No Such Item");
    }
});

function searchItem(id) {
    for (let i = 0; i < itemDB.length; i++) {
        if (itemDB[i].getCode()==id) {
            return itemDB[i];
        }
    }

}

/*Reset Customer*/
$("#btnResetItem").click(function () {
    loadAllItems();
})



function loadAllItems() {
    $("#itemTable").empty();
    for (var i = 0; i < itemDB.length; i++) {
        let row = `<tr><td>${itemDB[i].getCode()}</td><td>${itemDB[i].getDescription()}</td><td>${itemDB[i].getQtyOnHand()}</td><td>${itemDB[i].getUnitPrice()}</td><td><button type='button'
                                     class='btn btn-default' id="btnDlt" onclick="deleteItem(this)">
                    <span class='glyphicon glyphicon-remove' /></button></td>
                    <td><button type='button' onclick="onEditItem(this)"
                                     class='btn btn-default' id="btnEdit">
                    <span class='glyphicon glyphicon-edit' /></button></td></tr>`;
        $("#itemTable").append(row);
    }
}

function clearAll() {
    $("#txtItemCode").val("");
    $("#txtItemName").val("");
    $("#txtQty").val("");
    $("#txtItemPrice").val("");

    $("#txtItemCode").focus();
}

/*Delete Item*/
var selectedRow = null;
function deleteItem(td) {
    $("#itemTable").on('click','#btnDlt',function(e){
        selectedRow = td.parentElement.parentElement;
        console.log(selectedRow.cells[0].innerHTML);

        var index=-1;
        for (var i = 0; i < itemDB.length; i++) {
            if (itemDB[i].getCode() == $.trim(selectedRow.cells[0].innerHTML)) {
                index=i;
            }
        }
        itemDB.splice(index,1);
        loadAllItems();
        clearAll();
    });
}


var itemCode = null;
/*Update Item  */
function onEditItem(td) {
    selectedRow = td.parentElement.parentElement;
    itemCode=selectedRow.cells[0].innerHTML;

    document.getElementById("txtItemCode").value = selectedRow.cells[0].innerHTML;
    document.getElementById("txtItemName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("txtQty").value = selectedRow.cells[2].innerHTML;
    document.getElementById("txtItemPrice").value = selectedRow.cells[3].innerHTML;

    $("#txtItemCode").attr('disabled',true);
}


$("#btnUpdateItem").click(function () {
    updateItem();
})

function updateItem() {
    let itemName = $("#txtItemName").val();
    let itemQty = $("#txtQty").val();
    let itemPrice = $("#txtItemPrice").val();

    for (var i = 0; i < itemDB.length; i++) {
        console.log(itemDB[i].getCode());
        console.log(itemCode);
        if (itemCode == itemDB[i].getCode()) {
            itemDB[i].setCode(itemCode);
            itemDB[i].setDescription(itemName);
            itemDB[i].setQtyOnHand(itemQty);
            itemDB[i].setUnitPrice(itemPrice);
        }
    }
    $("#txtItemCode").attr('disabled', false);
    loadAllItems();
}












// Get dropdown element from DOM
function loadAllCustomerIds() {
    var ddlItems = document.getElementById("txtCustomerId");

    for (var i = 0; i < customerDB.length; i++) {
        var opt = customerDB[i].getCusId();
        var el = document.createElement("option");

        el.textContent = opt;
        el.value = opt;

        ddlItems.appendChild(el);
    }
}

$("#txtCustomerId").click(function () {
    for (var i = 0; i < customerDB.length; i++) {
        if($("#txtCustomerId option:selected").text()==customerDB[i].getCusId()){
            $("#txtCustomer").val(customerDB[i].getCusName());
            $("#txtSalary").val(customerDB[i].getCusSalary());
            $("#txtAddress").val(customerDB[i].getCusAddress());
        }
    }
})


// Get dropdown element from DOM
function loadAllItemCodes() {
    var ddlItems = document.getElementById("selectItemCode");

    for (var i = 0; i < itemDB.length; i++) {
        var opt = itemDB[i].getCode();
        var el = document.createElement("option");

        el.textContent = opt;
        el.value = opt;

        ddlItems.appendChild(el);
    }
}


$("#selectItemCode").click(function () {
    for (var i = 0; i < itemDB.length; i++) {
        if($("#selectItemCode option:selected").text()==itemDB[i].getCode()){
            $("#txtItemDescription").val(itemDB[i].getDescription());
            $("#txtItemUnitPrice").val(itemDB[i].getUnitPrice());
            $("#txtQTYOnHand").val(itemDB[i].getQtyOnHand());

        }
    }
})

//Place Order
$("#btnAddToTable").click(function () {
    var itemCode = $("#selectItemCode option:selected").text();
    var itemDescription = $("#txtItemDescription").val();
    var itemUnitPrice = $("#txtItemUnitPrice").val();
    var itemQty = $("#txtItemQty").val();
    var total=itemQty*itemUnitPrice;

   //get real quantity
    var newQuantity = $("#txtQTYOnHand").val();
    var realQty = newQuantity - itemQty;
    console.log(realQty);

    for (let i = 0; i < itemDB.length; i++) {
        if (itemDB[i].getCode()==itemCode) {
            itemDB[i].setQtyOnHand(realQty);
            $("#txtQTYOnHand").val(realQty);
        }
    }
    loadAllItems();

    var orders = new Orders(itemCode,itemDescription,itemUnitPrice,itemQty,total);
    orderDB.push(orders);
    loadToOrderTable();
})

var fullTotal=0.0;
function loadToOrderTable() {
    $("#orderTable").empty();
    for (var i = 0; i < orderDB.length; i++) {
        let row = `<tr><td>${orderDB[i].getItemCode()}</td><td>${orderDB[i].getItemDescription()}</td><td>${orderDB[i].getItemUnitPrice()}</td><td>${orderDB[i].getItemQty()}</td><td>${orderDB[i].getItemTotal()}</td></tr>`;
        $("#orderTable").append(row);

        fullTotal = fullTotal +  orderDB[i].getItemTotal();
        console.log(fullTotal);
        $("#total").val(fullTotal);

        var discountPercentage=0.0;
        if(fullTotal>=1000 && fullTotal<=5000){
            discountPercentage=0.01;
        }

        if(fullTotal>=5000){
            discountPercentage=0.05;
        }

        var discount = fullTotal*discountPercentage;
        $("#txtDiscount").val(discount);
        var balance = fullTotal-discount;
        $("#txtBalance").val(balance);
    }
}

/*Save orderDetails */
$("#btnSubmitOrder").click(function () {
    placeOrder();
})

function placeOrder() {
    var itemCode = $("#selectItemCode option:selected").text();
    var itemUnitPrice = $("#txtItemUnitPrice").val();
    var orderQty = $("#txtItemQty").val();
    var total=orderQty*itemUnitPrice;
    var orderId = $("#txtOrderID").val();
    var date = new Date($('#txtDate').val());
    var newDate = date.getDate()
    var customerName =  $("#txtCustomer").val();
    var balance = $("#txtBalance").val();

    var orderDetail = new OrderDetail(orderId,date,customerName,itemCode,orderQty,total,balance);
    orderDetailsDB.push(orderDetail);
}
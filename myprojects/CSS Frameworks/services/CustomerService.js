/*Save Customer click event*/
$("#btnSaveCustomer").click(function () {
    saveCustomer();
    loadAllCustomers();
    clearAll();
})

function saveCustomer() {
    let customerId = $("#txtCusID").val();
    let customerName = $("#txtCusName").val();
    let customerAddress = $("#txtCusAddress").val();
    let customerSalary = $("#txtCusSalary").val();
    console.log(customerId)

    var customer = new Customer(customerId,customerName,customerAddress,customerSalary);
    customerDB.push(customer);
    console.log(customerDB.length);
}

// search customer
$("#btnSearch").click(function () {
    var searchID = $("#txtSearchCusID").val();

    var response = searchCustomer(searchID);
    if (response) {
        $("#customerTable").empty();
        let row = `<tr><td>${response.getCusId()}</td><td>${response.getCusName()}</td><td>${response.getCusAddress()}</td><td>${response.getCusSalary()}</td><td><button type='button'
                                     class='btn btn-default' id="btnDlt" onclick="deleteCustomer(this)">
                    <span class='glyphicon glyphicon-remove' /></button></td>
                    <td><button type='button' onclick="onEdit(this)"
                                     class='btn btn-default' id="btnEdit">
                    <span class='glyphicon glyphicon-edit' /></button></td></tr>`;
        $("#customerTable").append(row);

    }else{
        clearAll();
        alert("No Such a Customer");
    }
});

function searchCustomer(id) {
    for (let i = 0; i < customerDB.length; i++) {
        if (customerDB[i].getCusId()==id) {
            return customerDB[i];
        }
    }

}

/*Reset Customer*/
$("#btnResetCustomer").click(function () {
    loadAllCustomers();
})


function loadAllCustomers() {
    $("#customerTable").empty();
    for (var i = 0; i < customerDB.length; i++) {
        let row = `<tr><td>${customerDB[i].getCusId()}</td><td>${customerDB[i].getCusName()}</td><td>${customerDB[i].getCusAddress()}</td><td>${customerDB[i].getCusSalary()}</td><td><button type='button'
                                     class='btn btn-default' id="btnDlt" onclick="deleteCustomer(this)">
                    <span class='glyphicon glyphicon-remove' /></button></td>
                    <td ><button type='button' onclick="onEdit(this)"
                                     class='btn btn-default' id="btnEdit">
                    <span class='glyphicon glyphicon-edit' /></button></td></tr>`;
        $("#customerTable").append(row);
    }
}

function clearAll() {
    $("#txtCusID").val("");
    $("#txtCusName").val("");
    $("#txtCusAddress").val("");
    $("#txtCusSalary").val("");

    $("#txtCusID").focus();
}

/*Delete Customer*/
var selectedRow = null;
function deleteCustomer(td){
    $("#customerTable").on('click','#btnDlt',function(e){
        selectedRow = td.parentElement.parentElement;
        console.log(selectedRow.cells[0].innerHTML);

        var index=-1;
        for (var i = 0; i < customerDB.length; i++) {
            if (customerDB[i].getCusId() == $.trim(selectedRow.cells[0].innerHTML)) {
                index=i;
            }
        }
        customerDB.splice(index,1);
        loadAllCustomers();
        clearAll();
    });
}


var customerId = null;
/*Update Customer  */
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    customerId=selectedRow.cells[0].innerHTML;

    document.getElementById("txtCusID").value = selectedRow.cells[0].innerHTML;
    document.getElementById("txtCusName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("txtCusAddress").value = selectedRow.cells[2].innerHTML;
    document.getElementById("txtCusSalary").value = selectedRow.cells[3].innerHTML;

    $("#txtCusID").attr('disabled',true);
}

$("#btnUpdateCustomer").click(function () {
    updateCustomer();
})

function updateCustomer() {
    let customerName = $("#txtCusName").val();
    let customerAddress = $("#txtCusAddress").val();
    let customerSalary = $("#txtCusSalary").val();

    for (var i = 0; i < customerDB.length; i++) {
        if(customerId==customerDB[i].getCusId()){
            customerDB[i].setCusId(customerId);
            customerDB[i].setCusName(customerName);
            customerDB[i].setCusAddress(customerAddress);
            customerDB[i].setCusSalary(customerSalary);
        }
    }
    $("#txtCusID").attr('disabled',false);
    loadAllCustomers();
}

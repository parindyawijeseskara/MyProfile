function loadAllCusNames() {
    var ddlCusNames = document.getElementById("txtCustomerName");

    for (var i = 0; i < customerDB.length; i++) {
        var opt = customerDB[i].getCusName();
        var el = document.createElement("option");

        el.textContent = opt;
        el.value = opt;

        ddlCusNames.appendChild(el);
    }
}

function loadToPlaceOrderTable() {
    $("#placeOrderTable").empty();
    for (var i = 0; i < orderDetailsDB.length; i++) {
        let row = `<tr><td>${orderDetailsDB[i].getOrderId()}</td><td>${orderDetailsDB[i].getCustomerName()}</td><td>${orderDetailsDB[i].getItemCode()}</td><td>${orderDetailsDB[i].getDate()}</td><td>${orderDetailsDB[i].getOrderQty()}</td>
        <td>${orderDetailsDB[i].getTotal()}</td><td>${orderDetailsDB[i].getBalance()}</td></tr>`;
        $("#placeOrderTable").append(row);
    }
}


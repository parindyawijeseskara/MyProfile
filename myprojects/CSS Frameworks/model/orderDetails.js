function OrderDetail(orderId,date,customerName,itemCode,orderQty,total,balance) {
    var orderId = orderId;
    var date = date;
    var customerName = customerName;
    var itemCode = itemCode;
    var orderQty = orderQty;
    var total = total;
    var balance = balance;

    this.setOrderId = function (e) {
        orderId = e;
    }
    this.getOrderId = function () {
        return orderId;
    }

    this.setDate = function (e) {
        date = e;
    }
    this.getDate = function () {
        return date;
    }

    this.setCustomerName = function (e) {
        customerName = e;
    }
    this.getCustomerName = function () {
        return customerName;
    }

    this.setItemCode = function (e) {
        itemCode = e;
    }
    this.getItemCode = function () {
        return itemCode;
    }

    this.setOrderQty = function (e) {
        orderQty = e;
    }
    this.getOrderQty = function () {
        return orderQty;
    }

    this.setTotal = function (e) {
        total = e;
    }
    this.getTotal = function () {
        return total;
    }

    this.setBalance = function (e) {
        balance = e;
    }
    this.getBalance = function () {
        return balance;
    }
}
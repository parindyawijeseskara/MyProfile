function Orders(itemCode,itemDescription,itemUnitPrice,itemQty,itemTotal) {
    var itemCode= itemCode;
    var itemDescription=itemDescription;
    var itemUnitPrice = itemUnitPrice;
    var itemQty= itemQty;
    var itemTotal= itemTotal;

    this.setItemCode = function (e) {
        itemCode = e;
    }

    this.getItemCode = function () {
        return itemCode;
    }

    this.setItemDescrition = function (e) {
        itemDescription = e;
    }

    this.getItemDescription = function () {
        return itemDescription;
    }

    this.setItemUnitPrice = function (e) {
        itemUnitPrice = e;
    }

    this.getItemUnitPrice = function () {
        return itemUnitPrice;
    }

    this.setItemQty = function (e) {
        itemQty = e;
    }

    this.getItemQty = function () {
        return itemQty;
    }

    this.setItemTotal = function (e) {
        itemTotal = e;
    }

    this.getItemTotal = function () {
        return itemTotal;
    }
}

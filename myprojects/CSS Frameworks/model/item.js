function Item(code,description,qtyOnHand,unitPrice) {
    var code= code;
    var description=description;
    var qtyOnHand = qtyOnHand;
    var unitPrice= unitPrice;

    this.setCode = function (e) {
        code = e;
    }

    this.getCode = function () {
        return code;
    }

    this.setDescription = function (e) {
        description = e;
    }

    this.getDescription= function () {
        return description;
    }

    this.setQtyOnHand = function (e) {
        qtyOnHand = e;
    }

    this.getQtyOnHand = function () {
        return qtyOnHand;
    }

    this.setUnitPrice = function (e) {
        unitPrice = e;
    }

    this.getUnitPrice = function () {
        return unitPrice;
    }
}

function Customer(cusId,cusName,cusAddress,cusSalary) {
    var cusId= cusId;
    var cusName=cusName;
    var cusAddress = cusAddress;
    var cusSalary= cusSalary;

    this.setCusId = function (e) {
        cusId = e;
    }

    this.getCusId = function () {
        return cusId;
    }

    this.setCusName = function (e) {
        cusName = e;
    }
    this.getCusName = function () {
        return cusName;
    }

    this.setCusAddress = function (e) {
        cusAddress=e;
    }
    this.getCusAddress = function () {
        return cusAddress;
    }

    this.setCusSalary = function (e) {
        cusSalary=e;
    }
    this.getCusSalary = function () {
        return cusSalary;
    }
}
app.service("payService", function ($http) {

    this.createNative = function (outTradeNo) {
        return $http.get("pay/createNative.do?outTradeNo=" + outTradeNo + "&r=" + Math.random());

    };
});
var storeApp = angular.module('AngularStore', []).
 config(['$routeProvider', function($routeProvider){
 $routeProvider.
    when('/store',{
	 templateUrl: 'partials/store.htm',
	 controller: 'storeController'
 }).
    when('/products/:productSku',{
	 templateUrl: 'partials/product.htm',
	 controller: 'storeController'
 }).
    when('/cart',{
	 templateUrl: 'partials/shoppingCart.htm',
	 controller: 'storeController'
 }).
    otherwise({
	 redirectTo: '/store'
   });
 }]);
 
// create a data service that provides a store and shopping  //cat that will be shared by all views. factory always returns //a value

storeApp.factory("DataService",function(){
	var myStore = new store();
	var myCart = new shoppingCart("AngularStore");
	//you have to create merchant account for paypal and Google wallet
	// https://www.paypal.com/webapps/mpp/merchant
	 // https://developers.google.com/commerce/wallet/digital/training/getting-started/merchant-setup
	
	
	myCart.addCheckoutParameters("PayPal", "paypaluser@youremail.com");
	myCart.addCheckoutParameters("Google", "xxxxxxx",
		{
		   ship_method_name_1: "UPS Next Day Air",
            ship_method_price_1: "20.00",
            ship_method_currency_1: "&#8377;",
            ship_method_name_2: "UPS Ground",
            ship_method_price_2: "15.00",
            ship_method_currency_2: "&#8377;"
	}
	);
// return data object with store and cart
    return {
        store: myStore,
        cart: myCart
    };
});
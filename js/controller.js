// it contains two objects store which contains product // list and cart which contains shopping cart object

storeApp.controller('storeController', function StoreController($scope, $routeParams, DataService) {
	// get store and cart from service
	$scope.store = DataService.store;
	$scope.cart = DataService.cart;
	
	if($routeParams.productSku != null){
		$scope.product = $scope.store.getProduct($routeParams.productSku);
	}
});
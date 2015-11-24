var app = angular.module('myModule', []);

app.controller('myController', function($scope){
  $scope.foods = [ 
  	{name: 'pineapple', price: 3.25}, 
  	{name: 'onions', price: 0.79}, 
  	{name: 'chicken', price: 3.99},
  	{name: 'milk', price: 2.79},
  	{name: 'bread', price: 1.25},
  	{name: 'corn', price: 0.39} 
  ];

  $scope.addItem = function() {
  	$scope.foods.push({
  		name: $scope.newFoodName,
  		price: $scope.newFoodPrice
  	});
  	$scope.totalCost()
  	$scope.newFoodName = '';
  	$scope.newFoodPrice = '';
  };

  $scope.totalCost = function() {
  	total = 0;
  	$scope.foods.forEach(function(item) {
  		total += parseFloat(item.price);
  	});
  	$scope.total = total;
  };
});
(function() {
    'use strict';

    var shoppingList1 = [];

    var shoppingList2 = [
        //{
        // name: "Milk",
        // quantity: "2"
        // },
        // {
        // name: "Donuts",
        // quantity: "200"
        // },
        // {
        // name: "Cookies",
        // quantity: "300"
        // },
        // {
        // name: "Chocolate",
        // quantity: "5"
        //}
    ];

    angular.module('ShoppingListApp', [])
        .controller('ShoppingListController', ShoppingListController);

    ShoppingListController.$inject = ['$scope'];

    function ShoppingListController($scope) {
        $scope.shoppingList1 = shoppingList1;
        $scope.shoppingList2 = shoppingList2;
        $scope.boughtItems = [];
        $scope.addToList = function() {
            var newItem = {
                name: $scope.newItemName,
                quantity: $scope.newItemQuantity
            };

            $scope.shoppingList2.push(newItem);
        };

        $scope.albought = function(item) {
            var removedElementArr = $scope.shoppingList2.splice(item, 1);
            $scope.boughtItems.push(removedElementArr[0]);
            console.log($scope.boughtItems);

        }
    }


    //.controller('AlreadyBoughtController', AlreadyBoughtController);



})();
(function() {
    'use strict';

    angular.module('Asignment1', [])

        .controller('MyFirstController', function($scope, $window) {
            $scope.name = " ";

            $scope.sayHello = function() {
                var arrayList = [];
                arrayList = $scope.name.split(",");
                console.log(arrayList);

                

                if ($scope.name) {

                    if (arrayList.length < 4) {
                        $window.alert("Enjoy");

                    } 
                    else {
                        $window.alert("Too much!");
                    }
                } 

                else {
                    $window.alert("please enter lunch list");
                }
            }
        });
})();
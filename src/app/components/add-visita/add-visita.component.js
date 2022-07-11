var app = angular.module('miAplicacion', [])
app.controller('fechaController', function ($scope) {
     $scope.CurrentDate = new Date();
});
 
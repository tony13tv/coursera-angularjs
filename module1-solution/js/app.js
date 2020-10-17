(function() {
  'use strict';
  angular
  .module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.list = '';
    $scope.message = '';
    $scope.status = '';

    $scope.processInput = function() {
      if($scope.list == '') {
        $scope.status = 'danger';
        $scope.message = 'Please enter data first';
        return;
      }
      var splitted = $scope.list.split(',').filter(function(el) {return el.trim() != ""});
      $scope.status = 'success';
      if(splitted.length > 0 && splitted.length <= 3){
        $scope.message = 'Enjoy!';
      }else if(splitted.length > 3){
        $scope.message = 'Too much!';
      } else {
        $scope.status = 'danger';
        $scope.message = 'Please enter data first';
      }
    }
  }
})();

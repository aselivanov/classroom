angular.module('classroom.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ClassroomsCtrl', function($scope) {
  $scope.grid = [
    [{desk:true}, {desk:true}, {}, {desk:true}, {desk:true}, {}, {desk:true}, {desk:true}],
    [{desk:true}, {desk:true}, {}, {desk:true}, {desk:true}, {}, {desk:true}, {desk:true}],
    [{desk:true}, {desk:true}, {}, {desk:true}, {desk:true}, {}, {desk:true}, {desk:true}]
  ];
})

.controller('SettingsCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

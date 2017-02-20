angular.module('myApp').controller('GuestCtrl', function ($scope) {
  // $scope = {}

  $scope.guests = [
    { name: 'Christian', hatSize: 'L' },
    { name: 'Ben', hatSize: 'M' },
    { name: 'Daanish', hatSize: 'XS' }
  ]

  $scope.searchTerm = {}

  $scope.newGuestName = ''
  $scope.newGuestHatSize = ''

  $scope.addGuestName = function () {
    var newGuest = {
      name: $scope.newGuestName,
      hatSize: $scope.newGuestHatSize
    }

    $scope.guests.push(newGuest)
  }
})

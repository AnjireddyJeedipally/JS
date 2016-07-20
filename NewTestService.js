/**
 * Created by anji87543 on 19-07-2016.
 */

var newTest = angular.module('newTest',[]).controller('newController',function($scope)
{

    var emp= [
        {firstName:"Anji",lstName:"Reddy",sal:10000},
        {firstName:"Nag",lstName:"Mani",sal:20000},
        {firstName:"Sudeeksha",lstName:"Reddy",sal:40000},
        {firstName:"GopiNath",lstName:"Reddy",sal:50000}
    ];
    $scope.emp=emp;
    $scope.sortOrder=emp.firstName;
})
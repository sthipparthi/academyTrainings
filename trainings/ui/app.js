var myApp = angular.module("myApp", []);
myApp.service("EmployeeService", function() {
	var uid = 1;
	var employees = [{
		'id': 0,
		'name': 'Sravan Thipparthi',
		'email': 'Thipparthi.Sravan@Cognizant.com',
		'phone': '2019.199.999'
	}];

	this.save = function(employee) {
		if (employee.id == null) {
			employee.id = uid++;
			employees.push(employee);
		} else {
			for (var i in employees) {
				if (employees[i].id == employee.id) {
					employees[i] = employee;
				}
			}
		}
	};

	this.get = function(id) {
		for (var i in employees) {
			if (employees[i].id == id) {
				return employees[i];
			}
		}
	};

	this.delete = function(id) {
		for (var i in employees) {
			if (employees[i].id == id) {
				employees.splice(i, 1);
			}
		}
	};
	this.list = function() {
		return employees;
	};
});

myApp.controller("EmployeeController", function($scope, EmployeeService) {
	console.clear();

	$scope.isNewEmployeePage = false;
	$scope.title = "Go to Employees Enrolled List";

	$scope.employees = EmployeeService.list();

	$scope.saveEmployee = function() {
		console.log($scope.newemployee);
		if ($scope.newemployee == null || $scope.newemployee == angular.undefined)
			return;
		EmployeeService.save($scope.newemployee);
		$scope.newemployee = {};
	};
	$scope.cancel = function() {
		$scope.newemployee = {};
	};
	$scope.delete = function(id) {
		EmployeeService.delete(id);
		if ($scope.newemployee != angular.undefined && $scope.newemployee.id == id) {
			$scope.newemployee = {};
		}
	};
	$scope.edit = function(id) {
		$scope.newemployee = angular.copy(EmployeeService.get(id));
	};
	$scope.gotToEmployeeList = function() {
		if ($scope.title == "Go to Employees Enrolled List") {
			$scope.isNewEmployeePage = true;
			$scope.title = "Back to Employee Page";
		} else {
			$scope.isNewEmployeePage = false;
			$scope.title = "Go to Employees Enrolled List";
		}
	};
});
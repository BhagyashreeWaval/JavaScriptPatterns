
 //Singleton Pattern
 var EmployeeService = ( function() {
  
  var instance = null;
  var employee=function(name,age,sal){
  this.name=name;
  this.age=age;
  this.sal=sal;
  }
  
  // revealing module pattern that handles initialization of our new module
  function initializeNewModule() {
    var employees=[];
    function _addEmployee(name,age,sal) {
      employees.push(new employee(name,age,sal));
    }
    
    function _displayEmployees() {
    console.log("Displaying Employee Information");
      for(var i=0;i< employees.length;i++){
      		console.log("Name: "+employees[i].name+" Age: "+employees[i].age+" Salary: 		"+employees[i].sal);
          }
      
    }
    
    return {
      AddEmployee : _addEmployee,
      DisplayEmployees : _displayEmployees
    };
    
  }
  
  // handles the prevention of additional instantiations
  function getInstance() {
    if( ! instance ) {
      instance = new initializeNewModule();
    }
    return instance;
  }
  
  return {
    getInstance : getInstance
  };
  
} )();

// example usage
var hrDepartment1= EmployeeService.getInstance();
hrDepartment1.AddEmployee("Bhagyashree","22",900000); 
hrDepartment1.DisplayEmployees();
var hrDepartment2= EmployeeService.getInstance()
hrDepartment2.AddEmployee("Ajinkya","22",900000); 
hrDepartment2.DisplayEmployees();

//Output:
//Displaying Employee Information
//	Name: Bhagyashree Age: 22 Salary: 900000
//Displaying Employee Information
// Name: Bhagyashree Age: 22 Salary: 900000
// Name: Ajinkya Age: 22 Salary: 900000
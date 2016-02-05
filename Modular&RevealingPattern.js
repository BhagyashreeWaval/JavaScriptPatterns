//Modular pattern extended to Revealing Pattern
//Loosely Augmented Module
var Info = (function () {
  var _name="Bhagyashree";
  var _age="22";
  var _address="Pune";
  
 function _getName(){
 return _name;
 }
  
  function _getAge(){
 return _age;
 }
 
 function _getAddress(){
 return _address;
 }

	return{
  GetName:_getName,
  GetAge:_getAge,
  GetAddress:_getAddress
  }
  
  })(Info || {});
  
  
 console.log(Info.GetName());
 
 
 
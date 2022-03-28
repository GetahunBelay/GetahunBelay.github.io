"use strict";

/* global exports */

/* exports at end of file since exporting an object, which can only be referenced after definition

comment out when running in browser */

const Person = function() {};



Person.prototype.initialize = function(name, age){

this.name = name;

this.age = age;

};

Person.prototype.describe = function(){

return this.name + ", " + this.age + " years old.";

};


//////////////////////////////////////////////////////////////////////////////////////

const Teacher = function () {};



Teacher.prototype = new Person();

Teacher.prototype.teach = function (subject) {

return this.name + " is now teaching " + subject;

};



const john = new Teacher();



john.initialize("John", 25);

//console.log(john.learn("Inheritance"));
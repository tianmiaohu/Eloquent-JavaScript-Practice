var testObj = {p1: "v1", p2: "v2"};
console.log(testObj);
delete testObj.p1; //successful deletion
console.log(testObj);
var ObjConstructor = function() {};
ObjConstructor.prototype.p3 = "v3";
ObjConstructor.prototype.p4 = "v4";
var to1 = new ObjConstructor();
var to2 = new ObjConstructor();
console.log(to1.p3, to2.p4);
//fail, but raise no error
delete to1.p4;
delete to2.p3;
console.log(to1.p3, to2.p4);
//fail, but raise no error
delete to1.p3;
delete to2.p4;
console.log(to1.p3, to2.p4);
//successful deletion, to1.p3 is now undefined
delete ObjConstructor.prototype.p3;
console.log(to1.p3, to2.p4);

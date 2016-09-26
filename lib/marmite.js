var expect = {
  isTrue: function(assertionToCheck) {
    if(!assertionToCheck) {
      throw new Error ("Test failed: " + assertionToCheck + " is not truthy.");
    }
  }
}





// var testDescription;
//
// var describe = function(description, testCode) {
//   testDescription += description;
//   testCode();
// }
//
// var it = function(description, testCase) {
//   testDescription += description;
//   beforeEach();
//   if (toEqual) {
//     toEqual(this.toEqual(marmite._notes.length === 1))
//   }
// }
//
// var expect = function(testedFunction) {
//   testedFunction to be executed and result will be stored
// }
//
// expect.prototype = {
//   toEqual: function(assertionToCheck) {
//     if (!assertionToCheck) {
//       throw error
//     }
//     else {
//       Passed
//     }
//   }
// }
//
// var beforeEach = function(beforeCode) {
//   beforeCode();
// }

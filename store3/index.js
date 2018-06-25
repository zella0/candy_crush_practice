var store3 = require('./store3-data.js');

//()()()()() ACCESSING DATA ()()()()()\\

// Return Berry Bites data for store3 on January 7.
function accessesingData1() {
  return store3[1]["inventory sold"]["Berry Bites"];
}
// accessesingData1(store3);
// Return how many Mint Wafers were sold on January 9th
function accessesingData2(){
  return store3[3]["inventory sold"]["Mint Wafers"].quantity;
}

// Return total number of dates included in the dataset.
function accessesingData3(){
  return store3.length;
}

//()()()()() LOOPING OVER DATA ()()()()()\\

// Create a loop to iterate over the sale data from store3. Use this loop to return an array of dates contained in the sale data.
function loopingData1() {
  var arr = [];
  for(var i = 0; i < store3.length; i++){
    arr.push(store3[i].date)
  }
  return arr;
}

// Use `Object.keys()` to loop over the inventory sold for January 10th in store3. While iterating over the data, create an object containing each candy's name and price. Return the result.
// Example:
// {
//   'Dark Chocolate Crunchies': 1.30,
//   'Mint Wafers': 1.40,
//   ...
// }
function loopingData2() {
	var obj = store3[4]["inventory sold"];
  var objResult = {
  }
  for(let key in obj){
    objResult[key] = obj[key].cost;
  }
  return objResult
}

// Create a loop to iterate over the whole store3 variable to find out how many Peanut Butter Buttered Peanuts were sold over all dates. Return the result.
function loopingData3() {
  var resultAcc = 0;
  for(let key in store3){
    resultAcc += store3[key]["inventory sold"]["Peanut Butter Buttered Peanuts"].quantity;
  }
  return resultAcc;
}

//()()()()() CHALLENGE ()()()()()\\

// Determine how much money store3 made on January 9th and return the result fixed to two decimal points
function challenge1(){
  var result = 0;
  var objInventory = store3[3]["inventory sold"];
  for(let key in objInventory){
    // console.log(objInventory[key].quantity)
    // console.log(objInventory[key].cost)
   result += Number((objInventory[key].quantity * objInventory[key].cost));
  }
  result = result.toFixed(2);
  result = Number(result)
  return result;
}


module.exports = {
  accessesingData1,
  accessesingData2,
  accessesingData3,
  loopingData1,
  loopingData2,
  loopingData3,
  challenge1
}

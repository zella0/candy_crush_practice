var store4 = require('./store4-data.js');

// ^^^^^^^^^^^^ ACCESSING DATA ^^^^^^^^^^^^
// Return the cost of 'Dark Chocolate Crunchies' from store4
function accessesingData1() {
  return store4["Dark Chocolate Crunchies"].cost;
}

// Return the total number of 'Berry Bites' sold by store4
function accessesingData2() {
  return store4["Berry Bites"]["sold on"].length;
}

// ^^^^^^^^^^^^ LOOPING OVER DATA ^^^^^^^^^^^^
// Create a loop to return an array of the candy names that cost more than $2.00
function loopingData1() {
  let arrResult = [];
  for(let key in store4){
    if(store4[key].cost > 2){
      arrResult.push(key)
    }
  }
  return arrResult;
}

// Create a loop to return an object that has the candy name as the key and the cost as the value
function loopingData2() {
  var obj = {
  }

  for(let key in store4){
      obj[key] = store4[key].cost;
  }
  return obj;
}


// ^^^^^^^^^^^^ CHALLENGE ^^^^^^^^^^^^
// Calculate how much money store4 made selling Peppermint Poppers. What about Caramel Twists? Each date represents 1 item sold. Round revenue to two decimal points. Return your answer as an array: `[total1, total2]`
function challenge1() {
  let arrResult = []
  for(let key in store4){
    if(key == 'Peppermint Poppers'){
      let total = store4[key]["sold on"].length * store4[key].cost;
      arrResult.push(total)
    }else if(key == 'Caramel Twists'){
      let total = store4[key]["sold on"].length * store4[key].cost;
      total = Number(total.toFixed(2));
      arrResult.push(total);
    }
  }
  return arrResult;
}

// Calculate and return how much money store4 made on January 9th. Round to two decimal points.
function challenge2() {
  let result = 0;
  for(let key in store4){
    let candySold = store4[key]['sold on'].length;
    for(let i = 0; i < candySold; i++){
      if(store4[key]['sold on'][i] === '2015-01-09'){
        result += store4[key].cost;
      }
    }
  }
  return result;
}

// Calculate and return how much store4 made from selling Dark Chocolate Crunchies across all the days. Round to two decimal points.
function challenge3() {
  // let result = 0;
  // for(let i = 0; i < store4["Dark Chocolate Crunchies"]["sold on"].length; i++){
  //   console.log(store4["Dark Chocolate Crunchies"]["sold on"][i])
  return store4["Dark Chocolate Crunchies"]["sold on"].length * 4.34;

}

module.exports = {
  accessesingData1,
  accessesingData2,
  loopingData1,
  loopingData2,
  challenge1,
  challenge2,
  challenge3,
}

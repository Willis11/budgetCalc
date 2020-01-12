var exPerWeekDisplay = document.getElementById('expensePerWeek');
var exTotalDisplay = document.getElementById('totalExpense');
var moneyLeftInBudgetDisplay = document.getElementById('moneyLeftInBudget');


var budget = sessionStorage.getItem("Budget");
sessionStorage.removeItem("Budget");
var timePeriod = sessionStorage.getItem("budgetWeeks");
sessionStorage.removeItem("budgetWeeks");


var objectList = [];

for (var i in sessionStorage) {
  objectList.push(sessionStorage[i]);
}

for(var y = 0; y < 6; y++){
  objectList.pop();
}

var typeCostList = [];

for (var o in objectList){
  var typeCostVar = JSON.parse(objectList[o]);
  typeCostList.push(typeCostVar);
}

var typeList = [];
var costList = [];

for (var z in typeCostList){
  var type = typeCostList[z].type;
  var cost = typeCostList[z].cost;
  typeList.push(type);
  costList.push(cost);
}

var totalPerWeek = 0;
for (var f in costList){
  var value = parseInt(costList[f], 10);
  totalPerWeek += value;
}

exPerWeekDisplay.innerHTML = totalPerWeek;

var total = totalPerWeek * timePeriod;

exTotalDisplay.innerHTML = total;

if (budget >= total) {
  var moneyLeftInBudget = budget - total;
  moneyLeftInBudgetDisplay.innerHTML = moneyLeftInBudget;
}
else{
  moneyLeftInBudgetDisplay.innerHTML = "Budget is not enough to support costs";
}

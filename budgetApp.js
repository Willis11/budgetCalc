var expenseButton = document.getElementById('expense-button');
var expenseContainer = document.querySelector('.expense-input-container');
var calculateButton = document.getElementById('calculate');
var parentDiv = expenseButton.parentNode;
var expenseNumber = 0;
var itemCounter = 0;

sessionStorage.clear();

function addExpense(){
  expenseNumber++;
  if (expenseNumber <= 10) {
    var cln = expenseContainer.cloneNode(true);
    parentDiv.insertBefore(cln, expenseButton);
    cln.style.display = 'block';
  }

}

function calculate(){
  var budget = document.getElementById('budget-amount').value;
  sessionStorage.setItem('Budget', budget);

  var timePeriod = document.getElementById('time-period-amount').value;
  sessionStorage.setItem('budgetWeeks', timePeriod);

  var expenseTypes = document.getElementsByClassName("Type");
  var expenseCosts = document.getElementsByClassName("Cost");
  var objectList = [];
  for (var i = 0; i < expenseTypes.length; i++){
    if(typeof expenseTypes[i].value !== undefined && typeof expenseCosts[i].value !== undefined){
      var expenseObject = new Object();
      expenseObject.type = expenseTypes[i].value;
      expenseObject.cost = expenseCosts[i].value;
      objectList.push(expenseObject);
    }
  }
  objectList.pop();
  objectList.forEach(item => addToSession(item));
}

function addToSession(object){
  itemCounter += 1;
  var jsonObject = JSON.stringify(object);
  sessionStorage.setItem('Expense ' + itemCounter, jsonObject);
}

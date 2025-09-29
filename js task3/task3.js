// Task 3: Personal Budget Planner
let monthlyIncome = Number(prompt("Enter your monthly income:"));

// Get expenses for different categories
let rent = Number(prompt("Enter rent expense:"));
let groceries = Number(prompt("Enter groceries expense:"));
let transport = Number(prompt("Enter transport expense:"));

// Calculate total expenses
let totalExpenses = rent + groceries + transport;

// Calculate remaining balance
let remainingBalance = monthlyIncome - totalExpenses;

// Calculate percentage spent
let percentageSpent = Math.round((totalExpenses / monthlyIncome) * 100);

// Check budget status
let message;
if (totalExpenses > monthlyIncome) {
    message = "You are overspending!";
} else {
    message = "You are within budget.";
}

// Display budget summary
alert("Budget Summary:\n" +
      "Monthly Income: " + monthlyIncome + "\n" +
      "Total Expenses: " + totalExpenses + "\n" +
      "Remaining Balance: " + remainingBalance + "\n" +
      "Percentage Spent: " + percentageSpent + "%\n" +
      "Message: " + message);
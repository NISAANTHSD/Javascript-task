
// Student info object
var student = {
	name: "",
	birthYear: null,
    gender: "",
	city: ""
};

// Handle tab switching (show/hide sections)
var tabButtons = document.getElementsByClassName('tab-btn');
for (var i = 0; i < tabButtons.length; i++) {
	tabButtons[i].addEventListener('click', function() {
		// Remove 'active' from all buttons and tabs
		for (var j = 0; j < tabButtons.length; j++) {
			tabButtons[j].classList.remove('active');
		}
		var tabContents = document.getElementsByClassName('tab-content');
		for (var k = 0; k < tabContents.length; k++) {
			tabContents[k].classList.remove('active');
		}
		// Add 'active' to clicked button and its tab
		this.classList.add('active');
		var tabId = this.getAttribute('data-tab');
		document.getElementById(tabId).classList.add('active');
	});
}

// Profile form handling
var profileForm = document.getElementById('profileForm');
profileForm.addEventListener('submit', function(e) {
	e.preventDefault(); // Stop form from submitting
	var name = document.getElementById('name').value;
	var birthYear = parseInt(document.getElementById('birthYear').value);
    var gender = document.querySelector('input[name="gender"]:checked');
	var city = document.getElementById('city').value;
	var error = "";

	// Check for empty or invalid inputs
	if (!name) error += "Name is required.<br>";
	if (!birthYear || isNaN(birthYear) || birthYear < 1900 || birthYear > (new Date()).getFullYear()) error += "Valid birth year required.<br>";
    if (!gender) error += "Gender is required.<br>";
	if (!city) error += "City is required.<br>";

	if (error) {
		document.getElementById('profileResult').innerHTML = '<span class="error">' + error + '</span>';
		document.getElementById('jsonInfo').textContent = "";
		return;
	}

	// Save info to student object
	student.name = name;
	student.birthYear = birthYear;
    student.gender = gender ? gender.value : "";
	student.city = city;

    document.getElementById('profileResult').innerHTML = 'Profile saved!';
    document.getElementById('jsonInfo').textContent = JSON.stringify(student);
});

// Age Checker
function checkAge() {
	if (!student.birthYear) {
		document.getElementById('ageResult').innerHTML = '<span class="error">Please fill your profile first.</span>';
		return;
	}
	var currentYear = (new Date()).getFullYear();
	var age = currentYear - student.birthYear;
    document.getElementById('ageInfo').textContent = "Current Year: " + currentYear + "\nBirth Year: " + student.birthYear + "\nCalculated Age: " + age;
	var eligible = "";
	if (age >= 18) {
		eligible = "You are eligible (18+).";
	} else {
		eligible = "You are not eligible (under 18).";
	}
}

// Greeting
function showGreeting() {
	if (!student.name) {
		document.getElementById('greetingResult').innerHTML = '<span class="error">Please fill your profile first.</span>';
		return;
	}
	var hour = (new Date()).getHours();
	var greet = "";
	if (hour < 12) {
		greet = "Good morning";
	} else if (hour < 18) {
		greet = "Good afternoon";
	} else {
		greet = "Good evening";
	}
	// document.getElementById('greetingResult').innerHTML = greet + ', ' + student.name + '!';
    document.getElementById('greetingInfo').textContent =  greet + ", " + student.name + "!";
}

// Calculator
function calculate() {
	var n1 = document.getElementById('num1').value;
	var n2 = document.getElementById('num2').value;
	var op = document.getElementById('operation').value;
	var result = "";
	try {
		if (n1 === "" || n2 === "") throw "Both numbers are required.";
		var num1 = parseFloat(n1);
		var num2 = parseFloat(n2);
		if (isNaN(num1) || isNaN(num2)) throw "Invalid number input.";
		if (op === "add") {
			result = num1 + num2;
		} else if (op === "sub") {
			result = num1 - num2;
		} else if (op === "mul") {
			result = num1 * num2;
		} else if (op === "div") {
			if (num2 === 0) throw "Cannot divide by zero.";
			result = num1 / num2;
		} else {
			throw "Invalid operation.";
		}
		document.getElementById('calcInfo').innerHTML = 'Result: <b>' + result + '</b>';
	} catch (err) {
		document.getElementById('calcResult').innerHTML = '<span class="error">' + err + '</span>';
	}
}

// Quotes
var quotes = [
	"Believe in yourself and all that you are.",
	"The only way to do great work is to love what you do.",
	"Dream big and dare to fail.",
	"Don’t watch the clock; do what it does. Keep going.",
	"It does not matter how slowly you go as long as you do not stop.",
	"Everything you’ve ever wanted is on the other side of fear.",
];

function showQuote() {
	var idx = Math.floor(Math.random() * quotes.length); 
	document.getElementById('quoteInfo').innerHTML = quotes[idx];
}

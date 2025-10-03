// Questions pool (expanded)
// Each question has a text, options, and the correct answer index
var QUESTIONS = [
    {
        question: "Which number comes next in the sequence: 2, 4, 8, 16, ?",
        options: ["18", "24", "32", "20"],
        answer: 2 // 32
    },
    {
        question: "If you have 3 apples and you take away 2, how many do you have?",
        options: ["1", "2", "3", "0"],
        answer: 1 // 2 (the ones you took)
    },
    {
        question: "What will be the output of: console.log(3 + '3') in JavaScript?",
        options: ["6", "33", "Error", "undefined"],
        answer: 1 // '33'
    },
    {
        question: "Which is a valid variable name in JavaScript?",
        options: ["2name", "_name", "name-2", "name 2"],
        answer: 1 // _name
    },
    {
        question: "If x = 5, what is the value of x after: x += 3; ?",
        options: ["8", "2", "15", "5"],
        answer: 0 // 8
    },
    {
        question: "Which of these is a loop structure in JavaScript?",
        options: ["if", "for", "switch", "case"],
        answer: 1 // for
    },
    {
        question: "What is the result of: typeof [] in JavaScript?",
        options: ["'object'", "'array'", "'list'", "'undefined'"],
        answer: 0 // 'object'
    },
    {
        question: "Which is the correct way to write a comment in JavaScript?",
        options: ["<!-- comment -->", "// comment", "# comment", "** comment **"],
        answer: 1 // // comment
    },
    {
        question: "What does the '===' operator check in JavaScript?",
        options: ["Value only", "Type only", "Value and type", "None"],
        answer: 2 // Value and type
    },
    {
        question: "Which function returns a random number between 0 and 1 in JavaScript?",
        options: ["random()", "Math.random()", "getRandom()", "Number.random()"],
        answer: 1 // Math.random()
    }
];

// Get elements from the page
var registrationForm = document.getElementById('registration-form');
var registrationError = document.getElementById('registration-error');
var quizSection = document.getElementById('quiz-section');
var quizForm = document.getElementById('quiz-form');
var quizError = document.getElementById('quiz-error');
var submitQuizBtn = document.getElementById('submit-quiz');
var resultSection = document.getElementById('result-section');
var calculatingDiv = document.getElementById('calculating');
var resultSummary = document.getElementById('result-summary');
var jsonOutput = document.getElementById('json-output');

// Store user info and selected questions
var userData = {};
var selectedQuestions = [];

// When the user submits the registration form
registrationForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the page from reloading
    registrationError.textContent = '';

    // Get values from the form
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var age = parseInt(document.getElementById('age').value);

    // Validate inputs
    if (name === '' || email === '' || isNaN(age)) {
        registrationError.textContent = 'All fields are required.';
        return;
    }
    if (age < 12) {
        registrationError.textContent = 'Age must be 12 or above.';
        return;
    }

    // Store user data
    userData = {
        name: name,
        email: email,
        age: age
    };

    // Show the quiz
    showQuiz();
});

// Show the quiz questions
function showQuiz() {
    // Pick 5 random questions (no repeats)
    selectedQuestions = [];
    var usedIndexes = [];
    while (selectedQuestions.length < 5) {
        var randomIndex = Math.floor(Math.random() * QUESTIONS.length);
        if (usedIndexes.indexOf(randomIndex) === -1) {
            selectedQuestions.push(QUESTIONS[randomIndex]);
            usedIndexes.push(randomIndex);
        }
    }

    // Clear previous quiz
    quizForm.innerHTML = '';

    // Add each question to the form
    for (var i = 0; i < selectedQuestions.length; i++) {
        var q = selectedQuestions[i];
        var qDiv = document.createElement('div');
        qDiv.className = 'quiz-question card';

        // Question text
        var qTitle = document.createElement('div');
        qTitle.className = 'q-title';
        qTitle.textContent = 'Q' + (i + 1) + ': ' + q.question;
        qDiv.appendChild(qTitle);

        // Options
        for (var j = 0; j < q.options.length; j++) {
            var label = document.createElement('label');
            label.className = 'option-label';
            var radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'q' + i;
            radio.value = j;
            label.appendChild(radio);
            var span = document.createElement('span');
            span.textContent = q.options[j];
            label.appendChild(span);
            qDiv.appendChild(label);
        }
        quizForm.appendChild(qDiv);
    }

    submitQuizBtn.style.display = 'inline-block';
    quizSection.style.display = 'block';
    registrationForm.parentElement.style.display = 'none';
}

// When the user clicks the quiz submit button
submitQuizBtn.addEventListener('click', function() {
    quizError.textContent = '';
    var answers = [];

    // Check that all questions are answered
    for (var i = 0; i < 5; i++) {
        var radios = document.getElementsByName('q' + i);
        var selected = -1;
        for (var j = 0; j < radios.length; j++) {
            if (radios[j].checked) {
                selected = parseInt(radios[j].value);
            }
        }
        if (selected === -1) {
            quizError.textContent = 'Please answer all questions.';
            return;
        }
        answers.push(selected);
    }

    // Show calculating message
    calculatingDiv.style.display = 'block';
    resultSummary.innerHTML = '';
    jsonOutput.textContent = '';

    // Simulate server delay and calculate result
    simulateResult(answers, function(resultObj, error) {
        calculatingDiv.style.display = 'none';
        if (error) {
            quizError.textContent = error;
        } else {
            displayResult(resultObj);
        }
    });
});

// Simulate server delay and calculate result
function simulateResult(answers, callback) {
    // Wait 2-3 seconds
    var delay = 2000 + Math.random() * 1000;
    setTimeout(function() {
        try {
            // Calculate score
            var score = 0;
            for (var i = 0; i < 5; i++) {
                if (answers[i] === selectedQuestions[i].answer) {
                    score = score + 1;
                }
            }
            // Calculate percentage
            var percentage = (score / 5) * 100;
            // Assign grade
            var grade = '';
            if (percentage >= 80) {
                grade = 'A';
            } else if (percentage >= 60) {
                grade = 'B';
            } else if (percentage >= 40) {
                grade = 'C';
            } else {
                grade = 'D';
            }
            // Get timestamp in 12-hour format with AM/PM
            var now = new Date();
            var options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
            var timestamp = now.toLocaleString(undefined, options);
            // Create result object
            var resultObj = {
                name: userData.name,
                email: userData.email,
                age: userData.age,
                score: score,
                percentage: percentage,
                grade: grade,
                timestamp: timestamp
            };
            callback(resultObj, null);
        } catch (err) {
            callback(null, 'Error calculating result.');
        }
    }, delay);
}

// Show the result to the user
function displayResult(resultObj) {
    resultSection.style.display = 'block';
    quizSection.style.display = 'none';
    // Show result summary
    resultSummary.innerHTML =
        '<div class="result-card">' +
            '<div class="result-row"><span class="result-label">Name:</span> <span>' + resultObj.name + '</span></div>' +
            '<div class="result-row"><span class="result-label">Email:</span> <span>' + resultObj.email + '</span></div>' +
            '<div class="result-row"><span class="result-label">Age:</span> <span>' + resultObj.age + '</span></div>' +
            '<div class="result-row"><span class="result-label">Score:</span> <span>' + resultObj.score + ' / 5</span></div>' +
            '<div class="result-row"><span class="result-label">Percentage:</span> <span>' + resultObj.percentage.toFixed(2) + '%</span></div>' +
            '<div class="result-row"><span class="result-label">Grade:</span> <span>' + resultObj.grade + '</span></div>' +
            '<div class="result-row"><span class="result-label">Timestamp:</span> <span>' + resultObj.timestamp + '</span></div>' +
        '</div>';
    // Show JSON output
    jsonOutput.textContent = JSON.stringify(resultObj, null, 2);
}
// Task 2: Mini Quiz App
let score = 0;
let totalQuestions = 3;

// Question 1
let q1 = prompt("Question 1: What is the capital of France?\n1. Berlin\n2. Paris\n3. Madrid\n4. Rome\nEnter your answer (1-4):");
switch(Number(q1)) {
    case 2:
        score++;
        alert("Correct!");
        break;
    default:
        alert("Wrong! The correct answer is Paris.");
        break;
}

// Question 2
let q2 = prompt("Question 2: Which planet is known as the Red Planet?\n1. Mars\n2. Venus\n3. Jupiter\n4. Saturn\nEnter your answer (1-4):");
switch(Number(q2)) {
    case 1:
        score++;
        alert("Correct!");
        break;
    default:
        alert("Wrong! The correct answer is Mars.");
        break;
}

// Question 3
let q3 = prompt("Question 3: What is 5 + 7?\n1. 11\n2. 12\n3. 13\n4. 14\nEnter your answer (1-4):");
switch(Number(q3)) {
    case 2:
        score++;
        alert("Correct!");
        break;
    default:
        alert("Wrong! The correct answer is 12.");
        break;
}

// Display final score
alert("Quiz Completed!\nYour Final Score: " + score + "/" + totalQuestions);
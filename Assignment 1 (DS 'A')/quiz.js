function enter()
{
    onclick = function()
    {
        window.open("quizques.html");
    }
}

function submitQuiz() {
    let answers = {
        question1: "Hyper Text Markup Language",
        question2: "Cascading Style Sheets",
        question3: "JavaScript",
        question4: "a",
        question5: "JavaScript",
        question6: "img",
        question7: "color",
        question8: "#",
        question9: "const",
        question10: "GET"
    };

    let score = 0;

    for (let question in answers) {
        let selected = document.querySelector(
            'input[name="' + question + '"]:checked'
        );

        if (selected && selected.value === answers[question]) {
            score++;
        }
    }

    // Calculate grade
    let grade;

    if (score == 10) {
        grade = "A+";
    }
    else if (score == 9) {
        grade = "A";
    }
    else if (score == 8) {
        grade = "B+";
    }
    else if (score == 7) {
        grade = "B";
    }
    else if (score == 6) {
        grade = "C+";
    }
    else if (score == 5) {
        grade = "C";
    }
    else {
        grade = "F";
    }

    alert("Quiz completed!");

    // Send score and grade to result page
    window.open(
        "end.html?score=" + score + "&grade=" + grade,
        "_self"
    );
}
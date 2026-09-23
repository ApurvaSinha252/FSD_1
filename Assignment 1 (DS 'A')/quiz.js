function enter() 
{ 
    onclick = function() 
    { 
        window.open("quizques.html"); 
    } 
}
let answers = {
    0: "Hyper Text Markup Language",
    1: "Cascading Style Sheets",
    2: "JavaScript",
    3: "a",
    4: "JavaScript",
    5: "img",
    6: "color",
    7: "#",
    8: "const",
    9: "GET"
};

let currentQuestion = 0;
let selectedAnswers = {};
let timeLeft = 60;
let timer;

window.onload = function()
{
    let questions = document.querySelectorAll(".questionBox");

    let nextButton = document.getElementById("nextButton");
    let previousButton = document.getElementById("previousButton");
    let submitButton = document.getElementById("button");

    showQuestion();

    function showQuestion()
    {
        questions.forEach(function(question, index)
        {
            question.style.display = index === currentQuestion ? "block" : "none";
        });

        let options = questions[currentQuestion].querySelectorAll(".optionsingle");

        options.forEach(function(option, index)
        {
            option.classList.remove("selected");

            if (selectedAnswers[currentQuestion] === option.dataset.value)
            {
                option.classList.add("selected");
            }

            option.dataset.number = index + 1;
        });

        if (currentQuestion === 0)
        {
            previousButton.style.display = "none";
        }
        else
        {
            previousButton.style.display = "block";
        }

        if (currentQuestion === questions.length - 1)
        {
            nextButton.style.display = "none";
            submitButton.style.display = "block";
        }
        else
        {
            nextButton.style.display = "block";
            submitButton.style.display = "none";
        }

        timeLeft = 60;

        clearInterval(timer);

        updateTimer();

        startTimer();
    }

    function updateTimer()
    {
        let seconds = timeLeft;

        if (seconds < 10)
        {
            seconds = "0" + seconds;
        }

        document.getElementById("timer").innerHTML =
            "Time Left: 00:" + seconds;
    }

    function startTimer()
    {
        timer = setInterval(function()
        {
            timeLeft--;

            updateTimer();

            if (timeLeft <= 0)
            {
                clearInterval(timer);
                nextQuestion();
            }

        }, 1000);
    }

    function selectOption(number)
    {
        let options = questions[currentQuestion].querySelectorAll(".optionsingle");

        if (number < 0 || number >= options.length)
        {
            return;
        }

        options.forEach(function(option)
        {
            option.classList.remove("selected");
        });

        options[number].classList.add("selected");

        selectedAnswers[currentQuestion] = options[number].dataset.value;
    }

    function nextQuestion()
    {
        clearInterval(timer);

        if (currentQuestion < questions.length - 1)
        {
            currentQuestion++;
            showQuestion();
        }
        else
        {
            submitQuiz();
        }
    }

    function previousQuestion()
    {
        clearInterval(timer);

        if (currentQuestion > 0)
        {
            currentQuestion--;
            showQuestion();
        }
    }

    function submitQuiz()
    {
        clearInterval(timer);

        let score = 0;

        for (let question in answers)
        {
            if (selectedAnswers[question] === answers[question])
            {
                score++;
            }
        }

        let grade;

        if (score == 10)
        {
            grade = "A+";
        }
        else if (score == 9)
        {
            grade = "A";
        }
        else if (score == 8)
        {
            grade = "B+";
        }
        else if (score == 7)
        {
            grade = "B";
        }
        else if (score == 6)
        {
            grade = "C+";
        }
        else if (score == 5)
        {
            grade = "C";
        }
        else
        {
            grade = "F";
        }

        window.open(
            "end.html?score=" + score + "&grade=" + grade,
            "_self"
        );
    }

    document.querySelectorAll(".optionsingle").forEach(function(option)
    {
        option.addEventListener("click", function()
        {
            let options = questions[currentQuestion].querySelectorAll(".optionsingle");

            options.forEach(function(item)
            {
                item.classList.remove("selected");
            });

            this.classList.add("selected");

            selectedAnswers[currentQuestion] = this.dataset.value;
        });
    });

    nextButton.onclick = function()
    {
        nextQuestion();
    };

    previousButton.onclick = function()
    {
        previousQuestion();
    };

    submitButton.onclick = function()
    {
        submitQuiz();
    };

    document.addEventListener("keydown", function(event)
    {
        if (event.key === "ArrowDown")
        {
            event.preventDefault();

            let options = questions[currentQuestion].querySelectorAll(".optionsingle");

            let currentIndex = -1;

            options.forEach(function(option, index)
            {
                if (option.classList.contains("selected"))
                {
                    currentIndex = index;
                }
            });

            if (currentIndex < options.length - 1)
            {
                selectOption(currentIndex + 1);
            }
            else
            {
                selectOption(0);
            }
        }

        else if (event.key === "ArrowUp")
        {
            event.preventDefault();

            let options = questions[currentQuestion].querySelectorAll(".optionsingle");

            let currentIndex = -1;

            options.forEach(function(option, index)
            {
                if (option.classList.contains("selected"))
                {
                    currentIndex = index;
                }
            });

            if (currentIndex <= 0)
            {
                selectOption(options.length - 1);
            }
            else
            {
                selectOption(currentIndex - 1);
            }
        }

        else if (event.key === "ArrowRight" || event.key.toLowerCase() === "n")
        {
            event.preventDefault();
            nextQuestion();
        }

        else if (event.key === "ArrowLeft" || event.key.toLowerCase() === "p")
        {
            event.preventDefault();
            previousQuestion();
        }

        else if (event.key === "Enter" || event.key === " ")
        {
            event.preventDefault();

            let options = questions[currentQuestion].querySelectorAll(".optionsingle");

            if (selectedAnswers[currentQuestion])
            {
                nextQuestion();
            }
            else
            {
                selectOption(0);
            }
        }

        else if (["1", "2", "3", "4"].includes(event.key))
        {
            selectOption(parseInt(event.key) - 1);
        }
    });
};
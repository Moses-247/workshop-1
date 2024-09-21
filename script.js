document.getElementById('submit').addEventListener('click', function() {
    const quizForm = document.getElementById('quiz-form');
    const formData = new FormData(quizForm);
    const answers = {
        question1: 'c',
        question2: 'b',
        question3: 'b'
    };
    let score = 0;

    for (let [question, answer] of formData.entries()) {
        if (answer === answers[question]) {
            score++;
        }
    }

    alert(`You got ${score} out of ${Object.keys(answers).length} correct!`);
});

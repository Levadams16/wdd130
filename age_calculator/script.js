// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    const calculateBtn = document.getElementById('calculateBtn');

    calculateBtn.addEventListener('click', function () {
        calculateAge();
    });
});

function calculateAge() {
    const birthdayInput = document.getElementById('birthday').value;

    if (!birthdayInput) {
        document.getElementById('result').textContent = "Please enter your birthday.";
        return;
    }

    const birthday = new Date(birthdayInput);
    const today = new Date();

    let age = today.getFullYear() - birthday.getFullYear();
    const monthDiff = today.getMonth() - birthday.getMonth();
    const dayDiff = today.getDate() - birthday.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    document.getElementById('result').textContent = `You are ${age} years old.`;
}

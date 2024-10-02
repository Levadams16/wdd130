document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addButton');
    
    addButton.addEventListener('click', function() {
        const number1 = parseFloat(document.getElementById('number1').value);
        const number2 = parseFloat(document.getElementById('number2').value);

        // Check if both inputs are numbers
        if (!isNaN(number1) && !isNaN(number2)) {
            const sum = number1 + number2;
            document.getElementById('result').textContent = `The sum is: ${sum}`;
        } else {
            document.getElementById('result').textContent = "Please enter valid numbers.";
        }
    });
});

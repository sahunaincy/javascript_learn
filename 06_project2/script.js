const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const weight = document.querySelector('#weight').value;
    const height = document.querySelector('#height').value;
    const result = document.querySelector('#result');
    const weightGuide = document.querySelector('#weight-guide');
    if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = 'Please enter a valid weight';
    } else if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = 'Please enter a valid height';
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>Your BMI is: ${bmi}</span>`;
    }
    const ans = (weight / ((height * height) / 10000)).toFixed(2);;
    if (ans <= 18.4) {
        weightGuide.innerHTML = 'Underweight';
    } else if (ans >= 18.5 && ans <= 24.9) {
        weightGuide.innerHTML = 'Normal weight';
    } else if (ans >= 25 && ans <= 29.9) {
        weightGuide.innerHTML = 'Overweight';
    } else if (ans >= 30) {
        weightGuide.innerHTML = 'Obesity';
    }
});
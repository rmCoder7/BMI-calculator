function calculateBMI() {
    // Get the weight and height values from the input fields
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    // Validate the inputs
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Please enter valid weight and height values.');
        return;
    }

    // Calculate BMI
    const bmi = weight / (height * height);

    // Display the BMI value
    document.getElementById('bmiValue').textContent = bmi.toFixed(2);
}

function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function radiansToDegrees(radians) {
    return radians * (180 / Math.PI);
}

document.getElementById('calculate').addEventListener('click', function () {
    const angleInput = document.getElementById('angle');
    const radiansInput = document.getElementById('radians');
    const trigFunctionSelect = document.getElementById('trig-function');
    const trigValueInput = document.getElementById('trig-value');
    const result = document.getElementById('result');

    let angle = parseFloat(angleInput.value);
    let radians = parseFloat(radiansInput.value);
    const trigFunction = trigFunctionSelect.value;
    const trigValue = parseFloat(trigValueInput.value);

    if (isNaN(trigValue)) {
        if (!isNaN(angle)) {
            radians = degreesToRadians(angle);
        } else if (!isNaN(radians)) {
           
            angle = radiansToDegrees(radians);
        } else {
            result.textContent = 'Please enter a valid angle, radians or trigonometric value.';
            return;
        }

        let trigResult;
        switch (trigFunction) {
            case 'sin':
                trigResult = Math.sin(radians);
                break;
            case 'cos':
                trigResult = Math.cos(radians);
                break;
            case 'tan':
                trigResult = Math.tan(radians);
                break;
            default:
                result.textContent = 'Invalid trigonometric function.';
                return;
        }

        angleInput.value = angle.toFixed(2);
        radiansInput.value = radians.toFixed(2);
        trigValueInput.value = trigResult.toFixed(2);
    } else {
        let calculatedRadians;
        switch (trigFunction) {
            case 'sin':
                calculatedRadians = Math.asin(trigValue);
                break;
            case 'cos':
                calculatedRadians = Math.acos(trigValue);
                break;
            case 'tan':
                calculatedRadians = Math.atan(trigValue);
                break;
            default:
                result.textContent = 'Invalid trigonometric function.';
                return;
        }

        const calculatedDegrees = radiansToDegrees(calculatedRadians);
        angleInput.value = calculatedDegrees.toFixed(2);
        radiansInput.value = calculatedRadians.toFixed(2);
    }

    result.textContent = '';
});

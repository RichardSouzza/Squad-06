export function assignInputFunctions() {
    function inputFormat(input) {
        input.value = input.value.replace('-', '').slice(0, 1);
    }
    function assignFunction(input, nextElement) {
        input.addEventListener('keyup', () => {
            inputFormat(input)
            if (input.value) {
                nextElement.focus();
            }
        });
    }
    const submitButton = document.getElementById('submit');
    const inputs = document.getElementsByClassName('pin-input');
    const pin1 = inputs[0];
    const pin2 = inputs[1];
    const pin3 = inputs[2];
    const pin4 = inputs[3];
    assignFunction(pin1, pin2);
    assignFunction(pin2, pin3);
    assignFunction(pin3, pin4);
    assignFunction(pin4, submitButton);
}

export function generatePIN() {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    const c = Math.floor(Math.random() * 10);
    const d = Math.floor(Math.random() * 10);
    const pin = `${a}${b}${c}${d}`;
    return pin;
}

export function verifyPIN(enteredPIN, targetPIN) {
    return enteredPIN === targetPIN;
}

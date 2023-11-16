export function addMask(input) {
    let x = input.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);
    input.value = !x[2] ? x[1] : x[1] + '.' + x[2] + (x[3] ? '.' : '') + x[3] + (x[4] ? '/' : x[4]) + x[4] + (x[5] ? '-' + x[5] : '');

    if (input.value.length < 15) {
        x = input.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);
        input.value = !x[2] ? x[1] : x[1] + '.' + x[2] + (x[3] ? '.' : '') + x[3] + (x[4] ? '-' + x[4] : '');
    }
}

export function validateID(id) {
    const invalidCPF =  '000.000.000-00';
    const invalidCNPJ =  '00.000.000/0000-00';
    return ![invalidCPF, invalidCNPJ].includes(id);
}

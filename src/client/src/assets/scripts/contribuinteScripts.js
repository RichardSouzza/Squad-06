export function strToDate(dateString) {
    const [day, month, year] = dateString.split('/');
    let date = new Date(`${year}-${month}-${day}`);
    date.setDate(date.getDate() + 1);
    return date;
}

export function dateToStr(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

export function dateToStrYMD(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export function dateStrToDMY(dateString) {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
}

export function strToFloat(floatString) {
    return parseFloat(floatString.replace('.', '').replace(',', '.'));
}

export function floatToStr(float) {
    const options = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    };
    return float.toLocaleString('pt-BR', options);
}

export function filterByNearDueDate(array) {
    const today = new Date();
    const compareDates = (dueDate) => dueDate >= today;
    return array.filter(item => compareDates(strToDate(item.due_date)));
}

export function filterByExpired(array) {
    const today = new Date();
    const compareDates = (dueDate) => dueDate < today;
    return array.filter(item => compareDates(strToDate(item.due_date)));
}

export function sortByName(array, key, order, altKey) {
    function compareStr(a, b) {
        const strA = a[key].toUpperCase();
        const strB = b[key].toUpperCase();
        if (strA < strB) {
            return -1;
        }
        if (strA > strB) {
            return 1;
        }
        if (altKey !== undefined) {
            const altA = a[altKey].toUpperCase();
            const altB = b[altKey].toUpperCase();
            if (altA < altB) {
                return -1;
            }
            if (altA > altB) {
                return 1;
            }
        }
        return 0;
    }
    const sortedArray = array.sort(compareStr);
    if (order === 'desc') {
        sortedArray.reverse();
    }
    return sortedArray;
}

export function sortByDate(array, key, order) {
    const sortedArray = array.sort((a, b) => strToDate(a[key]) - strToDate(b[key]));
    if (order === 'desc') {
        sortedArray.reverse();
    }
    return sortedArray;
}

export function sortByAmount(array, key, order) {
    const sortedArray = array.sort((a, b) => strToFloat(a[key]) - strToFloat(b[key]));
    if (order === 'desc') {
        sortedArray.reverse();
    }
    return sortedArray;
}

export const months = {
    1: 'Janeiro',
    2: 'Fevereiro',
    3: 'Março',
    4: 'Abril',
    5: 'Maio',
    6: 'Junho',
    7: 'Julho',
    8: 'Agosto',
    9: 'Setembro',
    10: 'Outubro',
    11: 'Novembro',
    12: 'Dezembro'
};

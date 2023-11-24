export function addRedirects() {
    const tableAnchors = document.getElementsByClassName('table-anchor');
    for (let anchor of tableAnchors) {
        anchor.addEventListener('click', () => { window.location.href = 'client/dam' });
    }
}

export function strToDate(dateString) {
    const [day, month, year] = dateString.split('/');
    let date = new Date(`${year}-${month}-${day}`);
    date.setDate(date.getDate() + 1);
    return date;
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
    function strToFloat(floatString) {
        return parseFloat(floatString.replace('.', '').replace(',', '.'));
    }
    const sortedArray = array.sort((a, b) => strToFloat(a[key]) - strToFloat(b[key]));
    if (order === 'desc') {
        sortedArray.reverse();
    }
    return sortedArray;
}

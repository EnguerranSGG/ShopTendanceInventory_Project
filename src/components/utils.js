export const isEmpty = (value) => {
    return (
        value === undefined || 
        value === null || 
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0))
}

export const isPositiveNumber = (value) => {
    return parseFloat(value) > 0;
};

export function focus () {
    const newProduct = document.querySelector('.newProduct');
    newProduct.className = 'addProduct';
}

export function close () {
    const newProduct = document.querySelector('.addProduct');
    newProduct.className = 'newProduct';
}


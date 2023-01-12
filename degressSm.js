init();

function conversionFunc () {
    
    const degree = parseFloat(document.querySelector('#degree').value);
    const minute = parseFloat(document.querySelector('#minute').value);
    const seconds = parseFloat(document.querySelector('#seconds').value);

    if (isNaN(degree) === false && isNaN(minute) === false && isNaN(seconds) === false) {
    const result = degree + (minute/60) + (seconds / 3600);

    document.querySelector('#result').value = `${parseFloat(result.toFixed(3))}\u00b0`;   
    } else {
        alert('Put in a number')
    }
};

function resetFunc () {
    document.querySelector('#degree').value = '';
    document.querySelector('#minute').value = '';
    document.querySelector('#seconds').value = '';
    document.querySelector('#result').value = '';
};

function init () {
    document.querySelector('#convert').addEventListener('click', conversionFunc);
    document.querySelector('#reset').addEventListener('click', resetFunc);
}
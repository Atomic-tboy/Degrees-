init();

function conversionFunc () {
    console.log('Conversion starting...');
    const degreeInput = document.querySelector('#degree').value;

    if (isNaN(degreeInput)) {
        alert('Input a Number')
    } else {
        const result = calculations(parseFloat(degreeInput));

        document.querySelector('#result').value = result;
    }
    

    

}

function calculations (no) {
    let deci = no % 1
    let num1 = no - (deci);

    let num2 = deci * 60;

    let deci2 = num2 % 1;
    let num3 = num2 - deci2;
    let num4 = parseFloat((deci2 * 60).toFixed(2));

    return `${num1}\u00B0${num3}'${num4}"`;
}

function resetFunc () {
    document.querySelector('#degree').value = '';
    document.querySelector('#result').value = '';
}

function init () {
    document.querySelector('#convert').addEventListener('click', conversionFunc);
    document.querySelector('#reset').addEventListener('click', resetFunc);
}

function exercise2() {
    const number = Number(document.querySelector('#input2').value)
    const resultDiv = document.querySelector('result2');
    let result = '';
    for (let i = 1; i <=10; i++) {
        result += '${number} x ${i} = ${number * i} <br>';

    }

    resultDiv.innerHTML = result;
}
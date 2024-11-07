

function soma(){
    const n1 = Number(document.querySelector("#numero1").value);
    const n2 = Number(document.querySelector("#numero2").value);
    const resultadoInput = document.querySelector("#resultado");
    const soma = somar(n1, n2);
    console.log(soma)
    resultadoInput.value = `A soma é ${soma}.`
}
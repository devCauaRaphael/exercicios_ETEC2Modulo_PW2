function calculoIMC() {

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const sexo = document.getElementById('sexo').value;

    if (isNaN(peso) || isNaN(altura) || sexo == " " || altura == "" || peso == "") {
            alert('Por favor, preencha todos os campos corretamente.');
        }

      else{
        const resultado = (peso / (altura * altura)).toFixed(2);

        if (sexo == 'masculino') {
            if (resultado < 18.5) {
                document.getElementById('resultado').value = `Seu IMC é ${resultado}. Você está abaixo do peso e precisa ganhar mais ${(18.5 - resultado).toFixed(2)} kg.`;
            }
                else if (resultado >= 18.5 && resultado <= 24.9) {
                    document.getElementById('resultado').value = `Seu IMC é ${resultado}. Você está no peso ideal.`;
                } else if (resultado >= 25 && resultado <= 29.9) {
                    document.getElementById('resultado').value = `Seu IMC é ${resultado}. Você está com sobrepeso e precisa perder ${(resultado - 25).toFixed(2)} kg.`;
                } else if (resultado >= 30) {
                    document.getElementById('resultado').value = `Seu IMC é ${resultado}. Você está com obesidade e precisa perder ${(resultado - 30).toFixed(2)} kg.`;
                }
      }

      if (sexo ==='feminino') {
        if (resultado < 19.1) {
            document.getElementById('resultado').value = `Seu IMC é ${resultado}. Você está abaixo do peso e precisa ganhar mais ${(19.1 - resultado).toFixed(2)} kg.`;
        }
            else if (resultado >= 19.1 && resultado <= 25.8) {
                document.getElementById('resultado').value = `Seu IMC é ${resultado}. Você está no peso ideal.`;                
            } else if (resultado >= 25.9 && resultado <= 31.1) {
                document.getElementById('resultado').value = `Seu IMC é ${resultado}. Você está com sobrepeso e precisa perder ${(resultado - 25.9).toFixed(2)} kg.`;
            } else if (resultado >= 31.2) {
                document.getElementById('resultado').value = `Seu IMC é ${resultado}. Você está com obesidade e precisa perder ${(resultado - 31.2).toFixed(2)} kg.`;
            }
        }
    }
}

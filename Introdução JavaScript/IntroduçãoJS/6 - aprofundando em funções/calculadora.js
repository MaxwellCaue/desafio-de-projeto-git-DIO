function calculadora() {
    const operacao = Number(prompt('Escolha a operação:\n 1 - Soma (+)\n 2 - Subtração (-) \n 3 - Multplicação(*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potênciação (**) '));

    if (!operacao || operacao >= 7 || operacao <= 0) {
        alert('Erro - operação invalida');
        calculadora();
    } else {

        let n1 = Number(prompt('Insira o primeiro Valor'));
        let n2 = Number(prompt('Insira o segundo Valor'));
        let resultado;

        if (!n1 || !n2) {
            alert('parametros invalidos')
            calculadora();
        } else {
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);//entre crases pra mostrar o conteudo da variavel
                novaOperacao();
            }
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);//entre crases pra mostrar o conteudo da variavel
                novaOperacao();
            }
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);//entre crases pra mostrar o conteudo da variavel
                novaOperacao();
            }
            function divisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);//entre crases pra mostrar o conteudo da variavel
                novaOperacao();
            }
            function divisaoInteira() {
                resultado = n1 % n2;
                alert(`O reto da divisão entre ${n1} e ${n2} é: ${resultado}`);//entre crases pra mostrar o conteudo da variavel
                novaOperacao();
            }
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado à ${n2} é: ${resultado}`);//entre crases pra mostrar o conteudo da variavel
                novaOperacao();
            }

            function novaOperacao() {
                let opcao = prompt('deseja realizar nova operação? \n 1- sim\n 2- não');
                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('ATE MAIS!');
                } else {
                    alert('OPÇÃO INVALIDA')
                    novaOperacao();
                }
            }
        }
        if (operacao == 1) {
            soma();
        } else if (operacao == 2) {
            subtracao();
        } else if (operacao == 3) {
            multiplicacao();
        } else if (operacao == 4) {
            divisaoReal();
        } else if (operacao == 5) {
            divisaoInteira();
        } else if (operacao == 6) {
            potenciacao();
        }
    }
}
calculadora();

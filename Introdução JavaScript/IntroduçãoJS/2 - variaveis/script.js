// tipos primitivos

/* //boolean
var VouF = false;
console.log(VouF);
console.log(typeof(VouF));// typeof PRA MOSTRAR TIPO DE VARIAVEL

//NUMBER
var NumeroQualquer = 1;
console.log(NumeroQualquer);
console.log(typeof(NumeroQualquer));

//STRING
var nome = 'Max'
console.log(nome);
console.log(typeof(nome)); */

/* var variavel; //sem decrarar valor por padrão é null
let variavel2 = 'Max'// pra escopo local

const constante = 'Max' //uma VARIAVEL DE TIPO CONSTANTE, deve seer atribuido sempre algum valor, E ESSE VALOR NÃO PODE SER ALTERADO!
 */
//ESCOPO
//escopo global
var escopoGlobal = 'global';
console.log(escopoGlobal);
//escopo local
function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}
//fim do escopo local

escopoLocal();// chamando a função



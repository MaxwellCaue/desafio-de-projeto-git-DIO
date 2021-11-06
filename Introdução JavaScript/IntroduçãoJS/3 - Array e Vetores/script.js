// oq são vetores ou arrays

// como declarar um array
/* let array = ['string', 1, true]
console.log(array); */

// pode guardar varios tipos de dados
let array = ['string', 1, true, ['array1'], ['array2'],['array3'],['array4']];
/* console.log(array); */
//pra pegar a posição especifica do array, nesse exemplo a primeira posição
/* console.log(array[0]); */

//forEach()
/* array.forEach(function(item,index){console.log(item, index)}) */

//push() -- adiciona novo item no final da array
/* array.push('novo item');
console.log(array); */

//pop -- apaga ultimo item da array
/* array.pop();
console.log(array); */

//shift -- apaga primeiro item da array
/* array.shift();
console.log(array);
 */

//unshift -- adiciona item no inicio da array
/* array.unshift('novo item no inicio');
console.log(array); */

//indexOf --- mostra qual o indice de determinado valor, nesse exemplo o valor TRUE que esta no indice 2
/* console.log(array.indexOf(true));
 */

//splice --- remove ou substitui os indices
/* array.splice(0,3);//removendo itens do indice 0 ao 3
console.log(array); */

// slice --- retorna uma parte da array, nesse exemplo mostra só itens 0,1,2,3 da array
/* let novoArray = array.slice(0,3);
console.log(novoArray);
 */

// OBJETOS

let object = {string:'string', Number: 1, Boolean: true, array:["array"], objectInterno:{ObjectInterno:'objeto Interno'}};
//console.log(object);
console.log(object.objectInterno);

//desestruturação de objeto 
//FORMA 1

/* var string = object.string
console.log(string);

var arrayInterna = object.array;
console.log(arrayInterna); */

// FORMA 2
var {string, Boolean, objectInterno} = object;
console.log(string, Boolean, objectInterno);
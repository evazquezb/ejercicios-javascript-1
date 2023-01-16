

/********************************************************************************/
//Dado un arreglo de números donde cada uno representa una cantidad de bloques  //
//en manera vertical, determine la cantidad de agua atrapada entre los bloques  //
//////////////////////////////////////////////////////////////////////////////////
//Arreglo usado en el ejemplo : [2,0,2,5,7,1,2,1,1,5,1,3,3] Resultado : 19      //
/********************************************************************************/
/*[null, null, null, null, '██', null, null, null, null, null, null, null, null]*/
/*[null, null, null, null, '██', null, null, null, null, null, null, null, null]*/
/*[null, null, null, '██', '██', '~~', '~~', '~~', '~~', '██', null, null, null]*/
/*[null, null, null, '██', '██', '~~', '~~', '~~', '~~', '██', null, null, null]*/
/*[null, null, null, '██', '██', '~~', '~~', '~~', '~~', '██', '~~', '██', '██']*/
/*['██', '~~', '██', '██', '██', '~~', '██', '~~', '~~', '██', '~~', '██', '██']*/
/*['██', '~~', '██', '██', '██', '██', '██', '██', '██', '██', '██', '██', '██']*/
/********************************************************************************/

//funcion para obtener el primer elemento mayor o igual al elemento [0] de un 
//arreglo o segmento de arreglo recibido.
const bigger= arr => {
    let big = 0 ;
    for(let i = 1; i<arr.length; i++) if(arr[i]>=arr[big]) return i; 
    return bigger(arr.reverse());
}
//función que determina la cantidad de agua atrapada entre los bloques
function water(arr) {
    if(arr.length==1) return 0;
    const big = bigger(arr);
    if(big<2) return water([...arr.slice(big)]); 
    let total = (big-1) * arr[0];
    for(let i = 1; i<big;i++) arr[i] ? total-=arr[i] : null;
    return total + water([...arr.slice(big)]);
}
console.log(water([2,0,2,5,7,1,2,1,1,5,1,3,3]));
/********************************************************************************/
//*BIGGER -hace un recorrido de izquierda a derecha
//*-retorna el indice del primer elemento mayor o igual al elemento [0];
//*-si no encuentra uno, gira el arreglo
//*y lo envía como parametro nuevamente a bigger; 
//
//*WATER -cuando el arreglo recibido tiene un solo elemento retorna cero
//*-ejecuta bigger enviando el array recibido como parametro
//*-usa el indice recibido para calcular el total de espacios entre el elemento
//*con dicho indice y el [0], ese espacio representa agua
//*-si es menor a dos significa que no hay espacio ni agua atrapada por lo que
//*-ejecutamos water con otro segmento diferente del array
//*-calculamos el total de agua entre espacios
//*-resta de la cantidad de agua las posiciones con bloques, haciendo un recorrido
//*de izquierda a derecha.
//*-retorna el total más(+) la función ejecutada nuevamente, enviando como parámetro
//*un segmento del array que no incluya el segmento ya procesado;
/********************************************************************************/



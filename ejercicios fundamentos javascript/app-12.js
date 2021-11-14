/*

    Ordenar por score
    
    - Este ejercicio consiste en ordenar por 'score' de menor a mayor un arreglo de usuarios.

*/

function orderUsersByScore(users) {
    //declaro la varibale data que contiene el objeto.
    let data = users;

    //Con sort ordeno los numeros del objeto.
    data.sort((a, b) => {
        return a.score - b.score;
    });

    return data;
}
/*

    Encuentra un usuario
    
    - Este ejercicio consiste en encontrar y devolver el primer usuario en un arreglo que tenga 
    el el valor que recibimos de una función. La función recibirá la clave que usaremos para la 
    búsqueda y el valor que usaremos para buscar al usuario.

*/

function findUser(users, key, value) {
    //Declaro la variable result donde es un objeto vacio.
    let result = {};

    //Declaro la variable findUser donde almaceno el resultado de la busqueda que retorna find.
    let findUser = users.find(user => value == user[key]);

    //Valido si findUser es true, almaceno el resultado en el objeto result.
    if(findUser) {
        result = findUser;
    }

    return result;
}
/*

    Elimina un usuario
    
    - Este ejercicio consiste en eliminar un usuario (usando su correo como identificador) de un arreglo de usuarios.

*/

function deleteUser(users, email) {
    //Realizo una copia del arreglo con el street operator en la variable result.
    let result = [...users];

    //Recorreo el arreglo result donde determino el indice de cada elemento.
    result.map((user, index) => {

        //Valide si el parametro email es igual a la propiedad email del objeto user.
        if(email == user.email) {
            //Si exite lo borro con el metodo splice que recibe como parametro el indice a borrar y el numero de elementos eliminar.
            result.splice(index, 1);
        }
    });
    
    return result;
}
/*

    Meclando datos de 2 arreglos
    
    - Este ejercicio consiste en mezclar la información de 2 arreglos usando como identificador el correo.

*/

function mergeData(users, attendance) {
    //Declaro variable resultado que contiene una rreglo vacio.
    let result = [];

    //Recorreo el arreglo users
    for (let i = 0; i < users.length; i++) {
        //valide en users y attendance que email sean iguales
        if (users[i].email == attendance[i].email) {
            //Agrego a result el resultado de users en x posicion y attendance en x posicion con spread operator.
            result.push({...users[i], ...attendance[i]});
        }
    }

    return result;
}
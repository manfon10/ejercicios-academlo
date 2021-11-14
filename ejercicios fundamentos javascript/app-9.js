/*

    Obten todos los correos
    
    - Este ejercicio consiste en obtener todos los correos de un areglo de objetos.

*/

function getEmails(users) {
    //Declaro la variable result que retorna un arreglo vacio.
    let result = [];

    //Recorreo el arreglo user.
    users.map(data => {
        //Hago un destructuring al arreglo data->users.
        const { name, email, gender } = data;

        //Agrego las propiedades email al arreglo result con puish.
        result.push(email);
    });

    //Retorno el arreglo.
    return result;
}
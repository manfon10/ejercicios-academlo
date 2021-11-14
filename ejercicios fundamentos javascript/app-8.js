/*

    Obten el correo de un usuario
    
    - Este ejercicio consiste en obtener el correo de un usuario.

*/

function getEmail(user) {
    //Realizo un destruturing al objeto user.
    const { name, email, gender } = user;

    //Retorno el valor de la propiedad email.
    return email;
}
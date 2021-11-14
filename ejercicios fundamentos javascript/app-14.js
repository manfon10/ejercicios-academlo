/*

    Cuenta los estudiantes de un país
    
    - Este ejercicio consiste en obtener el total de estudiantes que pertenecen a un país, 
    para lo cuál recibiremos 2 arreglos, uno de estudiantes (donde cada estudiante tendrá el 
    id del país al que pertenece) y uno de países.

*/

function countStudents(students, countries, countryName) {

    //Declaro variable result para agregar el resultado del filtro y poder contar el resultado.
    let result = [];

    //Declaro vareable maxStudentCountri que es igual a 0.
    let maxStudentCountri = 0;

    //Aca arrojo el resultado donde saco el resultado del pais que es igual a countryName.
    let findCountri = countries.find(countri => countryName == countri.name);

    //Recorro estudiantes para recorrer cada indice.
    for( let i = 0; i < students.length; i++) {
        //Valido si country:id de estudiantes es igual a findCountry id
        if(students[i].country_id == findCountri.id) {
            //Agrego el resultado del objeto al arrrelo result.
            result.push({...students[i]});
        }
    }

    //Le agrego como valor la cantidad de propiedades que tiene result.
    maxStudentCountri = Object.keys(result).length;

    return maxStudentCountri;
}
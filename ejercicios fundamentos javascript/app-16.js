/*

    Encuentra la edad que se repite más veces.
    
    - Este ejercicio consiste en encontrar la edad que más se repite en un arreglo de estudiantes.

*/

function findRepeatedAge(students) {

    //agrego variable donde se almacena el resultado.
    let ageCounter = {};

    //Recorro el objeto student para validar la propiedad edad y agregarla al objeto ageCounter.
    for(let i = 0; i < students.length; i++) {
        //Valido si existe la propiedad edad en ageCounter
        ageCounter[students[i].age] ? ageCounter[students[i].age] += 1 : ageCounter[students[i].age] = 1;
    }

    //Declaro las variables para validar la edad mas repetida.
    let mostRepeated;
    let maxNumber = 0;

    //Recorro las propiedades de ageCounter
    for( const age in ageCounter ) {
        //Valido si la propiedad age es menos que maxNumber
        if(maxNumber < ageCounter[age]) {
            maxNumber = ageCounter[age];
            mostRepeated = parseInt(age);
        }
    }

    return mostRepeated;
}
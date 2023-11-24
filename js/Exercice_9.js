let nombre = prompt('écrire un chiffre')

function table(userNumber) {

    let resultat = "";

    let tableDeMultiplication = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    tableDeMultiplication.forEach(number => {

        resultat += number + "x" + userNumber + "=" + number * userNumber + "\n"
    })

    return (resultat)

}
let message = table(nombre)

alert(message);


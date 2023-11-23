let nombre1 = prompt('écrire un nombre 1 à virgule')
let nombre2 = prompt('écrire un nombre 2 à virgule')

function number(nombre1, nombre2){
    let tronc = Math.trunc(nombre1)
      

return(tronc*nombre2)
}
 

console.log(number(nombre1, nombre2));

alert(number(nombre1, nombre2));
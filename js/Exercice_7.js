let pointure = prompt('saisir votre pointure');
let dateDeNaissance = prompt('saisir votre année de naissance');

function resultat(a, b){

    return( ((((a*2)+5)*50)-b)+1776)
}


alert(resultat(pointure, dateDeNaissance));
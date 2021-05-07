// exo1 
// let date = prompt("quel jour sommes nous ?");
// switch (date) {
//     case "lundi":
//         alert("j'ai cours a MG et je code du python");
//         break;
//     case "mardi":
//         alert("j'ai cours a MG et je vais courir");
//         break;
//     case "mercredi":
//         alert("j'ai cours a MG et je mange des frites");
//         break;
//     case "jeudi":
//         alert("j'ai cours a MG et je Geektalk a 19h");
//         break;
//     case "vendredi":
//         alert("j'ai cours a MG en presentiel pour voir fanny  ");
//         break;
//     case "samedi":
//     case "dimanche":
//         alert("c'est le WE frere")
//         break;
//     default:
//         alert("entre un vrai jour de la semaine");
//         break;
// }






// exo2 
// let meteo = prompt("quel temp fait t'il ?");
// switch (meteo){
//     case "pluie":
//         alert("habille un manteau prevu a cette effet");
//         break;
//     case "soleil":
//         alert("prepare toi pour la plage");
//         break;
//     case "neige":
//         alert("prévois des gands, une echarpe et un bonnet");
//         break;
//     case "nuage":
//         alert("prevois un parapluie au cas ou il pleut");
//         break;
//     case "orage":
//         alert("sort pas c mieu");
//         break;
//     default:
//         alert("on ta demander de nous cité le temp qu'il fait")
//         break;
// }




// exo3 
let nb1 = parseInt(prompt("Choisis un nombre"));
let op = prompt("Choisis un opérateur (+ - / *)");
let nb2 = parseInt(prompt("Choisis un nombre"));

switch(op){
    case "+":
        alert(`${nb1} + ${nb2} = ${nb1+nb2}`);
        break;
    case "-":
        alert(`${nb1} - ${nb2} = ${nb1-nb2}`);
        break;
    case "/":
        alert(`${nb1} / ${nb2} = ${nb1/nb2}`);
        break;
    case "*":
        alert(`${nb1} * ${nb2} = ${nb1*nb2}`);
        break;
    default : 
        alert("Choisis un opérateur correct");
        break;
}
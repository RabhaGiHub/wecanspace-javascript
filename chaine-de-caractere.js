let phrase1="bienvenue à l'école de formation we can space";
let phrase2="BONJOUR";
let phrase3='I don\'t know!';
let fruit= "orange, cerise, pomme";
let message= "I'm leraning java script";



//la taille d'une chaine de caractère(langueur)
let taille= phrase1.length;
console.log("longueur:",taille);
//transformer une phrase au majuscule
console.log(phrase1.toUpperCase());
//transfrmer une phrase au miniscule
console.log(phrase2.toLocaleLowerCase());
//contationation de deux chaines de caractère
console.log(phrase2.concat(" "+"TOUT LE MONDE"));
//remplacement d'une chaine de caractère par une autre
console.log(phrase3.replace("!"," what does it mean!"))
//transformer une chaine de caractère à un tableau
console.log(fruit.split(","));
console.log(message.split(" ")); 
//index de premier caractère d'une chaine de caractère donné
console.log(phrase1.indexOf("formation"));
//trim
let input="   hello,world!   ";
console.log(input.trim());
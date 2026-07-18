//structure conditionnelles 
//if
let age=17;
if(age>=18){
console.log("vous etes majeur")
}
//if..else
let age2=16
if (age2>=18){
    console.log("majeur")
}else{
console.log("mineur")
}
//if..else if..else
/*
si la moyenne de l'étudiant est entre..
10 et 12 en retourne mentiont passable
12 et 14..assez bien 
14 et 16..bien 
16 et 18..très bien
18 et 20..excellent
*/

let moyenne= 20.5;

if(moyenne>=10 && moyenne<12){
    console.log("mention:passable");
   }else if (moyenne>=12 && moyenne<14){  
console.log("mention:assez bien")
   }else if (moyenne>=14 && moyenne<16){
console.log("mention:bien")
   }else if(moyenne>=16 && moyenne<18){
    console.log("mention:tres bien")
  }else if(moyenne>=18 && moyenne<20){  
console.log("mention:excellent")
  }else if(moyenne<10){ 
    console.log ("moyenne insuffisante");
  }else{ 
  console.log ("erreur");
   }

   temperature=25;
   meteo="soleil"

   if (temperature>20){  

   if (meteo==="soleil"){ 
    console.log("parfait pour une sortie")
   }else{
    console.log("il fait chaud, mais pass ensoleillé") 
    }
    
   }else{ 
    console.log("il ne fait pas très chaud")
   }


 // les stuctures conditionnels et les opérateurs logique
 // le ou logique 
  
 billetValide=false;
 invitationSpeciale= false;
 
 if (billetValide || invitationSpeciale) {
    console.log(" accès autorisé au concert!")
  }else{
    console.log("accès refusé.veuillez présenter un billet ou une invitation valide")
 }
 //exercice: si la note de l'étudiant est supérieur ou égal à 10, et tout ces projets sont rendus on va affiché vacance accepté sinon on affiche pas de vacance

 note= 10;
 projetRendu=true;

 if (note>=10 || projetsRendu) {
    console.log("vacance accepté")
 } else {
    console.log("vacance refusé")
 }

 // ET logique
 let age3=19;
 let codeReussi=false;
 
if(age3>=18 && codeReussi){ 
    console.log("tu pourra passé le créneau")
    }else{ 
console.log ("tu ne peux pas passer le créneau")
    }
    // négation
    let age4=16;
if (!(age4<18)){
console.log ("acces autorisé")
}else{ 
    console.log("accés non autorisé")
}

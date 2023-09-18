/*Parité*/
var a = window.prompt("Saisissez un nombre");

if(a%2 ==0) 
{
    alert(" Le nombre " + a + " est paire");
} 
else
{
    alert(" Le nombre " + a + " est impaire");
}

/*Age*/
var age =window.prompt("Saisissez votre année de naissance");
age = 2023 - age;

if(age < 18)
{
    alert("Vous êtes Mineur");
} else
{    
    alert("Vous êtes Majeur");
}

/*Calculette*/
var nb = window.prompt("Saisissez un nombre entier");
var op =window.prompt("Saisissez un opérateur "+"+ , - , * ou /");
var nb2 = window.prompt("Saisissez un second nombre entier");

var result;
var erreur

switch (op)
{
    case "+" :
        result= +nb + +nb2;
        alert(result)
    break;

    case "-" :
        result= nb - nb2;
        alert(result)
    break;

    case "*" :
        result= nb * nb2;
        alert(result)
    break;

    case "/" :
        result= nb / nb2;
        alert(result)
    break;

    default:
        alert("Opérateur erroné")
        if (nb2=0) {
    
        } else if (op="/")then
            alert("impossible")

  } 

  
  



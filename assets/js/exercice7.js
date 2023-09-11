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

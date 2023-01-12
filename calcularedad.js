
const CalculoEdad = (edad)=>{
    if (edad>8) {
        console.log("eres mayor de edad");

    }else{
        console.log("eres menor de edad");
    }
}

const edad = prompt("dame tu edad");
CalculoEdad(19);
CalculoEdad(8)

//Ejemplos de objetos
const usuario={
    nombre: 'meri',
    email: 'Meri@gmail.com',
    password: 'meri123',

}
//console.log(usuario.nombre);

const miusuario={
    nombre: "Marian",
    edad: "19",
    email: 'Meri@gmail.com',
    password: 'meri123',
    altuta: '1.50',
    peso: '57'
}

/*const nombre = Meri.nombre;
const edad = miusuario.edad;
const email= miusuario.email;
const password= miusuaria.password;
const altura = miusuario.altura;
const peso = miusuario.peso;*/

const {nombre,edad,email,password,altura,peso} = miusuario;

console.log(`hola mi nombre es ${nombre} tengo ${edad} a;os, 
tengo una altura de ${email} cm y peso ${password} kg,
mi correo electronico es ${altura} 
y la contrasenaes ${peso}`);
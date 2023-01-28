
document.getElementById('botonI').addEventListener('click',function(){

   document.getElementById("info").innerHTML="Edad: 36<br><br>D.N.I: 32.007.123<br><br>Fecha de Nacimiento: 23-03-1985<br><br>Estado Civil: Soltero<br><br>Nacionalidad: Argentino<br><br>Dirección: Calle Falsa 123<br><br>Localidad: Springfield<br><br>E-Mail:Ecordoba@gmail.com<br><br>Cel:11-4579-5555"

})
   
document.getElementById('botonE').addEventListener('click',function(){

   document.getElementById("info").innerHTML="10/2020-presente: Programador, en Banco Comafi <br><br> 2021-presente: Programador Full Stack, Finanbest, Madrid <br><br> Desarrollo Front End y Back End de aplicaciones con Typescript, Javascript, PHP, MySQL, HTML5"

    

})

document.getElementById('botonA').addEventListener('click',function(){

   document.getElementById("info").innerHTML="-Javacript <br><br> -PHP <br><br> -HTML5 <br><br> -Bootstrap <br><br> -c#"

   

})

   
document.getElementById('bocultar').addEventListener('click',function(){

   document.getElementById("info").style.display='none';

})

document.getElementById('bmostrar').addEventListener('click', function(){

   document.getElementById("info").style.display='block';
})




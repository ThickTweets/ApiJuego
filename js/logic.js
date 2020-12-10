console.log ("*** juego adivina quien soy");

let personajes = [{
    name:'charmander',
    foto:'charmander.png',
    preguntas:['Escupe fuego ?',' vuela ?','Le gusta la lluvia?','Es naranja ?','Es tipo dragon ?'],
    respuestas:['si','no','no','si','no']
},{
    name:'stonjourner',
    foto:'stonjourner.png',
    preguntas:['Escupe agua ?',' Es de roca ?','Le gusta la lluvia?','Es verde ?','Es muy grande ?'],
    respuestas:['no','si','no','no','si']
}
];

const imgPersonaje = document.getElementById("imgPersonaje");
const playJuego =  document.getElementById("playJuego");
let indice = 1;
let opacidad = 20;

playJuego.addEventListener('click', () =>{
     

    const pregunta0 = document.getElementById("pregunta0");
    const pregunta1 = document.getElementById("pregunta1");
    const pregunta2 = document.getElementById("pregunta2");
    const pregunta3 = document.getElementById("pregunta3");
    const pregunta4 = document.getElementById("pregunta4");


    imgPersonaje.src = "./assets/pic/" + personajes[indice].foto;
    imgPersonaje.style.filter = "blur(20px)";
    
        pregunta0.value=personajes[indice].preguntas[0];
        pregunta1.value=personajes[indice].preguntas[1];
        pregunta2.value=personajes[indice].preguntas[2];
        pregunta3.value=personajes[indice].preguntas[3];
        pregunta4.value=personajes[indice].preguntas[4];



});


const respuesta0 = document.getElementById("respuesta0")

respuesta0.addEventListener('change', ()=>{
  
     //console.log (" rta " + respuesta0.value)
     

     if (respuesta0.value == personajes[indice].respuestas[0]) {
         opacidad = opacidad - 2
         imgPersonaje.style.filter = "blur(" + opacidad + "px)";
         document.getElementById("icoRta0").src ="./assets/pic/si.png";
         
     } else  {
        document.getElementById("icoRta0").src ="./assets/pic/no.png";
     }

      respuesta0.disabled = true;
});


const respuesta1 = document.getElementById("respuesta1")

respuesta1.addEventListener('change', ()=>{
  
     //console.log (" rta " + respuesta0.value)
     

     if (respuesta1.value == personajes[indice].respuestas[1]) {
         opacidad = opacidad - 2
         imgPersonaje.style.filter = "blur(" + opacidad + "px)";
         document.getElementById("icoRta1").src ="./assets/pic/si.png";
         
     } else  {
        document.getElementById("icoRta1").src ="./assets/pic/no.png";
     }

      respuesta1.disabled = true;
});


const respuesta2 = document.getElementById("respuesta2")

respuesta2.addEventListener('change', ()=>{
  
     //console.log (" rta " + respuesta0.value)
     

     if (respuesta2.value == personajes[indice].respuestas[2]) {
         opacidad = opacidad - 2
         imgPersonaje.style.filter = "blur(" + opacidad + "px)";
         document.getElementById("icoRta2").src ="./assets/pic/si.png";
         
     } else  {
        document.getElementById("icoRta2").src ="./assets/pic/no.png";
     }

      respuesta2.disabled = true;
});

const respuesta3 = document.getElementById("respuesta3")

respuesta3.addEventListener('change', ()=>{
  
     //console.log (" rta " + respuesta0.value)
     

     if (respuesta3.value == personajes[indice].respuestas[3]) {
         opacidad = opacidad - 2
         imgPersonaje.style.filter = "blur(" + opacidad + "px)";
         document.getElementById("icoRta3").src ="./assets/pic/si.png";
         
     } else  {
        document.getElementById("icoRta3").src ="./assets/pic/no.png";
     }

      respuesta3.disabled = true;
});


const respuesta4 = document.getElementById("respuesta4")

respuesta4.addEventListener('change', ()=>{
  
     //console.log (" rta " + respuesta0.value)
     

     if (respuesta4.value == personajes[indice].respuestas[4]) {
         opacidad = opacidad - 2
         imgPersonaje.style.filter = "blur(" + opacidad + "px)";
         document.getElementById("icoRta4").src ="./assets/pic/si.png";
         
     } else  {
        document.getElementById("icoRta4").src ="./assets/pic/no.png";
     }

      respuesta4.disabled = true;
});

const btnRespuesta = document.getElementById("btnRespuesta")

btnRespuesta.addEventListener('click' , () => {
  
    const respuetaGeneral = document.getElementById("respuetaGeneral").value;

      console.log ("respueta fina " + respuetaGeneral)

      if (respuetaGeneral == personajes[indice].name) {
           console.log (" ganaste ") ;
      } else {
        console.log (" perdiste ") ;
      }

})

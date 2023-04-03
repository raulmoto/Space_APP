function capturar () {
    /* NOTA IMPORTANTE: 
        el $ hace referencia a Jquerry mientras que .getElementById hace referencia a JavaScript
        con lo cual es lo mismo, devuelve los mismo datos.te recuerdo que Jquery está escrito en Javascript por lo que.
        "La diferencia es que el código sin jQuery es de una sola línea, mientras que con jQuery son muchas líneas, 
        y es un código rebuscado que intenta funcionar en todos los navegadores."
    */
    var valor=$('#formControlRange').val();
    $('#res').text(valor);
    return valor
    /*lo que estamos ahciendo aqui es tomar el valor que hemos puesto en el HTML <span> 
    y lo actualiza al valor de la lista segun vayamos avanzando.
    
    cuando avanzamos con el "onchange", actualizamos el la variable valor*/

}



function capturar1 () {
    
    var valor1=$('#porcentaje1').val();
    $('#res1').text(valor1);
    return valor1
}

function capturar2 () {
    
    var valor2=$('#porcentaje2').val();
    $('#res2').text(valor2);
    return valor2
}

function capturar3 () {
    
    var valor3=$('#porcentaje3').val();
    $('#res3').text(valor3);
    return valor3
}

function capturar4 () {
    
    var valor4=$('#porcentaje4').val();
    $('#res4').text(valor4);
    return valor4
}

function capturar5 () {
    
    var valor5=$('#porcentaje5').val();
    $('#res5').text(valor5);
    return valor5
   
}

function enviarDatos(){
    capturar1()
    console.log("valor veiculos :" + capturar1())
    console.log("valor edificios :" + capturar2())
    console.log("valor Industrias :" + capturar3())
    console.log("valor Deforestacion :" + capturar4())
    console.log("valor Residuos :" + capturar5())
    console.log("valor barra de tiempo :" + capturar())
}
function eleccionUno(){
    //Variables de botones
    let textoPrincipal = document.getElementById("iUno");
    let textoDos = document.getElementById("iDos");
    let textoTres = document.getElementById("iTres");

    //Conversiones a case
    let casoSW = textoPrincipal.value;
    let casoSE = textoDos.value;
    let casoSR = textoTres.value;

    //Elementos de texto a modificar
    let desicionUno =document.getElementById("resultado1"); 
    let desicionDos =document.getElementById("resultado2");
    let desicionTres=document.getElementById("resultado3");
    
    //Validación
    let validar = (casoSW + casoSE + casoSR);

    if (casoSW >= 1 && casoSE >=1 && casoSR>=1 && casoSW <= 3 && casoSE <=2 && casoSR<=3){
            switch(casoSW){
                case "1": alert("Caso 1");

                        desicionUno.textContent="Usted escogió Terror";
                        switch(casoSE){
                        case "1": desicionDos.textContent="Usted escogió Cinépolis";
                        break;
                        case "2": desicionDos.textContent="Usted escogió CineMex";
                        break;    }
                break;
                case "2": alert("Caso 2");
                    desicionUno.textContent="Usted escogió Fantasía";
                break;
                case "3": alert("Caso 3");
                    desicionUno.textContent="Usted escogió Héroes";
                break;
                        }
    }else{
        alert("Campos llenados de forma incorrecta, seleccione una opción válida");
        textoPrincipal.value="";
        textoDos.value="";
        textoTres.value="";
    }
    

}
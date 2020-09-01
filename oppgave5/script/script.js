/*Lage et main HTML element
Legge den til body
Lage en paragraph
Legge til "Jeg trener på JavaScript" i en paragraf
Gi denne en klasse*/

window.onload = startup;

function startup(){

    /*Lage et main HTML element
    Legge den til body */
        var mainElement = document.createElement("main");
        document.body.appendChild(mainElement); 


    //LAge paragraph
    //Legge til "Jeg trener på Javascript" i en paragraf
    //Gi denne en klasse
        var p = document.createElement("p");
        p.innerHTML = "Jeg trener på javascript"
        p.className += "pClass"
        mainElement.appendChild(p);


    //Lage en select box

        var selectBox =  document.createElement("select");
    //Populere selectboksen basert på et objekt
    //I main sentrere selectboksen og sette maksbredde til 500px    
}
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
        var objekts = [{option: "option 1",value:1},{ option: "option2",value:2},{option:"option3",value:3}];

        for(i=0;i<objekts.length;i++){
            var option = document.createElement("option");
            option.textContent = objekts[i].option;
            option.value = objekts[i].value;

            selectBox.appendChild(option);
        }
        mainElement.appendChild(selectBox);

    //I main sentrere selectboksen og sette maksbredde til 500px    
        selectBox.style.display = "block";
        selectBox.style.margin = "0 auto";
        selectBox.style.maxWidth = "500px"

    //LAge to knapper, test og reset.
    var testBtn = document.createElement("BUTTON"); 
    testBtn.innerHTML = "Test";
    testBtn.id = "testBtn";
    
    var resetBtn = document.createElement("BUTTON");
    resetBtn.innerHTML = "reset";
    resetBtn.id = "resetBtn";

    mainElement.appendChild(testBtn);
    mainElement.appendChild(resetBtn);

    testBtn.addEventListener("click", reverseP);
        //reverseP function som reverserer ord.
    resetBtn.addEventListener("click",populateList);    
     //Om du trykker reset, populeres listen på nytt.


// ======== REVERSERE ORD =============
    function reverseP(){

        //Splitter inn i array
        var words = p.innerHTML.split(" ");

        //Fjern første bokstav
        for(i=0;i<words.length;i++){
            words[i] = words[i].slice(1);
        }

        //split inn i characters.
        var chars = [];

        for(i=0;i<words.length;i++){
            splitWord = words[i].split('');
            chars.push(splitWord);
        }

        //reverse og join inn i string
        var reverseString = "";
        for(i=0;i<chars.length;i++){
            var word = chars[i].reverse();
            reverseString +=" " +  word.join("");
        }
        p.innerHTML = reverseString;
    } 

// ===========  LISTE  =================
     //Lage en ul med 4 listeelementer
     var liste = document.createElement("UL");

     populateList();

     //Funksjon her sånn at reset funker.

     function populateList(){
        //Påse at liste er tom.
        liste.innerHTML = null;


        for(i=0;i<=4;i++){
            var listElement = document.createElement("LI");
            var number = document.createElement("P");
            number.innerHTML = i;
    
            var deleteButton = document.createElement("button");
            deleteButton.id=(i);
            deleteButton.onclick =  function(){
                //Find parent, slett den.
                liste.removeChild(document.getElementById(this.id).parentNode)
            } 
            deleteButton.innerHTML = "Delete";
    
            listElement.appendChild(number);
            listElement.appendChild(deleteButton);
            liste.appendChild(listElement);
         }
    
         mainElement.appendChild(liste);
     }
}
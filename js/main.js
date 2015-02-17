/*
*Premier test de code pour récupérer les données horaires en temps réel sur api transilien 
*/

/*var donnees= new XMLHttpRequest();
donnees.onreadystatechange=function(){
    
    if (donnees.readyState==0) {
        alert("nothing");
    }
    else if(donnees.readyState==1){
        alert("connexion ouverte");
    }
    else if (donnees.readyState==2) {
        alert("requete reçue")
    }
    else if(donnees.readyState==3){
        alert("requete en cours");
    }
    
    else if(donnees.readyState == 4){
        if(donnees.status==200){
            alert(donnees.responseXml);
            document.getElementById("idtest").innerHTML= donnees.responseXml;
        }
        else
            alert("error");
    }

};

donnees.open('GET','http://api.transilien.com/gare/87681387/depart/',true,'tnhtn218','2cAmwT93');
donnees.send(null);
*/


$.ajax
({
  type: "GET",
  url: "http://api.transilien.com/gare/87681387/depart/",
  async: true,
  crossDomain: true,
  username: "tnhtn218",
  password: "2cAmwT93",
  success: function (){

    alert('Thanks for your comment!');  
  }  
});

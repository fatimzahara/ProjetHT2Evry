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
var listeGare = {
87682138:'BOUSSY SAINT-ANTOINE',
87681478:'BOUTIGNY',
87681452:'LA FERTE ALAIS',
87681627:'LE PLESSIS CHENET',
87681155:'MAISONS ALFORT ALFORTVILLE',
87682005:'MELUN',
87681411:'MENNECY',
87682104:'MONTGERON CROSNE',
87276279:'ORRY LA VILLE COYE LA FORET',
87682500:'VOSVES',
87682161:'CESSON',
87276113:'CHANTILLY GOUVIEUX',
87681007:'CORBEIL ESSONNES',
87681361:'EVRY - Val de Seine',
87681387:'EVRY COURCOURONNES - Centre',
87276196:'GARGES SARCELLES',
87276253:'LOUVRES',
87271163:'PIERREFITTE STAINS',
87681858:'VILLENEUVE PRAIRIE',
87681809:'VILLENEUVE TRIAGE',
87276220:'VILLIERS LE BEL',
87682120:'BRUNOY',
87681510:'BUNO GIRONVILLE',
87684407:'BOIGNEVILLE',
87271023:'GARE DU NORD RER',
87276246:'GOUSSAINVILLE',
87681379:'GRIGNY CENTRE',
87276287:'LA BORNE BLANCHE',
87681635:'LE COUDRAY MONTCEAUX',
87686030:'PARIS - GARE DE LYON',
87682526:'PONTHIERRY PRINGY',
87271015:'SAINT-DENIS',
87681304:'VIGNEUX SUR SEINE',
87681619:'VILLABE',
87682518:'BOISSISE LE ROI',
87682146:'COMBS LA VILLE QUINCY',
87276006:'CREIL',
87681601:'ESSONNES ROBINSON',
87545244:'JUVISY',
87682179:'LE MEE',
87681247:'LE VERT DE MAISONS',
87682153:'LIEUSAINT MOISSY',
87681486:'MAISSE',
87681403:'MOULIN GALANT',
87681346:'ORANGIS BOIS DE LEPINE',
87271031:'PARIS NORD (GARE DU NORD)',
87682542:'SAINT-FARGEAU',
87164780:'STADE DE FRANCE SAINT-DENIS',
87276261:'SURVILLIERS FOSSES',
87681312:'VIRY CHATILLON',
87682112:'YERRES',
87681338:'RIS ORANGIS',
87682187:'SAVIGNY LE TEMPLE NANDY',
87681825:'VILLENEUVE SAINT-GEORGES',
87681437:'BALLANCOURT',
87758607:'CHATELET LES HALLES',
87681353:'GRAND BOURG',
87681395:'LE BRAS DE FER - Evry Génopole',
87276238:'LES NOUES',
87684415:'MALESHERBES'
};

/*
 *Fonction de récupération des prochains trains avec choix de la gare de départ
*/
function getProchainsTrains(elm){
  var gareId = $(elm).val();
    $("#liste-horaires tbody").empty();
    $.get("http://localhost/ProjetHT2Evry-master/php/testphp.php",{methode: "departs", gare: gareId}, function(data){
      console.log(data);
      horaires = data;
         $(data).find('train').each(function(index,value){
          console.log(value);
            
            $train = $(value);  
            var line ="<tr>";
          /*  line += "<td><span class='idx'>" + $train.find('num').html() + "</span></td>";*/
            line += "<td><span class='date'>" + $train.find('date').html().split(' ')[1] + "</span></td>";
            line += "<td><span class='miss'>" + $train.find('miss').html() + "</span></td>";
            line += "<td><span class='term'>" + listeGare[$train.find('term').html()] + "</span></td>";
            line += "</tr>";
            $("#liste-horaires tbody").append($(line));
         }
          );

    });
}

/*
 *Fonction de recherche itinéraire sur le rer D en choisissant gare de départ et gare d'arrivée
 */
function getItineraire(){
  $("#message").html("");
  var gareDep = $("#gareDep").val();
  var gareArr = $("#gareArr").val();
  if (gareDep == undefined || gareArr == undefined || gareDep == gareArr){
    $("#message").html("Vérifiez vos parametres de recherche");
    return; 
  }
    $("#liste-horaires tbody").empty();
    $.get("http://localhost/ProjetHT2Evry-master/php/testphp.php",{methode: "itineraire", gareDep: gareDep, gareArr: gareArr, }, function(data){
      if ( $(data).find('train').length ==0){
        $("#message").html("Pas de train entre ces deux destinations");
      }
      else{
         $(data).find('train').each(function(index,value){
          console.log(value);
            
            $train = $(value);  
            var line ="<tr>";
           /* line += "<td><span class='idx'>" + $train.find('num').html() + "</span></td>";*/
            line += "<td><span class='date'>" + $train.find('date').html().split(' ')[1] + "</span></td>";
            line += "<td><span class='miss'>" + $train.find('miss').html() + "</span></td>";
            line += "<td><span class='term'>" + listeGare[$train.find('term').html()] + "</span></td>";
            line += "</tr>";
            $("#liste-horaires tbody").append($(line));
         }
          );
         }

    });
}

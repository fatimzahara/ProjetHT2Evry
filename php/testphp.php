<?PHP
/*Identifiant pour acceder aux ressources sur API Transilien*/
$username = "tnhtn218";
$password = "2cAmwT93";


$methode = $_GET['methode'];
$remote_url = "";
switch($methode){
    case("departs"):
        default:
        $remote_url = 'http://api.transilien.com/gare/'. $_GET['gare'].'/depart/';
        break;
    case('itineraire'):
        $remote_url = 'http://api.transilien.com/gare/'. $_GET['gareDep'].'/depart/'. $_GET['gareArr'];
        break;
}

// Create a stream
$opts = array(
  'http'=>array(
    'method'=>"GET",
    'header' => "Authorization: Basic " . base64_encode("$username:$password")                 
  )
);


$context = stream_context_create($opts);

// Open the file using the HTTP headers set above
$file = file_get_contents($remote_url, false, $context);


/*
$newFile = new DOMDocument();
$newFile -> loadXML($file);

$newFile -> save('C:/Users/fatim/Documents/GitHub/ProjetHT2Evry/fichierXml.xml');
print($file);

*/

header("Access-Control-Allow-Origin: *");
//header ("Content-Type:text/xml");
print($file);
die;
?>
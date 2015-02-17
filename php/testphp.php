<?PHP

$username = "tnhtn218";
$password = "2cAmwT93";
$remote_url = 'http://api.transilien.com/gare/87681387/depart/';

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

$newFile = new DOMDocument();
$newFile -> loadXML($file);
$newFile -> save('C:/Users/fatim/Documents/GitHub/ProjetHT2Evry/fichierXml.xml');
print($file);

?>
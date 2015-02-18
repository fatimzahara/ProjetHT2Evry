# ProjetHT2Evry
Application Firefox OS pour rechercher les trains RER D au départ ou à destination des gares d'Evry-Courcouronnes ou d'Evry Val de Seine.

Depuis plusieurs années la SNCF a ouvert ses données pour permettre aux internautes de développer des applications.

A la SNCF , le site qui est dédié est ici : http://www.data.sncf.com/

Le but du projet est de construire une application Firefox OS permettant de

connaitre en temps réel ou en mode non connecté tous les trains qui passent ( dans les deux sens) à Evry-Courcouronnes ou Evry Val de Seine.

On utilisera pour cela l'API fournie par la SNCF.

IMPORTANT : Pour lancer l'application, il faudra héberger votre dossier ou application dans un serveur web du type WAMPSERVER par exemple.

Dans les fonctions getProchainsTrains(elem) et getItineraire() du fichier main.js dans le dossier js, il faudra changer le chemin d'accès à votre fichier testphp.php dans la requête GET.

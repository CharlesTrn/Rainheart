<?php
  header('Access http://charles-tarnier.synology.me/~Charles/ -Control-Allow-Origin: *');
  $mysqli = new mysqli("charles-tarnier.synology.me:3307", "rainheart",
  "Rainheart18", "rainheart_bd");
  $query = "SELECT * FROM Utilisateur";
  $dbresult = $mysqli->query($query);

  /*while($row = $dbresult->fetch_array(MYSQLI_ASSOC)){

      $data[] = array(
          'id' => $row['id'],
          'name' => $row['name']
      );
  }*/

  if($dbresult){
      $result = "{'success':true, 'data':" $data "}";
  }
  else {
      $result = "{'success':false}";
  }
  //echo "K";
  echo $result;
?>

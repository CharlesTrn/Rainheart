<?php
  $mysqli = new mysqli("zmmenuisfarainbd.mysql.db", "zmmenuisfarainbd",
  "Rainheart18", "zmmenuisfarainbd");
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
  //echo $result;
?>

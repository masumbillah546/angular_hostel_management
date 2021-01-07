<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "INSERT INTO meals (id, meal)
VALUES ('$data->id', '$data->meal')";
if($data->id){
	$qry = $conn->query($sql);
}
$conn->close();
?>

<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "INSERT INTO comments (name, comment_subject, comment_text)
VALUES ('$data->name','$data->subject','$data->dis')";
if($data->subject){
	$qry = $conn->query($sql);
}
$conn->close();
?>
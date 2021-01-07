<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "INSERT INTO stdpayment (userId, transDate, paymentBy, transNo, amount, remark)
VALUES ('$data->userId', '$data->transDate', '$data->paymentBy', '$data->transNo','$data->amount','$data->remark')";
if($data->userId){
	$qry = $conn->query($sql);
}
$conn->close();
?>

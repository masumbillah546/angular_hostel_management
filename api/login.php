<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "SELECT * FROM users WHERE email = '$data->email' AND password = '$data->password'";
//$sql = "SELECT * FROM users WHERE email = 'shahin@gmail.com' AND password = '123456'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
     $data = array() ;
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
} else {
    echo "0 results";
}
echo json_encode($data);
$conn->close();
?>

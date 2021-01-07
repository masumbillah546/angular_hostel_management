<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "INSERT INTO studentinfo (name, 
studentId, 
cellNo, 
email, 
nameOfInst,
 program,
  batchNo,
  gender,
   dob,
    bloodGroup, 
    nationality,
     nationalId,
      fatherName, 
      fatherCellNo, 
      motherName,
       motherCellNo,
        presentAddress,
         parmanentAddress)

VALUES ('$data->name',
 '$data->studentId',
  '$data->cellNo',
   '$data->email',
    '$data->nameOfInst',
     '$data->program',
      '$data->batchNo',
       '$data->gender',
        '$data->dob', 
        '$data->bloodGroup',
         '$data->nationality',
          '$data->nationalId', 
          '$data->fatherName', 
          '$data->fatherCellNo', 
          '$data->motherName', 
          '$data->motherCellNo', 
          '$data->presentAddress',
           '$data->parmanentAddress')";
if($data->name){
	$qry = $conn->query($sql);
}
$conn->close();
?>





<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "UPDATE studentinfo SET name ='$data->name',
studentId = $data->studentId,
cellNo='$data->cellNo',
   email='$data->email',
    nameOfInst='$data->nameOfInst',
     program='$data->program',
      batchNo='$data->batchNo',
       gender='$data->gender',
        dob='$data->dob', 
        bloodGroup='$data->bloodGroup',
         nationality='$data->nationality',
          nationalId='$data->nationalId', 
          fatherName='$data->fatherName', 
          fatherCellNo='$data->fatherCellNo', 
          motherName='$data->motherName', 
          motherCellNo='$data->motherCellNo', 
          presentAddress='$data->presentAddress',
          parmanentAddress='$data->parmanentAddress' WHERE studentId = $data->studentId";
if($data->name){
	$qry = $conn->query($sql);
}
$conn->close();
?>

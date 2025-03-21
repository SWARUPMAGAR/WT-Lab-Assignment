<?php
$roll=$_POST['t1'];
$con=mysqli_connect("localhost","root","root","wt");
$sql="delete from student where roll=$roll";
if(mysqli_query($con,$sql))
{
    echo "Record Deleted Successfully";
}
echo "<form action='student_info.php'>";
echo "<input type='submit' name='b1' value='Back'/>";
echo "</form>";
?>
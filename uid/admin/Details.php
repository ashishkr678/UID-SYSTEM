<?php
include_once('db.php');

if(isset($_POST['save'])) {
    $Number = $_POST['Number'];
    $Name = $_POST['Name'];
    $Pin = $_POST['Pin'];
    $Image = $_POST['Image'];

    $stmt = $conn->prepare("INSERT INTO tbl_p_details (Number, Name, Pin, Image) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $Number, $Name, $Pin, $Image);

    if($stmt->execute()) {
        echo "Data saved";
    } else {
        echo "Data Not saved";
    }
    $stmt->close();
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Admin Panel</title>
</head> 

<body style="margin:auto; padding:0px; width:1000px; ">
<form method="post">
    <table width="100%">
        <tr>
            <td align="center" style="height:100px">
                <img src="../images/AdminBanner.jpg" width="1000" height="100" />
            </td>
        </tr>
        <tr>
            <td style="width:100%;">
                <table style="width:100%; text-decoration:none">
                    <tr>
                        <td><a href="admin.php">Admin</a></td>
                        <td><a href="Details.php">Personal Details</a></td>
                        <td><a href="../index.php">LogOut</a></td>
                    </tr>
                </table><hr />
            </td>
        </tr>
        <tr>
            <td align="center">
                <h2> Your Personal Details</h2>
            </td>
        </tr>
        <tr>
            <tr>
            <td style="width:100%">
            
                <table style="width:100%">
                    <tr>
                        <td>Enrolment Number/Aadhaar Number<span style="color:#FF0000"> *</span></td>
                        <td><input type="text" name="Number" /></td>
                    </tr>
                    <tr>
                        <td>Full Name <span style="color:#FF0000"> *</span></td>
                        <td><input type="text" name="Name" /></td>
                    </tr>
                    <tr>
                        <td>Pin Code<span style="color:#FF0000"> *</span></td>
                        <td><input type="text" name="Pin" /></td>
                    </tr>
                    <tr>
                        <td>Image<span style="color:#FF0000"> #</span></td>
                        <td><input type="text" value="<?php $str=str_shuffle("abcdefghijklmnopqrstuvwxyz0123456789"); echo substr($str,3,5); ?>" readonly="" /></td>
                    </tr>
                    <tr>
                        <td>Enter above Image Text<span style="color:#FF0000"> *</span></td>
                        <td><input type="text" name="Image" /></td>
                    </tr>
                    <tr>
                        <td colspan="2" align="center"><input type="submit" name="save" value="Submit" /><input type="reset" value="Reset" /></td>
                    </tr>
                </table>
                <hr />
            </td>
        </tr>
    </table>
    <table style="width:100%" border="1px">
        <tr>
            <th>Id</th>    
            <th>Number</th>    
            <th>Name</th>    
            <th>Pin</th>    
            <th>Image</th>
            <th>Action</th>    
        <tr>    
        <?php
            $sql = $conn->query("SELECT * FROM tbl_p_details");
            while($result = $sql->fetch_assoc()) {
        ?>
        <tr>
            <td><?php echo $result['id']; ?></td>
            <td><?php echo $result['Number']; ?></td>
            <td><?php echo $result['Name']; ?></td>
            <td><?php echo $result['Pin']; ?></td>
            <td><?php echo $result['Image']; ?></td>
                
            <td><a href="edits.php? ide=<?php echo $result['id']; ?>">Edit </a>|
                <a href="delete.php? idd=<?php echo $result['id']; ?>">Delete </a>
            </td>
        </tr>
        <?php
        }
        ?>
    </table>
    </form>
        </tr>
    </table>
</body>
</html>

<?php
include_once('db.php');
if (isset($_POST['submit'])) {
    $msg = "";
    $name = $_POST['Name'];
    $password = $_POST['Password'];

    $stmt = $conn->prepare("SELECT * FROM tbl_admin WHERE username = ? AND Password = ?");
    $stmt->bind_param("ss", $name, $password);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 0) {
        $msg .= "Wrong User Name and Password";
    } else {
        header('Location: admin.php');
        exit();
    }
    $stmt->close();
}
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Admin Panel</title>
<style>
*{margin:0px; padding:0px;}
#dec{margin-top:100px; }
#dec table{margin:0px auto; width:300px; background-color:#9C9641;
            margin-top:0px; margin-bottom:10px;
            border:thin #FFFF66 solid;
            border-radius:8px;
            background-color:rgba(255,255,255,0.5); 
          }
#dec td{padding-left:30px;
        padding-right:10px;
        padding-bottom:5px; 
        font-weight:bold; 
        font-size:18px;}
input{padding:5px; 
      font-size:18px; 
      color:#666666;}
</style>
</head>

<body>
    <div align="center" style="margin-top:100px;"></div>
    <form action="" method="post" enctype="multipart/form-data">
        <div id="dec">
            <table align="center" style="background-color:#8B7D1F">
                <tr>
                    <td align="center" colspan="2" style="border-bottom:#000000 thin solid; margin-bottom:15px">Admin Panel</td>                                                
                </tr>
                <tr>
                    <td align="center" colspan="2">
                        <p style="color:#FF0000">
                        <?php if (isset($_POST['submit'])) {
                            echo $msg;
                        } ?>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>Admin </td>
                    <td><input type="text" name="Name" id="" placeholder="Enter your admin"/></td>
                </tr>
                <tr>
                    <td>Password </td>
                    <td><input type="password" name="Password" id="" placeholder="Enter your password"/></td>
                </tr>            
                <tr>
                    <td colspan="2" align="center">
                        <input type="submit" name="submit" value="Submit" />                            
                    </td>                         
                </tr>
          </table>
        </div>
    </form>
</body>
</html>

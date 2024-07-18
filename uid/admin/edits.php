<?php
include('db.php');

$id = isset($_GET['ide']) ? intval($_GET['ide']) : null;

if ($id) {
    $sql = $conn->prepare("SELECT * FROM tbl_p_details WHERE id = ?");
    $sql->bind_param('i', $id);
    $sql->execute();
    $result = $sql->get_result()->fetch_assoc();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['save'])) {
    $number = $_POST['Number'];
    $name = $_POST['Name'];
    $pin = $_POST['Pin'];
    $image = $_POST['Image'];

    $update = $conn->prepare("UPDATE tbl_p_details SET Number = ?, Name = ?, Pin = ?, Image = ? WHERE id = ?");
    $update->bind_param('ssssi', $number, $name, $pin, $image, $id);

    if ($update->execute()) {
        header('Location: Details.php');
        exit();
    } else {
        echo "Data Not saved";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel</title>
    <style>
        body { margin: auto; padding: 0; width: 1000px; }
        table { width: 100%; border-collapse: collapse; }
        td { padding: 8px; }
        input[type="text"], input[type="date"] { width: 100%; }
        hr { margin: 20px 0; }
    </style>
</head>
<body>
<form method="post">
    <table>
        <tr>
            <td align="center" style="height: 100px;">
                <img src="../images/AdminBanner.jpg" width="1000" height="100" alt="Admin Banner"/>
            </td>
        </tr>
        <tr>
            <td>
                <table>
                    <tr>
                        <td><a href="admin.php">Admin</a></td>
                        <td><a href="Details.php">Personal Details</a></td>
                        <td><a href="../index.php">LogOut</a></td>
                    </tr>
                </table>
                <hr/>
            </td>
        </tr>
        <tr>
            <td align="center">
                <h2>Your Personal Details</h2>
            </td>
        </tr>
        <tr>
            <td>
                <table>
                    <tr>
                        <td>Enrolment Number/Aadhaar Number<span style="color:#FF0000"> *</span></td>
                        <td><input type="text" name="Number" value="<?php echo htmlspecialchars($result['Number']); ?>" /></td>
                    </tr>
                    <tr>
                        <td>Full Name <span style="color:#FF0000"> *</span></td>
                        <td><input type="text" name="Name" value="<?php echo htmlspecialchars($result['Name']); ?>" /></td>
                    </tr>
                    <tr>
                        <td>Pin Code<span style="color:#FF0000"> *</span></td>
                        <td><input type="text" name="Pin" value="<?php echo htmlspecialchars($result['Pin']); ?>" /></td>
                    </tr>
                    <tr>
                        <td>Enter above Image Text<span style="color:#FF0000"> *</span></td>
                        <td><input type="text" name="Image" value="<?php echo htmlspecialchars($result['Image']); ?>" /></td>
                    </tr>
                    <tr>
                        <td colspan="2" align="center"><input type="submit" name="save" value="Update" /></td>
                    </tr>
                </table>
                <hr/>
            </td>
        </tr>
    </table>
</form>
</body>
</html>

<?php
include('db.php');

$id = isset($_GET['idd']) ? intval($_GET['idd']) : null;

if ($id) {
    $stmt = $conn->prepare("DELETE FROM tbl_p_details WHERE id = ?");
    $stmt->bind_param('i', $id);

    if ($stmt->execute()) {
        header('Location: Details.php');
        exit();
    } else {
        echo "Error deleting record: " . $conn->error;
    }
}
?>

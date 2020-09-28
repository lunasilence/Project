<?php
    $userName = $_POST['userName'];
    $userEmail = $_POST['userEmail'];
    $userPhone = $_POST['userPhone'];
    $userAddress = $_POST['userAddress'];
    $gender = $_POST['gender'];
    $password = $_POST['password'];

    $servername="localhost";
    $dbUsername="root";
    $dbPassword="";
    $dbName="easyjob";

    //Database Conncetion
    $conn = new mysqli($servername, $dbUsername, $dbPassword, $dbName);
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }
    else{
        $stmt = $conn->prepare("insert into register(userName, userEmail, userPhone, userAddress, gender, password) values(?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssss", $userName, $userEmail, $userPhone, $userAddress, $gender, $password);
        $stmt->execute();
        echo "Registered Succesfully!";
        $stmt->close();
        $conn->close();
    }
?>
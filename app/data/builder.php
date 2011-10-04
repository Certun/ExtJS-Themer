<?php
/**
 * Created by JetBrains PhpStorm.
 * User: ernesto
 * Date: 10/4/11
 * Time: 5:24 PM
 * To change this template use File | Settings | File Templates.
 */
// **************************
// Set defaults vars values
// **************************
$error = false;




// **************************
// Get recuest value
// **************************
$data = $_POST;




// **************************
// Handle temp file dir 
// **************************





// **************************
// debugging stuff
// **************************
// $error = true;

$currTheme = $_POST['currTheme'];

// echo '<pre>';
// print_r($data);
// echo '</pre>';


// check for $error and sent callback
if($error == true ){
    echo '{"success":false, "error":{"title":"Oops!", "msg":"Something went wrong during the compiling prosess :o(" }}';
}else{
    echo '{"success":true, "theme":"'.$currTheme.'"}';
}
<?php
/**
 * Created by JetBrains PhpStorm.
 * User: ernesto
 * Date: 10/4/11
 * Time: 5:24 PM
 * To change this template use File | Settings | File Templates.
 */
// *****************************************************************************************************
// Start Session
// *****************************************************************************************************
session_start();

// *****************************************************************************************************
// funtion to encrypt session id and use that to create the session dir inside the /temp
// *****************************************************************************************************
function ecrypt_session_id($str){
  $result   = '';
  $key      = 'seguridad';
  for($i=0; $i<strlen($str); $i++) {
     $char      = substr($str, $i, 1);
     $keychar   = substr($key, ($i % strlen($key))-1, 1);
     $char      = chr(ord($char)+ord($keychar));
     $result   .= $char;
  }
  $url_safe     = strtr(base64_encode($result), '+/=', '-_,');
  return base64_encode($url_safe);
}
// *****************************************************************************************************
// Lets define a few variables values
// *****************************************************************************************************
$root           = $_SESSION['root'];                // defined at index.php
$tmp_dir        = 'tmp/';                           // define the temporary dir
$theme_dir      = ecrypt_session_id(session_id());  // encrypt the theme dir name for security
$theme_path     = $root . $tmp_dir . $theme_dir;    // full path apended
$error          = false;                            // error set to false by default
// *****************************************************************************************************
// Check if theme path exist... if not, lets make it!
// *****************************************************************************************************
if (!file_exists($theme_path)){
    // working!! commented for now
    mkdir($theme_path, 0777, true );
}


// *****************************************************************************************************
// Get POST request values
// *****************************************************************************************************
$data = $_POST;




// *****************************************************************************************************
// Handle the theme logic / sass / shell_exec() stuff
// *****************************************************************************************************






// *****************************************************************************************************
// debugging stuff
// *****************************************************************************************************
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
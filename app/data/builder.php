<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Ernesto J Rodriguez (Certun)
 * Date: 10/4/11
 * Time: 5:24 PM
 * To change this template use File | Settings | File Templates.
 */
// *****************************************************************************************************
// Start Session
// *****************************************************************************************************
session_start();
// *****************************************************************************************************
// Get POST request values
// *****************************************************************************************************
$data = $_POST;
// *****************************************************************************************************
// funtions repository area  :o)
// *****************************************************************************************************
function ecrypt_session_id($str) { //<<---------------------// This funtion will encrypt the
    $result   = '';                                         // session id too create a url
    $key      = 'seguridad';                                // safe temp directory.
    for($i=0; $i<strlen($str); $i++) {
        $char      = substr($str, $i, 1);
        $keychar   = substr($key, ($i % strlen($key))-1, 1);
        $char      = chr(ord($char)+ord($keychar));
        $result   .= $char;
    }
    $url_safe     = rtrim(base64_encode($result),'+=/');
    return $url_safe;
}
function copy_directory( $source, $destination ) { //<<-----// This funtion will copy template
	if ( is_dir( $source ) ) {                              // dir to temp dir, chmod directires
		@mkdir( $destination );                             // to 0755, and chmod files to 0644.
		chmod($destination, 0755);
        $directory = dir( $source );
		while ( FALSE !== ( $readdirectory = $directory->read() ) ) {
			if ( $readdirectory == '.' || $readdirectory == '..' ) {
				continue;
			}
			$PathDir = $source . '/' . $readdirectory;
			if ( is_dir( $PathDir ) ) {
				copy_directory( $PathDir, $destination . '/' . $readdirectory );
                chmod($destination . '/' . $readdirectory, 0755);
				continue;
			}
			copy( $PathDir, $destination . '/' . $readdirectory );
            chmod($destination . '/' . $readdirectory, 0755);
		}
		$directory->close();
	}else {
		copy( $source, $destination );
        chmod($destination, 0644);
	}
}
// *****************************************************************************************************
// Lets define a few variables values
// *****************************************************************************************************
$root                 = $_SESSION['root']; //<<-----------------------------// defined at index.php
$template             = $_POST['themeTemplate']."/"; //<<-------------------// $_POST gray/access/default
$tmp_dir              = 'tmp/'; //<<----------------------------------------// define the temporary dir
$theme_dir            = ecrypt_session_id(session_id()); //<<---------------// encrypted url safe theme dir
$theme_path           = $root . $tmp_dir . $theme_dir; //<<-----------------// $theme_dir full path
$workingTheme         = $tmp_dir.$theme_dir."/resources/css/new-theme.css"; // compiled css style send @ callback
$theme_template       = "theme_templates/".$template; //<<------------------// template use to create tmp folder
$theme_template_path  = $root."/".$theme_template; //<<---------------------// $theme_template full path
$sass_dir_path        = $theme_path . '/resources/sass'; //<<---------------// sass dir to compile
$win_sass_dir_path    = str_replace('/','\\',$sass_dir_path); //<<----------// $sass_dir_path (windows)
$error                = false; //<<-----------------------------------------// error set to false by default
// *****************************************************************************************************
// Lets clean the tmp/ directory of old stuff
// *****************************************************************************************************
foreach (glob($root . $tmp_dir.'*') as $Filename) {
    $FileCreationTime = filectime($Filename); //<<--------------------------// Read file creation time
    $FileAge = time() - $FileCreationTime; //<<-----------------------------// Calculate file age in seconds
    if ($FileAge > (10 * 60) && $Filename != $root.$tmp_dir.'README'){ //<<-// If more than 10 min
        unlink($Filename); //<<---------------------------------------------// Delete file
    }
}
// *****************************************************************************************************
// Check if theme path exist... if not, lets make it!
// *****************************************************************************************************
if (!file_exists($theme_path)){
    mkdir($theme_path, 0755, true);
    chmod($theme_path, 0755);
}
// *****************************************************************************************************
// Copy theme template to temp folder
// *****************************************************************************************************
copy_directory( $theme_template_path, $theme_path );
// *****************************************************************************************************
// Handle the theme logic / sass vars /
// *****************************************************************************************************

// TODO: Thinking!!!

// *****************************************************************************************************
// Compilie new theme  ||  sass -v 3.1.1 is required
// *****************************************************************************************************
if (strtoupper(substr(PHP_OS, 0, 3)) === 'WIN') { //<<----------------------// If windows...
    $WshShell = new COM('WScript.Shell') or die ("Could not initialise WScript.Shell object.");;
    $wErr = $WshShell->Run('compass compile '.$win_sass_dir_path, 0, true);
} else { //<<---------------------------------------------------------------// not windows...
    $cmd = 'compass compile '.$sass_dir_path;
    exec( $cmd, $exec_results, $uErr);
}
if ($wErr == 1 || $uErr == 127 ){ //<<--------------------------------------// manage compile error...
    $error = true;
}
// *****************************************************************************************************
// Log activity
// *****************************************************************************************************

// TODO: Log without using database

// *****************************************************************************************************
// debugging stuff
// *****************************************************************************************************
// $error = true;
// echo '<pre>';
// print_r($cmd);
// print_r($data);
// print_r($sass_dir_path);
// echo '</pre>';

// *****************************************************************************************************
// check for $error and sent callback
// *****************************************************************************************************
if($error == true ){
    echo '{"success":false, "error":{"title":"Oops!", "msg":"Something went wrong during the compiling prosess :o(" }}';
}else{
    echo '{"success":true, "theme":"'.$workingTheme.'"}';
}
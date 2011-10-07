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
// funtion to encrypt session id and copy directories
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
    $url_safe     = rtrim(base64_encode($result),'+=/');
    return $url_safe;
}
function copy_directory( $source, $destination ) {
	if ( is_dir( $source ) ) {
		@mkdir( $destination );
		chmod($destination, 0777);
        $directory = dir( $source );
		while ( FALSE !== ( $readdirectory = $directory->read() ) ) {
			if ( $readdirectory == '.' || $readdirectory == '..' ) {
				continue;
			}
			$PathDir = $source . '/' . $readdirectory;
			if ( is_dir( $PathDir ) ) {
				copy_directory( $PathDir, $destination . '/' . $readdirectory );
                chmod($destination . '/' . $readdirectory, 0777);
				continue;
			}
			copy( $PathDir, $destination . '/' . $readdirectory );
            chmod($destination . '/' . $readdirectory, 0777);
		}
		$directory->close();
	}else {
		copy( $source, $destination );
        chmod($destination, 0777);
	}
}
function chmod_R($path, $filemode, $dirmode) {
    if (is_dir($path) ) {
        $dh = opendir($path);
        while (($file = readdir($dh)) !== false) {
            if($file != '.' && $file != '..') {  // skip self and parent pointing directories
                $fullpath = $path.'/'.$file;
                chmod_R($fullpath, $filemode,$dirmode);
            }
        }
        closedir($dh);
    } 
}

// *****************************************************************************************************
// Lets define a few variables values
// *****************************************************************************************************
$root                 = $_SESSION['root'];                                  // defined at index.php
$template             = $_POST['themeTemplate']."/";                        // $_POST["theme_template"];
$tmp_dir              = 'tmp/';                                             // define the temporary dir
$theme_dir            = ecrypt_session_id(session_id());                    // encrypt the theme dir name
$theme_path           = $root . $tmp_dir . $theme_dir;                      // full path apended
$workingTheme         = $tmp_dir.$theme_dir."/resources/css/new-theme.css"; // compiled css style
$theme_template       = "theme_templates/".$template;                       // template (gray/access/default)
$theme_template_path  = $root."/".$theme_template;                          // template path
$sass_dir_path        = $theme_path . '/resources/sass';                    // sass dir to compile
$win_sass_dir_path    = str_replace('/','\\',$sass_dir_path);               // sass dir to compile (windows)
$error                = false;                                              // error set to false by default
// *****************************************************************************************************
// Check if theme path exist... if not, lets make it!
// *****************************************************************************************************
if (!file_exists($theme_path)){
    mkdir($theme_path, 0777, true);
    chmod($theme_path, 0777);

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
// Compilie new theme
// *****************************************************************************************************

if (strtoupper(substr(PHP_OS, 0, 3)) === 'WIN') { //<<-----------------------// If windows...
    //echo $win_sass_dir_path;
    $WshShell = new COM('WScript.Shell') or die ("Could not initialise WScript.Shell object.");;
    $oExec = $WshShell->Run('compass compile '.$win_sass_dir_path, 0, true);
} else { //<<----------------------------------------------------------------// not windows...

    $cmd = 'gem list';
    exec( $cmd, $results, $err);

    echo '<pre>';
    print_r($cmd);
    echo '<br/>';
    print_r($results);
    echo '</pre>';
}
//if ($oExec == 1){ //<<-------------------------------------------------------// manage compile error...
//    $error = true;
//}
/// *****************************************************************************************************
// Log activity
// *****************************************************************************************************

// TODO: Log without using database

// *****************************************************************************************************
// debugging stuff
// *****************************************************************************************************
// $error = true;
// echo '<pre>';
// print_r($data);
// echo '</pre>';

// *****************************************************************************************************
// check for $error and sent callback
// *****************************************************************************************************
if($error == true ){
    echo '{"success":false, "error":{"title":"Oops!", "msg":"Something went wrong during the compiling prosess :o(" }}';
}else{
    echo '{"success":true, "theme":"'.$workingTheme.'"}';
}
<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Ernesto J Rodriguez (Certun)
 * Date: 10/8/11
 * Time: 2:15 PM
 * To change this template use File | Settings | File Templates.
 */
// *********************************************************************************************************************
// Start Session
// *********************************************************************************************************************
session_start();
// *********************************************************************************************************************
// Lets define a few variables values
// *********************************************************************************************************************
$theme_path         = $_SESSION['theme_path']; //<<-----------------------------------// save tmp theme_path for download
$dir_to_zip         = $theme_path.'/resources';
$download_pkg       = $theme_path.'/new_theme.zip';

$win_dir_to_zip     = str_replace('/','\\',$theme_path.'/resources');
$win_download_pkg   = str_replace('/','\\',$theme_path.'/resources/new_theme.zip');

$error              = false;
// *********************************************************************************************************************
// Zip it!
// *********************************************************************************************************************
if (strtoupper(substr(PHP_OS, 0, 3)) === 'WIN') { //<<----------------------// If windows... lets use WinRar
    $WshShell       = new COM('WScript.Shell');
    $wErr           = $WshShell->Run('winrar a -r -afzip -ep1 '.$win_download_pkg.' '.$win_dir_to_zip, 0, true);
    $download_pkg   = $win_download_pkg;
} else { //<<---------------------------------------------------------------// not windows...
    if (!system('zip -r '.$download_pkg.' '.$dir_to_zip)) {
        $error      = true;
        $msg        = 'Somethin went wrong during the zip prossess';
    }
}
chmod($download_pkg, 0755);
// *********************************************************************************************************************
// check for $error and sent callback
// *********************************************************************************************************************
if($error == true ){
    echo '{"success":false, "error":{"title":"Oops!", "msg":"'.$msg.'" }}';
}else{
    echo '{"success":true, "pkg":"'.$download_pkg.'"}';
}
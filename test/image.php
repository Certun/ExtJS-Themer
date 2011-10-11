<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Ernesto J Rodriguez (Certun)
 * Date: 10/9/11
 * Time: 9:23 PM
 * @param string $path
 * @param int $level
 * @internal param $im
 * @internal param $red
 * @internal param $green
 * @internal param $blue
 * @return void
 */

function getDirectory( $path = '.', $level = 0 ){
    $ignore = array( 'cgi-bin', '.', '..' ); //<<-------------------// Directories to ignore when listing output. Many hosts will deny PHP access to the cgi-bin.
    $dh = @opendir( $path ); //<<-----------------------------------// Open the directory to the handle $dh
    while( false !== ( $file = readdir( $dh ) ) ){ //<<-------------// Loop through the directory
        if( !in_array( $file, $ignore ) ){ //<<---------------------// Check that this file is not to be ignored
            $spaces = str_repeat( '&nbsp;', ( $level * 4 ) ); //<<--// Just to add spacing to the list, to better show the directory tree
            if( is_dir( "$path/$file" ) ){ //<<---------------------// Its a directory, so we need to keep reading down...
                echo "<br /><strong>$path $file</strong> (DIR)<br />";
                getDirectory( "$path/$file", ($level+1) ); //<<-----// Re-call this same function but on a new directory. this is what makes function recursive.
            } else {
                echo "$path $file<br />"; //<<----------------------// Just print out the filename for now!
            }
        }
    }
    closedir( $dh );    // Close the directory handle
}

if ($_POST){
    function ImageSelectiveColor($im,$red,$green,$blue){
        for( $i=0 ; $i<imagecolorstotal($im) ; $i++){
            $col        = ImageColorsForIndex($im,$i);
            $red_set    = $red / 150 * $col['red'];
            $green_set  = $green / 150 * $col['green'];
            $blue_set   = $blue / 150 * $col['blue'];
            if($red_set>255)    $red_set    = 255;
            if($green_set>255)  $green_set  = 255;
            if($blue_set>255)   $blue_set   = 255;
            imagecolorset($im,$i,$red_set,$green_set,$blue_set);
        }
      return $im;
    }
    $imgname = "test.gif";
    $im = imagecreatefromgif($imgname);
    if(isset($_POST['1'])){
        $r = 30;
        $g = 115;
        $b = 115;
    } elseif(isset($_POST['2'])){
        $r = 115;
        $g = 30;
        $b = 115;
    } elseif(isset($_POST['3'])){
        $r = 115;
        $g = 115;
        $b = 30;
    } elseif(isset($_POST['4'])){
        $r = 190;
        $g = 20;
        $b = 150;
    } elseif(isset($_POST['5'])){
        $r = 75;
        $g = 110;
        $b = 190;
    }
    $im = ImageSelectiveColor($im,$r,$g,$b);
    $imgname = "result.gif";
    imagegif($im, $imgname ); // save image as gif
    imagedestroy($im);
    header('Location: image.php');
}
?>
<html>
    <head></head>
    <body>
        <form id="color" action="" method="POST">
            <input type="submit" value="submit" name="1" />
            <input type="submit" value="submit" name="2" />
            <input type="submit" value="submit" name="3" />
            <input type="submit" value="submit" name="4" />
            <input type="submit" value="submit" name="5" />
        </form>
        <br/><br/>
        <img src="test.gif" alt="" />
        <img src="result.gif?<?php echo rand(5, 1000) ?>" alt="" />
        <br/><br/>
        <h2>This is to test the getDirectory funtion</h2>
        <p>This funtion will read all the file inste the images dir to then GD the images</p>
        <?php getDirectory( "../theme_templates/default/resources/themes/images" ); ?>
    </body>
</html>

<?php
$theme = $_GET['theme'];
?>
<html>
    <head>
        <title>Ext JS 4 Themes</title>
        <link rel="stylesheet" type="text/css" href="<?php print $theme ?>" />
        <script type="text/javascript" src="ext-all.js"></script>
        <script type="text/javascript" src="theme.min.js"></script>
        <style type="text/css">
            .x-mask {
                z-index:  200000;
            }
            .x-mask-msg {
                z-index:  200001;
                left:     45%;
                top:      50%;
            }
        </style>
    </head>
    <body>
        <div id="loading-mask" class="x-mask"></div>
        <div id="x-mask-msg">
            <div id="loading" class="x-mask-msg">
                <div>Loading Theme Preview</div>
            </div>
        </div>
    </body>
</html>
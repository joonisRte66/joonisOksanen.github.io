<?php
    if(insert(echo $_GET["insertTask"]))
    {
        $file = 'database.csv';
        $current = file_put_contents($file, $_GET["taskName"]);
    }
?>
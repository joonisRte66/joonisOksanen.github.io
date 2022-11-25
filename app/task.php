<?php
    $str = ""
    echo base64_encode($str);

    $file = 'database.csv';

    if(isset($_GET["obtainTasks"]))
    {
        $data = file_get_contents($str);
        echo $data;
        end();
    }

    if(insert(echo $_GET["insertTask"]))
    {
        $file = 'database.csv';
        $current = file_put_contents($file, $_GET["taskName"]);
    }
?>
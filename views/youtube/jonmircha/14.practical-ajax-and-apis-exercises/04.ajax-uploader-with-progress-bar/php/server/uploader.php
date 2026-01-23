<?php
    // echo "Hola, respuesta desde el servidor.";
    /**
     * For Example. Output:
     * array(1) {
     *  ["file"]=>
     *  array(5) {
     *    ["name"]=>
     *    string(12) "YouTubePosterLive.png"
     *    ["type"]=>
     *    string(9) "image/png"
     *    ["tmp_name"]=>
     *    string(49) "C:\Bitnami\wampstack-7.3.10-0\php\tmp\php24A6.tmp"
     *    ["error"]=>
     *    int(0)
     *    ["size"]=>
     *    int(196446)
     *  } 
     * }
     */
    // var_dump($_FILES);

    if(isset($_FILES["file"])) {
        $name        = $_FILES["file"]["name"];
        $file        = $_FILES["file"]["tmp_name"];
        $error       = $_FILES["file"]["error"];
        $destination = "../files/$name";
        $upload      = move_uploaded_file($file, $destination);

        if($upload) {
            $res = array(
                "err"        => false,
                "status"     => http_response_code(200),
                "statusText" => "Archivo $name subido con éxito.",
                "files"      => $_FILES["file"]
            );
        } else {
            $res = array(
                "err"        => true,
                "status"     => http_response_code(400),
                "statusText" => "Error al subir el archivo $name",
                "files"      => $_FILES["file"]
            );
        }

        echo json_encode($res);
    }

?>
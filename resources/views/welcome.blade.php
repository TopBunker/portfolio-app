<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Portfolio</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />

         <!-- Styles and scripts-->
         @vite(["resources/js/app.js"])
         @vite(["/node_modules/bootstrap/dist/css/bootstrap.min.css"])

    </head>
    <body>
        <div class="container-fluid">
            <div class="row background-layer">
                <div class="col-md-3 menu">
                    <div id="panell" class="position-fixed top-0 end-0">
                    </div>
                </div>
                <div class="col-md-7 main">
                    <div id="panelm">
                    </div>
                </div>
                <div class="col-md-2 bar">
                    <div id="panelr" class="position-fixed top-0 start-0">
                    </div>
                </div>
            </div>
                
         </div>
        @vite(["/node_modules/bootstrap/dist/js/bootstrap.min.js"])
        @vite(["resources/js/pixipanel.js"])

    </body>
</html>

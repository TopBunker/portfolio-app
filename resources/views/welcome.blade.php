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
  </head>
  <body>
    <div id="canvas" class="z-n1 bg-transparent" ></div>
    <div id="dom"></div>
    <div class="container-fluid bg-transparent z-1">
      <div id="screen" class="row bg-transparent">
        <div id="lPanel" class="col-md-2 col-lg-3 bg-transparent">
          <div>left</div>
        </div>
        <div id="gridPanel" class="col-md-9 col-lg-7 bg-transparent">
            <div id="r1" class="row z-0">
              <div id="r1c1" class="col">
                <div id="r1c1r1" class="row">
                    <div id="r1c1r1c1" class="col box">

                    </div>
                    <div id="r1c1r1c2" class="col box">

                    </div>
                    <div id="r1c1r1c3" class="col box">

                    </div>
                </div>
                <div id="r1c1r2" class="row">
                    <div id="r1c1r2c1" class="col box">

                    </div>
                    <div id="r1c1r2c2" class="col box">

                    </div>
                    <div id="r1c1r2c3" class="col box">

                    </div>
                </div>
                <div id="r1c1r3" class="row">
                    <div id="r1c1r3c1" class="col box">

                    </div>
                    <div id="r1c1r3c2" class="col box">

                    </div>
                    <div id="r1c1r3c3" class="col box">

                    </div>
                </div>
              </div>
              <div id="r1c2" class="col">
                <div id="r1c2r1" class="row">
                    <div id="r1c2r1c1" class="col box">

                    </div>
                    <div id="r1c2r1c2" class="col box">

                    </div>
                    <div id="r1c2r1c3" class="col box">

                    </div>
                </div>
                <div id="r1c2r2" class="row">
                    <div id="r1c2r2c1" class="col box">

                    </div>
                    <div id="r1c2r2c2" class="col box">

                    </div>
                    <div id="r1c2r2c3" class="col box">

                    </div>
                </div>
                <div id="r1c2r3" class="row">
                    <div id="r1c2r3c1" class="col box">

                    </div>
                    <div id="r1c2r3c2" class="col box">

                    </div>
                    <div id="r1c2r3c3" class="col box">

                    </div>
                </div>
              </div>
              <div id="r1c3" class="col">
                <div id="r1c3r1" class="row">
                    <div id="r1c3r1c1" class="col box">

                    </div>
                    <div id="r1c3r1c2" class="col box">

                    </div>
                    <div id="r1c3r1c3" class="col box">

                    </div>
                </div>
                <div id="r1c3r2" class="row">
                    <div id="r1c3r2c1" class="col box">

                    </div>
                    <div id="r1c3r2c2" class="col box">

                    </div>
                    <div id="r1c3r2c3" class="col box">

                    </div>
                </div>
                <div id="r1c3r3" class="row">
                    <div id="r1c3r3c1" class="col box">

                    </div>
                    <div id="r1c3r3c2" class="col box">

                    </div>
                    <div id="r1cr3c3" class="col box">

                    </div>
                </div>

              </div>
            </div>
            <div id="r2" class="row z-0">
            <div id="r2c1" class="col">
                <div id="r2c1r1" class="row">
                    <div id="r2c1r1c1" class="col box">

                    </div>
                    <div id="r2c1r1c2" class="col box">

                    </div>
                    <div id="r2c1r1c3" class="col box">

                    </div>
                </div>
                <div id="r2c1r2" class="row">
                    <div id="r2c1r2c1" class="col box">

                    </div>
                    <div id="r2c1r2c2" class="col box">

                    </div>
                    <div id="r2c1r2c3" class="col box">

                    </div>
                </div>
                <div id="r2c1r3" class="row">
                    <div id="r2c1r3c1" class="col box">

                    </div>
                    <div id="r2c1r3c2" class="col box">

                    </div>
                    <div id="r2c1r3c3" class="col box">

                    </div>
                </div>
            </div>
            <div id="r2c2" class="col">
                <div id="r2c2r1" class="row">
                    <div id="r2c2r1c1" class="col box">

                    </div>
                    <div id="r2c2r1c2" class="col box">

                    </div>
                    <div id="r2c2r1c3" class="col box">

                    </div>
                </div>
                <div id="r2c2r2" class="row">
                    <div id="r2c2r2c1" class="col box">
                        
                    </div>
                    <div id="r2c2r2c2" class="col box">

                    </div>
                    <div id="r2c2r2c3" class="col box">

                    </div>
                </div>
                <div id="r2c2r3" class="row">
                    <div id="r2c2r3c1" class="col box">

                    </div>
                    <div id="r2c2r3c2" class="col box">

                    </div>
                    <div id="r2c2r3c3" class="col box">

                    </div>
                </div>
            </div>
            <div id="r2c3" class="col">
                <div id="r2c3r1" class="row">
                    <div id="r2c3r1c1" class="col box">

                    </div>
                    <div id="r2c3r1c2" class="col box">

                    </div>
                    <div id="r2c3r1c3" class="col box">

                    </div>
                </div>
                <div id="r2c3r2" class="row">
                    <div id="r2c3r2c1" class="col box">

                    </div>
                    <div id="r2c3r2c2" class="col box">

                    </div>
                    <div id="r2c3r2c3" class="col box">

                    </div>
                </div>
                <div id="r2c3r3" class="row">
                    <div id="r2c3r3c1" class="col box">

                    </div>
                    <div id="r2c3r3c2" class="col box">

                    </div>
                    <div id="r2cr3c3" class="col box">

                    </div>
                </div>

            </div>
            </div>
            <div id="r3" class="row z-0">
            <div id="r3c1" class="col">
                <div id="r3c1r1" class="row">
                    <div id="r3c1r1c1" class="col box">

                    </div>
                    <div id="r3c1r1c2" class="col box">

                    </div>
                    <div id="r3c1r1c3" class="col box">

                    </div>
                </div>
                <div id="r3c1r2" class="row">
                    <div id="r3c1r2c1" class="col box">

                    </div>
                    <div id="r3c1r2c2" class="col box">

                    </div>
                    <div id="r3c1r2c3" class="col box">

                    </div>
                </div>
                <div id="r3c1r3" class="row">
                    <div id="r3c1r3c1" class="col box">

                    </div>
                    <div id="r3c1r3c2" class="col box">

                    </div>
                    <div id="r3c1r3c3" class="col box">

                    </div>
                </div>

            </div>
            <div id="r3c2" class="col">
                <div id="r3c2r1" class="row">
                    <div id="r3c2r1c1" class="col box">

                    </div>
                    <div id="r3c2r1c2" class="col box">

                    </div>
                    <div id="r3c2r1c3" class="col box">

                    </div>
                </div>
                <div id="r3c2r2" class="row">
                    <div id="r3c2r2c1" class="col box">

                    </div>
                    <div id="r3c2r2c2" class="col box">

                    </div>
                    <div id="r3c2r2c3" class="col box">

                    </div>
                </div>
                <div id="r3c2r3" class="row">
                    <div id="r3c2r3c1" class="col box">

                    </div>
                    <div id="r3c2r3c2" class="col box">

                    </div>
                    <div id="r3c2r3c3" class="col box">

                    </div>
                </div>
            </div>
            <div id="r3c3" class="col">
                <div id="r3c3r1" class="row">
                    <div id="r3c3r1c1" class="col box">

                    </div>
                    <div id="r3c3r1c2" class="col box">

                    </div>
                    <div id="r3c3r1c3" class="col box">

                    </div>
                </div>
                <div id="r3c3r2" class="row">
                    <div id="r3c3r2c1" class="col box">

                    </div>
                    <div id="r3c3r2c2" class="col box">

                    </div>
                    <div id="r3c3r2c3" class="col box">

                    </div>
                </div>
                <div id="r3c3r3" class="row">
                    <div id="r3c3r3c1" class="col box">

                    </div>
                    <div id="r3c3r3c2" class="col box">

                    </div>
                    <div id="r3c3r3c3" class="col box">

                    </div>
                </div>

            </div>
            </div>
        </div>
        <div id="rPanel" class="col-md-1 col-lg-2 bg-transparent">
          <div>right</div>
        </div>
      </div>
    </div>
    <div id="topCanvas" class="z-2 bg-transparent" ></div>
  </body>
</html>

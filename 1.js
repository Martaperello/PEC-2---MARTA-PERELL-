
          function CambiaColor() {
          document.getElementById("cambio").style.color = "red";       
          }

            var express = require('express');
            var app = express();
            
            app.get('/', function (req, res) {
              res.send('Bienvenid@ a mi página');
            });
            
            app.listen(3000, function () {
              console.log('Tu mensaje está en el puerto 3000');
            });

            


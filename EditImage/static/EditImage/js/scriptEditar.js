var imgWidth, imgHeight, datosPrim;
$(document).on("ready",function(){
    var canvas = document.getElementById("miCanvas");
    $("#btnBN").on("click",function(){
        aBlancoyNegro(ctx,canvas);
        });
    var ctx= canvas.getContext("2d");
    var img = new Image();
    img.src= "static/EditImage/img/JellyFish.jpg";
    img.onload = function(){
        imgWidth = this.width;
        imgHeight = this.height;
        canvas.width= imgWidth/2;
        canvas.height=imgHeight/2;
        ctx.drawImage(this,0,0,imgWidth/2,imgHeight/2);
        var datosImagen = ctx.getImageData(0,0,imgWidth/2,imgHeight/2);
        datosPrim = datosImagen.data;
        };
    });
function aBlancoyNegro(ctx,canvas){
    var data = ctx.getImageData(0,0,imgWidth/2,imgHeight/2);
    for (var index = 0; index < data.data.length; index+=4) {
        var rojo = data.data[index];
        var verde = data.data[index + 1];
        var azul = data.data[index+ 2];
        var valor = (rojo + verde + azul) / 3;
  
        data.data[index] = valor;
        data.data[index + 1] = valor;
        data.data[index + 2] = valor;
      }
  
      ctx.putImageData(data, 0, 0);
    }
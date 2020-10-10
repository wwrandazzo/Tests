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
    alert("has presionado el boton BN");
    var datosImagen = ctx.getImageData(0,0,imgWidth/2,imgHeight/2);
    var pixels = datosImagen.data;
    for (var i=0; i<pixels.lenght; i+=4){
        //calcula la luminosidad percibida para este pixel
        var luminosidad = 0.34 * pixels.data[i] + 0.5 * pixels.data[i+1] + 0.16 * pixels.data[i+2]
        pixels[i] = luminosidad; // rojo
        pixels[i + 1] = luminosidad; // verde
        pixels[i + 2]= luminosidad; // azul
        //datosImagen.data[i] = luminosidad; // rojo
        //datosImagen.data[i + 1] = luminosidad; // verde
        //datosImagen.data[i + 2]= luminosidad; // azul
        //datosImagen.data[i] = 255 - pidatosImagen.data[i];
        //datosImagen.data[i+1] = 255 - datosImagen.data[i+1];
        //datosImagen.data[i+2] = 255 - datosImagen.data[i+2];
        }
    ctx.putImageData(datosImagen,50,0);
}
var imgWidth, imgHeight, datosPrim, x=0, y=0, dibujando=false;

$(document).on("ready",function(){
    var canvas = document.getElementById("miCanvas");
    $("#btnBN").on("click",function(){
        aBlancoyNegro(ctx,canvas);
        });
    $("#btnBR").on("click",function(){
        RestaurarImagen(ctx);
        });
    var ctx= canvas.getContext("2d");
    //prueba
    var rect=canvas.getBoundingClientRect();
    canvas.addEventListener('mousedown',function(e){
        //alert("Aca entro a mousedown")
        x=e.clientX-rect.left;
        y=e.clientY-rect.top;
        dibujando=true;
    });
    canvas.addEventListener('mousemove',function(e){
        if (dibujando===true){
            dibujar(x,y,e.clientX-rect.left,e.clientY-rect.top)
            x=e.clientX-rect.left;
            y=e.clientY-rect.top;
        }
    });
    canvas.addEventListener('mouseup',function(e){
        if (dibujando===true){
            dibujar(x,y,e.clientX-rect.left,e.clientY-rect.top)
            x=0;
            y=0;
            dibujando=false;
        }
    
    });
    function dibujar(x1,y1,x2,y2){
        ctx.beginPath();
        ctx.strokeStyle='yellow';
        ctx.lineWidth=2;
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.stroke();
        ctx.closePath();
    }
    //
    var img = new Image();
    img.src= "static/EditImage/img/JellyFish.jpg";
    img.onload = function(){
        imgWidth = this.width;
        imgHeight = this.height;
        canvas.width= imgWidth/2;
        canvas.height=imgHeight/2;
        ctx.drawImage(this,0,0,imgWidth/2,imgHeight/2);
        var datosImagen = ctx.getImageData(0,0,imgWidth/2,imgHeight/2);
        datosPrim = datosImagen;
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
function RestaurarImagen(ctx){
    ctx.putImageData(datosPrim, 0, 0);
}

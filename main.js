var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");

function new_image()
{
   fabric.Image.fromURL('aniversarioImagem.png', function(Img) {
    blockiImageObject = Img;
    blockiImageObject.scaleToWidth(700);
    blockiImageObject.scaleToHeight(500);
    blockiImageObject.set({
        top:0,
        left:0
    });
    canvas.add(blockiImageObject);
   });




	


}

function playSound(){
   x.play();
}

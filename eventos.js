var estado = 0;
var color = "black";
var grosor=1;
var area = document.getElementById('area_de_dibujo');
var papel = area.getContext("2d");
var x;
var y;

function defcolor(c){
color=c;
}
function defgrosor(g){
grosor=g;
}
document.addEventListener("mousedown",presionarMouse);
document.addEventListener("mouseup",soltarMouse);
document.addEventListener("mousemove",dibujarMouse);

dibujarLinea("black", 0, 0, 400, 0, papel);
dibujarLinea("black",400, 0, 400, 400, papel);
dibujarLinea("black", 400, 400, 0, 400, papel);
dibujarLinea("black", 0, 400, 0, 0, papel);


function dibujarMouse(evento){
  if (estado == 1) {
  dibujarLinea(color, x, y, evento.layerX, evento.layerY, papel);
    }
  x = evento.layerX;
  y = evento.layerY;
  }

  function presionarMouse(evento){
     estado = 1;
     x = evento.layerX;
     y = evento.layerY;
}

function soltarMouse(evento){
   estado = 0;
   x = evento.layerX;
   y = evento.layerY;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle=color;
    lienzo.lineWidth=grosor;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
    }

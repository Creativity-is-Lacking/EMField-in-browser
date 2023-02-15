var canvas = document.getElementById('cvs');
var c = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
canvas.style.width = "100%";
canvas.style.height = "100%";
var offx = canvas.offsetLeft;
var offy = canvas.offsetTop;
var e_0 = 8.854187817*(10**-12);
var charges = new Array();

addEventListener("resize", (event) => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  renderObjs();
});

$(document).ready(function(){
  let circ = new circleCharge(0,canvas.width/2,canvas.height/2,5);
  charges.push(circ)
});

function renderObjs() {
  c.clearRect(0,0,canvas.width,canvas.height);
  for(var i=0;i<charges.length;i++){
    charges[i].draw();
  }
}

function circleCharge(id,x,y,charge){
  this.x = x;
  this.y = y;
  this.charge = charge;
  this.id = id;
  this.draw = function(){
    c.beginPath();
    c.arc(x,y,15,0,2*Math.PI, false);
    c.fillStyle = 'rgb(0,0,0)';
    c.fill();
  }
}

function createNdArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}

function Efield(width, height){
  this.width = width;
  this.height = height;
  this.fieldMagnitude = createNdArray(width, height);
}

function shadeField(){
  var field = new Efield(canvas.width,canvas.height);
  for(let x = 0; x < canvas.width; x++){
    for(let y = 0; y < canvas.height; y++){
      let fieldAtPoint = 0;
      for(let i = 0; i < charges.length; i++){
        let r = Math.sqrt((x-charges[i].x)**2 + (y-charges[i].y)**2);
        fieldAtPoint += (charges[i].charge/(4*Math.PI*e_0*(r**2)));
      }
      //console.log("E-field is " + fieldAtPoint + " at point (" + x + ", " + y + ")");
      field.fieldMagnitude[x][y] = fieldAtPoint;
    }
  }
  //drawpoints and map colors
  return field;
}

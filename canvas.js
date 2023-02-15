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

function shadeField(){
  for(let x = 0; x < canvas.width; x++){
    for(let y = 0; y < canvas.height; y++){
      let fieldAtPoint = 0;
      for(let i = 0; i < charges.length; i++){
        let r = Math.sqrt((x-charges[i].x)**2 + (y-charges[i].y)**2);
        fieldAtPoint += (charges[i].charge/(4*Math.PI*e_0*(r**2)));
      }
      var hue = (fieldAtPoint/(900000))%320
      c.fillStyle = "hsl("+hue+",100%, 50%)";
      c.fillRect(x, y, 1, 1 );
    }
  }
}

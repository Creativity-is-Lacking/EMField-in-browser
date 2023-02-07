var canvas = document.getElementById('cvs');
var c = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var offx = canvas.offsetLeft;
var offy = canvas.offsetTop;
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

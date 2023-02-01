var canvas = document.getElementById('cvs');
var c = canvas.getContext('2d');
canvas.height = window.innerHeight - document.getElementsByClassName("nav-ul")[0].clientHeight;
canvas.width = window.innerWidth;
var offx = canvas.offsetLeft;
var offy = canvas.offsetTop;
var charges = new Array();

addEventListener("resize", (event) => {
  canvas.height = window.innerHeight - document.getElementsByClassName("nav-ul")[0].clientHeight;
  canvas.width = window.innerWidth;
  ocan.height = canvas.height;
  ocan.width = canvas.width;
  renderObjs();
});

$(document).ready(function(){
  let c = new chargeCircle;
  charges.push(c)
});

function renderObjs() {
  oc.clearRect(0,0,ocan.width,ocan.height);
  c.clearRect(0,0,canvas.width,canvas.height);
  for(var i=0;i<charges.length;i++){
    charges[i].draw();
  }
}

function circleCharge(id,x,y,w,h,charge){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.charge = charge;
  this.id = id;
  this.draw = function(){
    c.beginPath();
    c.arc(x,y,5,0,2*Math.PI, false);
    c.fillStyle = rgb(0,0,0);
    c.fill();
  }
}

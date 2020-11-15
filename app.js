var canvas=document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c=canvas.getContext('2d');

var k=10;
var x=300;
var y=300;
var x1=innerWidth;
var x2=Math.floor(x1/2);
var y1 = Math.floor(Math.random() * (400 - 40) + 40);
var y2 = Math.floor(Math.random() * (400 - 40) + 40);
var rate=75;
var alertflag=true;

//setInterval(function()
var myFunction = function() 
  {
  c.clearRect(0,0,innerWidth,innerHeight);  
  c.fillRect(x,y,20,20);
  c.fillRect(0,580,innerWidth,20);
  c.fillRect(0,20,innerWidth,20);
  y=y+k;
  c.fillRect(x1,40,40,y1);
  c.fillRect(x1,y1+180,40,400-y1);
  c.fillRect(x2,40,40,y2);
  c.fillRect(x2,y2+180,40,400-y2);
  x1=x1-k;
  x2=x2-k;
  if(x1<=-40)
  	{x1=innerWidth;
    y1 = Math.floor(Math.random() * (400 - 40) + 40);}
  if(x2<=-40)
  	{x2=innerWidth;
    y2 = Math.floor(Math.random() * (400 - 40) + 40);}
  if((y==580 || y==40) || (x>=x1 && x<=x1+40 && !(y>=y1 && y<=y1+180)) || (x>=x2 && x<=x2+40 && !(y>=y2 && y<=y2+180)) && alertflag)
    {alert("Game Over : Do you want to restart?");
     alertflag=false;
     location.reload(true); }
     rate-=0.005;
     setTimeout(myFunction, rate);
  }
  
setTimeout(myFunction, rate);
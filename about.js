var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.rect(0, 0, 800, 170);
ctx.fillStyle = "white";
ctx.fill();
		
ctx.fillStyle="black";
ctx.font = "20px Georgia";
ctx.fillText("Virtual Piano", 10, 50);
ctx.font = "10px Verdana";
ctx.fillText("A virtual piano is an application (software) designed to simulate playing a piano (or similar musical instruments, e.g. an organ, etc.) on your", 10, 90);
ctx.font ="10px Verdana";
ctx.fillText("computer. Many are online, but you can also buy software which does the same thing, negating the need for an internet connection. ",10,110);
ctx.font ="10px Verdana";
ctx.fillText("The virtual piano is played using your keyboard and/or mouse and typically comes with many features found on a digital piano, if not more.",10,130);
ctx.font ="7px Verdana";
ctx.fillText("source : Wikipedia",10,150);
window.onload= function()
{
	var cvs = document.getElementById('myCanvas');
	var ctx = cvs.getContext('2d');
	window.addEventListener("keydown", doKeyDown);
			function doKeyDown(e){
			var huruf = String.fromCharCode(e.keyCode);
			console.log(huruf);
			switch(huruf){
			case 'Q' : document.getElementById('sound1').play(); 
			case 'Q' : document.getElementById('sound1').currentTime = 0;			
			case 'Q' : ctx.clearRect(20,180,20,200);			
			case 'Q' : ctx.fillStyle='red';			
			case 'Q' : ctx.fillText("C",20,180);			
			case 'Q' : ctx.fillText();			
			break;
			case 'W' : document.getElementById('sound2').play(); 
			case 'W' : document.getElementById('sound2').currentTime = 0; 
			case 'W' : ctx.clearRect(20,180,20,200);			
			case 'W' : ctx.fillStyle='red';			
			case 'W' : ctx.fillText("D",20,180);			
			case 'W' : ctx.fillText();				
			break;
			case 'E' : document.getElementById('sound3').play(); 
			case 'E' : document.getElementById('sound3').currentTime = 0; 
			case 'E' : ctx.clearRect(20,180,20,200);			
			case 'E' : ctx.fillStyle='red';			
			case 'E' : ctx.fillText("E",20,180);			
			case 'E' : ctx.fillText();	
			break;
			case 'R' : document.getElementById('sound4').play();
			case 'R' : document.getElementById('sound4').currentTime = 0;
			case 'R' : ctx.clearRect(20,180,20,200);			
			case 'R' : ctx.fillStyle='red';			
			case 'R' : ctx.fillText("F",20,180);			
			case 'R' : ctx.fillText();	
			break;
			case 'T' : document.getElementById('sound5').play();  
			case 'T' : document.getElementById('sound5').currentTime = 0; 
			case 'T' : ctx.clearRect(20,180,20,200);			
			case 'T' : ctx.fillStyle='red';			
			case 'T' : ctx.fillText("G",20,180);			
			case 'T' : ctx.fillText();				
			break;
			case 'Y' : document.getElementById('sound6').play();  
			case 'Y' : document.getElementById('sound6').currentTime = 0; 
			case 'Y' : ctx.clearRect(20,180,20,200);			
			case 'Y' : ctx.fillStyle='red';			
			case 'Y' : ctx.fillText("A",20,180);			
			case 'Y' : ctx.fillText();	
			break;
			case 'U' : document.getElementById('sound7').play();  
			case 'U' : document.getElementById('sound7').currentTime = 0;
			case 'U' : ctx.clearRect(20,180,20,200);			
			case 'U' : ctx.fillStyle='red';			
			case 'U' : ctx.fillText("B",20,180);			
			case 'U' : ctx.fillText();				
			break;
			case 'I' : document.getElementById('sound8').play();  
			case 'I' : document.getElementById('sound8').currentTime = 0; 
			case 'I' : ctx.clearRect(20,180,20,200);			
			case 'I' : ctx.fillStyle='red';			
			case 'I' : ctx.fillText("C '",20,180);			
			case 'I' : ctx.fillText();	
			break;
			case 'O' : document.getElementById('sound9').play();  
			case 'O' : document.getElementById('sound9').currentTime = 0;
			case 'O' : ctx.clearRect(20,180,20,200);			
			case 'O' : ctx.fillStyle='red';			
			case 'O' : ctx.fillText("D '",20,180);			
			case 'O' : ctx.fillText();	
			break;
			case 'P' : document.getElementById('sound10').play();  
			case 'P' : document.getElementById('sound10').currentTime =0;  
			break;
			case 'A' : document.getElementById('sound11').play();  
			case 'A' : document.getElementById('sound11').currentTime = 0;  
			break;
			case 'S' : document.getElementById('sound12').play();  
			case 'S' : document.getElementById('sound12').currentTime = 0;  
			break;
			case 'D' : document.getElementById('sound13').play();  
			case 'D' : document.getElementById('sound13').currentTime = 0;  
			break;
			case 'F' : document.getElementById('sound14').play();  
			case 'F' : document.getElementById('sound14').currentTime = 0;  
			break;
			case 'G' : document.getElementById('sound15').play();  
			case 'G' : document.getElementById('sound15').currentTime = 0;  
			break;
			case 'H' : document.getElementById('sound16').play();  
			case 'H' : document.getElementById('sound16').currentTime = 0;  
			break;
			case 'J' : document.getElementById('sound17').play();  
			case 'J' : document.getElementById('sound17').currentTime = 0;  
			break;
			case 'K' : document.getElementById('sound18').play();  
			case 'K' : document.getElementById('sound18').currentTime = 0;  
			break;
			case 'L' : document.getElementById('sound19').play();  
			case 'L' : document.getElementById('sound19').currentTime = 0;  
			break;
			case 'Z' : document.getElementById('sound20').play();  
			case 'Z' : document.getElementById('sound20').currentTime = 0;  
			break;
			case 'X' : document.getElementById('sound21').play();  
			case 'X' : document.getElementById('sound21').currentTime = 0;  
			break;
			case 'C' : document.getElementById('sound22').play();  
			case 'C' : document.getElementById('sound22').currentTime = 0;  
			break;
			case 'V' : document.getElementById('sound23').play();  
			case 'V' : document.getElementById('sound23').currentTime = 0;  
			break;
			case 'B' : document.getElementById('sound24').play();  
			case 'B' : document.getElementById('sound24').currentTime = 0;  
			break;
			case 'N' : document.getElementById('sound25').play();  
			case 'N' : document.getElementById('sound25').currentTime = 0;  
			break;
			case 'M' : document.getElementById('sound26').play();  
			case 'M' : document.getElementById('sound26').currentTime = 0;  
			break;
			case ',' : document.getElementById('sound27').play();  
			case ',' : document.getElementById('sound27').currentTime = 0;  
			break;
			case '.' : document.getElementById('sound28').play();  
			case '.' : document.getElementById('sound28').currentTime = 0;  
			break;	
			}	
			
			switch(e.keyCode){
			case 188 :  document.getElementById('sound27').play(); 
			case 188 :  document.getElementById('sound27').currentTime = 0; 
			break;
			case 190 :document.getElementById('sound28').play(); 
			case 190 :document.getElementById('sound28').currentTime = 0; 
			}
		}
	
	drawPersegi(ctx);
	testStateStack(ctx);
}

function drawPersegi(ctx)
{
	//(x,y,width,height)
	//fill persegi
	//1
	ctx.fillStyle = 'white';
	ctx.fillRect(20,10,40,150);
	ctx.strokeStyle="black"
	ctx.lineWidth=3;
	ctx.fillStyle="black";
	ctx.font = "12px Times New Roman";
	ctx.fillText("C", 35, 145);
	
	//2
	ctx.fillStyle = 'white';
	ctx.fillRect(62,10,40,150);
	ctx.strokeStyle="black"
	ctx.lineWidth=3;
	ctx.fillStyle="black";
	ctx.font = "12px Times New Roman";
	ctx.fillText("D", 77, 145);
	
	//3
	ctx.fillStyle = 'white';
	ctx.fillRect(104,10,40,150);
	ctx.strokeStyle="black"
	ctx.lineWidth=3;
	ctx.fillStyle="black";
	ctx.font = "12px Times New Roman";
	ctx.fillText("E", 119, 145);
	
	//4
	ctx.fillStyle = 'white';
	ctx.fillRect(146,10,40,150);
	ctx.strokeStyle="black"
	ctx.lineWidth=3;
	ctx.fillStyle="black";
	ctx.font = "12px Times New Roman";
	ctx.fillText("F", 161, 145);
	
	//5
	ctx.fillStyle = 'white';
	ctx.fillRect(188,10,40,150);
	ctx.strokeStyle="black"
	ctx.lineWidth=3;
	ctx.fillStyle="black";
	ctx.font = "12px Times New Roman";
	ctx.fillText("G", 203, 145);
	
	//6
	ctx.fillStyle = 'white';
	ctx.fillRect(230,10,40,150);
	ctx.strokeStyle="black"
	ctx.lineWidth=3;
	ctx.fillStyle="black";
	ctx.font = "12px Times New Roman";
	ctx.fillText("A", 245, 145);
	
	//7
	ctx.fillStyle = 'white';
	ctx.fillRect(272,10,40,150);
	ctx.strokeStyle="black"
	ctx.lineWidth=3;
	ctx.fillStyle="black";
	ctx.font = "12px Times New Roman";
	ctx.fillText("B", 287, 145);
	
	//8
	ctx.fillStyle = 'white';
	ctx.fillRect(314,10,40,150);
	ctx.strokeStyle="black"
	ctx.lineWidth=3;
	ctx.fillStyle="black";
	ctx.font = "12px Times New Roman";
	ctx.fillText("C '", 329, 145);
	
	
	//9
	ctx.fillStyle = 'white';
	ctx.fillRect(356,10,40,150);
	ctx.strokeStyle="black"
	ctx.lineWidth=3;
	ctx.fillStyle="black";
	ctx.font = "12px Times New Roman";
	ctx.fillText("D '", 371, 145);
	
	//10
	ctx.fillStyle = 'white';
	ctx.fillRect(398,10,40,150);
	ctx.strokeStyle="black"
	ctx.lineWidth=3;
	ctx.fillStyle="black";
	ctx.font = "12px Times New Roman";
	ctx.fillText("E '", 413, 145);
	
	//11
	ctx.fillStyle = 'white';
	ctx.fillRect(440,10,40,150);
	ctx.strokeStyle="black"
	ctx.lineWidth=3;
	ctx.fillStyle="black";
	ctx.font = "12px Times New Roman";
	ctx.fillText("F '", 455, 145);
	
	//12
	ctx.fillStyle = 'white';
	ctx.fillRect(482,10,40,150);
	ctx.strokeStyle="black"
	ctx.lineWidth=3;
	ctx.fillStyle="black";
	ctx.font = "12px Times New Roman";
	ctx.fillText("G '", 497, 145);
		
	//13
	ctx.fillStyle = 'white';
	ctx.fillRect(524,10,40,150);
	ctx.strokeStyle="black"
	ctx.lineWidth=3;
	ctx.fillStyle="black";
	ctx.font = "12px Times New Roman";
	ctx.fillText("A '", 539, 145);
	
	//14
	ctx.fillStyle = 'white';
	ctx.fillRect(566,10,40,150);
	ctx.strokeStyle="black"
	ctx.lineWidth=3;
	ctx.fillStyle="black";
	ctx.font = "12px Times New Roman";
	ctx.fillText("B '", 581, 145);
	
	//15
	ctx.fillStyle = 'white';
	ctx.fillRect(608,10,40,150);
	ctx.strokeStyle="black"
	ctx.lineWidth=3;
	ctx.fillStyle="black";
	ctx.font = "12px Times New Roman";
	ctx.fillText("C ''", 627, 145);
	
	//16
	ctx.fillStyle = 'white';
	ctx.fillRect(650,10,40,150);
	ctx.strokeStyle="black"
	ctx.lineWidth=3;
	ctx.fillStyle="black";
	ctx.font = "12px Times New Roman";
	ctx.fillText("D ''", 665, 145);
	
	//17
	ctx.fillStyle = 'white';
	ctx.fillRect(692,10,40,150);
	ctx.strokeStyle="black"
	ctx.lineWidth=3;
	ctx.fillStyle="black";
	ctx.font = "12px Times New Roman";
	ctx.fillText("E ''", 707, 145);
	
	//18
	ctx.fillStyle = 'white';
	ctx.fillRect(734,10,40,150);
	ctx.strokeStyle="black"
	ctx.lineWidth=3;
	ctx.fillStyle="black";
	ctx.font = "12px Times New Roman";
	ctx.fillText("F ''", 749, 145);
	
	//19
	ctx.fillStyle = 'white';
	ctx.fillRect(776,10,40,150);
	ctx.strokeStyle="black"
	ctx.lineWidth=3;
	ctx.fillStyle="black";
	ctx.font = "12px Times New Roman";
	ctx.fillText("G ''", 791, 145);
	
	//20
	ctx.fillStyle = 'white';
	ctx.fillRect(818,10,40,150);
	ctx.strokeStyle="black"
	ctx.lineWidth=3;
	ctx.fillStyle="black";
	ctx.font = "12px Times New Roman";
	ctx.fillText("A ''", 832, 145);
	
	
	//21
	ctx.fillStyle = 'white';
	ctx.fillRect(860,10,40,150);
	ctx.strokeStyle="black"
	ctx.lineWidth=3;
	ctx.fillStyle="black";
	ctx.font = "12px Times New Roman";
	ctx.fillText("B ''", 875, 145);
	
	//22
	ctx.fillStyle = 'white';
	ctx.fillRect(902,10,40,150);
	ctx.strokeStyle="black"
	ctx.lineWidth=3;
	ctx.fillStyle="black";
	ctx.font = "12px Times New Roman";
	ctx.fillText("C '''", 917, 145);
	
	//23
	ctx.fillStyle = 'white';
	ctx.fillRect(944,10,40,150);
	ctx.strokeStyle="black"
	ctx.lineWidth=3;
	ctx.fillStyle="black";
	ctx.font = "12px Times New Roman";
	ctx.fillText("D '''", 959, 145);
	
	//24
	ctx.fillStyle = 'white';
	ctx.fillRect(986,10,40,150);
	ctx.strokeStyle="black"
	ctx.lineWidth=3;
		ctx.fillStyle="black";
	ctx.font = "12px Times New Roman";
	ctx.fillText("E '''", 1001, 145);
	
	//25
	ctx.fillStyle = 'white';
	ctx.fillRect(1028,10,40,150);
	ctx.strokeStyle="black"
	ctx.lineWidth=3;
	ctx.fillStyle="black";
	ctx.font = "12px Times New Roman";
	ctx.fillText("F '''", 1043, 145);
	
	//26
	ctx.fillStyle = 'white';
	ctx.fillRect(1070,10,40,150);
	ctx.strokeStyle="black"
	ctx.lineWidth=3;
	ctx.fillStyle="black";
	ctx.font = "12px Times New Roman";
	ctx.fillText("G '''", 1085, 145);
	
	//27
	ctx.fillStyle = 'white';
	ctx.fillRect(1112,10,40,150);
	ctx.strokeStyle="black"
	ctx.lineWidth=3;
	ctx.fillStyle="black";
	ctx.font = "12px Times New Roman";
	ctx.fillText("A '''", 1127, 145);
	
	//28
	ctx.fillStyle = 'white';
	ctx.fillRect(1154,10,40,150);
	ctx.strokeStyle="black"
	ctx.lineWidth=3;
	ctx.fillStyle="black";
	ctx.font = "12px Times New Roman";
	ctx.fillText("B '''", 1169, 145);	
	
}

function testStateStack(ctx)
{
	
	ctx.fillStyle="black";
	ctx.fillRect(40,10,40,100)
	ctx.fillStyle="white";
	ctx.font = "12px Times New Roman";
	ctx.fillText("C#", 55, 90);
	
	
	ctx.fillStyle="black";
	ctx.fillRect(85,10,40,100)
	ctx.fillStyle="white";
	ctx.font = "12px Times New Roman";
	ctx.fillText("D#", 100, 90);
	
	
	ctx.fillStyle="black";
	ctx.fillRect(167,10,40,100)
	ctx.fillStyle="white";
	ctx.font = "12px Times New Roman";
	ctx.fillText("F#", 183, 90);
	
	
	ctx.fillStyle="black";
	ctx.fillRect(211,10,40,100)
	ctx.fillStyle="white";
	ctx.font = "12px Times New Roman";
	ctx.fillText("G#", 226, 90);
	
	
	ctx.fillStyle="black";
	ctx.fillRect(255,10,40,100)
	ctx.fillStyle="white";
	ctx.font = "12px Times New Roman";
	ctx.fillText("A#", 270, 90);
	
	
	ctx.fillStyle="black";
	ctx.fillRect(335,10,40,100)
	ctx.fillStyle="white";
	ctx.font = "12px Times New Roman";
	ctx.fillText("C# '", 350, 90);
	
	
	ctx.fillStyle="black";
	ctx.fillRect(380,10,40,100)
	ctx.fillStyle="white";
	ctx.font = "12px Times New Roman";
	ctx.fillText("D# '", 395, 90);
	
	
	ctx.fillStyle="black";
	ctx.fillRect(460,10,40,100)
	ctx.fillStyle="white";
	ctx.font = "12px Times New Roman";
	ctx.fillText("F# '", 475, 90);
	
	
	ctx.fillStyle="black";
	ctx.fillRect(505,10,40,100)
	ctx.fillStyle="white";
	ctx.font = "12px Times New Roman";
	ctx.fillText("G# '", 520, 90);
	
	
	ctx.fillStyle="black";
	ctx.fillRect(550,10,40,100)
	ctx.fillStyle="white";
	ctx.font = "12px Times New Roman";
	ctx.fillText("A# '", 565, 90);
	
	
	ctx.fillStyle="black";
	ctx.fillRect(630,10,40,100)
	ctx.fillStyle="white";
	ctx.font = "12px Times New Roman";
	ctx.fillText("C# ''", 645, 90);
	
	
	ctx.fillStyle="black";
	ctx.fillRect(675,10,40,100)
	ctx.fillStyle="white";
	ctx.font = "12px Times New Roman";
	ctx.fillText("D# ''", 690, 90);
	
	
	ctx.fillStyle="black";
	ctx.fillRect(755,10,40,100)
	ctx.fillStyle="white";
	ctx.font = "12px Times New Roman";
	ctx.fillText("F# ''", 770, 90);
	
	
	ctx.fillStyle="black";
	ctx.fillRect(800,10,40,100)
	ctx.fillStyle="white";
	ctx.font = "12px Times New Roman";
	ctx.fillText("G# ''", 815, 90);
	
	
	ctx.fillStyle="black";
	ctx.fillRect(845,10,40,100)
	ctx.fillStyle="white";
	ctx.font = "12px Times New Roman";
	ctx.fillText("A# ''", 860, 90);
	
	
	ctx.fillStyle="black";
	ctx.fillRect(925,10,40,100)
	ctx.fillStyle="white";
	ctx.font = "12px Times New Roman";
	ctx.fillText("C# '''", 940, 90);
	
	
	ctx.fillStyle="black";
	ctx.fillRect(970,10,40,100)
	ctx.fillStyle="white";
	ctx.font = "12px Times New Roman";
	ctx.fillText("D# '''", 985, 90);
	
	
	ctx.fillStyle="black";
	ctx.fillRect(1050,10,40,100)
	ctx.fillStyle="white";
	ctx.font = "12px Times New Roman";
	ctx.fillText("F# '''", 1065, 90);
	
	
	ctx.fillStyle="black";
	ctx.fillRect(1095,10,40,100)
	ctx.fillStyle="white";
	ctx.font = "12px Times New Roman";
	ctx.fillText("G# '''", 1110, 90);
	
	
	ctx.fillStyle="black";
	ctx.fillRect(1140,10,40,100)
	ctx.fillStyle="white";
	ctx.font = "12px Times New Roman";
	ctx.fillText("A# '''", 1155, 90);
}

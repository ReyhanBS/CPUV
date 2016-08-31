var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.rect(0, 0, 700, 130);
ctx.fillStyle = "white";
ctx.fill();
		
ctx.fillStyle="black";
ctx.font = "20px Georgia";
ctx.fillText("Tata Cara Penggunaan Virtual Piano.", 10, 50);
ctx.font = "15px Georgia";
ctx.fillText("Untuk cara menggunakanan Virtual Piano ini, silahkan menggunakan keyboard qwerty anda dengan", 10, 90);
ctx.font = "15px Georgia";
ctx.fillText("menggunakan Q, W, E, R, T, Y, U, I, O, P, A, S, D, F, G, H, J, K, L, Z, X, C, V, B, N, M, titik dan koma.", 10, 110);



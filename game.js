const c=document.getElementById("game");
const ctx=c.getContext("2d");
c.width=innerWidth;c.height=innerHeight;
let x=100;
function loop(){
 ctx.fillStyle="#111";ctx.fillRect(0,0,c.width,c.height);
 ctx.fillStyle="cyan";ctx.fillRect(x,300,40,60);
 x+=1;if(x>c.width)x=0;
 requestAnimationFrame(loop);
}
loop();
let pad2 = document.querySelector('.pad2');
let pad1 = document.querySelector(".pad1");
let box = document.querySelector(".container");
let ball = document.querySelector(".circle");
let xpad2 = pad2.clientHeight;
let xpad1= pad1.clientHeight;
let boxheight = box.clientHeight;
let boxwidth = box.clientWidth;
let ballheight = ball.clientHeight;
let ballwidth = ball.clientWidth;
let milieu = ball.clientWidth/2;
let id = null;
let xball = (Math.round(Math.random() * (boxwidth - ballwidth)) + 1) ;
let yball = 0;

window.addEventListener('load', () =>{
 	pad2.style.position = 'absolute';
 	pad2.style.left = 0;
 	pad2.style.top = 330 + 'px';
    pad1.style.position = 'absolute';
    pad1.style.left = 370 + 'px';
    pad1.style.top = 0;
    ball.style.position = 'absolute';
    ball.style.left =  xball + "px";
    ball.style.top = yball;
    ball.style.top = (Math.floor(Math.random() * (330 - 70)) + 70) + 'px';
});


window.addEventListener('keyup', (event) => {
 switch (event.key) {
 	case 'ArrowUp':
        if((xpad2+parseInt(pad2.style.top))== 70)
            xpad2.style.top=70;
        else
 		pad2.style.top = (parseInt(pad2.style.top) - 15) + 'px';  
        
        console.log((xpad2+parseInt(pad2.style.top)));
 		break;
 	 case 'ArrowDown':
        if((xpad2+parseInt(pad2.style.top))== boxheight)
            xpad2.style.top = boxheight;
        else
 		pad2.style.top = parseInt(pad2.style.top) + 15 + 'px';

        console.log((xpad2+parseInt(pad2.style.top)));
 		break;
   case 'ArrowLeft':
        if((xpad1+parseInt(pad1.style.top))== 400)
            pad1.style.top=400;
        else
        pad1.style.top = parseInt(pad1.style.top) + 15 + 'px';
        console.log((xpad1+parseInt(pad1.style.top)));
        break;
    case 'ArrowRight':
        if((xpad1+parseInt(pad1.style.top))== 70)
        pad1.style.top=70;
        else
        pad1.style.top = parseInt(pad1.style.top) - 15 + 'px';
        console.log((xpad1+parseInt(pad1.style.top)));
        break;
 	default:
 		alert("Only Arrow Keys Are Allowed!");
    }
});






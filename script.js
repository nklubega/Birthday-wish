// --------------------------------
// ELEMENTS
// --------------------------------

const startBtn = document.getElementById("startBtn");
const content = document.getElementById("content");

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

const gift = document.getElementById("gift");
const cakeSection = document.getElementById("cakeSection");

const typingText = document.getElementById("typing");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const close = document.getElementById("close");


// --------------------------------
// CUSTOMIZE YOUR MESSAGE HERE
// --------------------------------

const message = `
Dear My Love ❤️

Happy Birthday!

Today is a celebration of the amazing person you are.

Your kindness, your smile, your laughter,
and the little moments we share make life so much better.

I hope this year brings you endless happiness,
success, good health, and everything your heart desires.

Thank you for being such a beautiful part of my life.

You deserve all the love and happiness in the world.

❤️❤️❤️
`;


// --------------------------------
// START SURPRISE
// --------------------------------

startBtn.addEventListener("click",()=>{

    content.style.display="block";

    content.scrollIntoView({
        behavior:"smooth"
    });


    typeMessage();

    createBalloons();

    createHearts();

});


// --------------------------------
// MUSIC CONTROL
// --------------------------------

let playing=false;


musicBtn.addEventListener("click",()=>{


    if(!playing){

        music.play();

        musicBtn.innerHTML="⏸ Pause Music";

        playing=true;

    }

    else{

        music.pause();

        musicBtn.innerHTML="🎵 Play Music";

        playing=false;

    }

});


// --------------------------------
// TYPING EFFECT
// --------------------------------


let index=0;


function typeMessage(){

    typingText.innerHTML="";

    index=0;


    function type(){

        if(index < message.length){

            typingText.innerHTML += message[index];

            index++;

            setTimeout(type,40);

        }

    }


    type();

}



// --------------------------------
// FLOATING HEARTS
// --------------------------------


function createHearts(){


setInterval(()=>{


    const heart=document.createElement("div");


    heart.className="heart";


    heart.innerHTML="❤️";


    heart.style.left=Math.random()*100+"%";


    heart.style.animationDuration=
    (5+Math.random()*5)+"s";


    heart.style.fontSize=
    (15+Math.random()*30)+"px";


    document
    .getElementById("hearts")
    .appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },10000);



},400);



}



// --------------------------------
// FLOATING BALLOONS
// --------------------------------


function createBalloons(){


setInterval(()=>{


const balloon=document.createElement("div");


balloon.className="balloon";


const colors=[
"🎈",
"🎈",
"🎈",
"🎈"
];


balloon.innerHTML=
colors[Math.floor(Math.random()*colors.length)];



balloon.style.left=
Math.random()*100+"%";



balloon.style.animationDuration=
(7+Math.random()*6)+"s";



document
.getElementById("balloons")
.appendChild(balloon);



setTimeout(()=>{

balloon.remove();

},15000);



},1000);



}



// --------------------------------
// GIFT OPENING
// --------------------------------


gift.addEventListener("click",()=>{


gift.innerHTML="🎊";


gift.style.animation="none";


cakeSection.classList.remove("hidden");



createConfetti();


cakeSection.scrollIntoView({

behavior:"smooth"

});


});



// --------------------------------
// CONFETTI
// --------------------------------


function createConfetti(){


for(let i=0;i<150;i++){


const confetti=document.createElement("div");


confetti.innerHTML="✨";


confetti.style.position="fixed";


confetti.style.left=Math.random()*100+"vw";


confetti.style.top="-20px";


confetti.style.fontSize=
(15+Math.random()*25)+"px";


confetti.style.zIndex="9999";


confetti.style.animation=
`fall ${2+Math.random()*3}s linear`;



document.body.appendChild(confetti);



setTimeout(()=>{

confetti.remove();

},5000);


}


}



// --------------------------------
// ADD CONFETTI ANIMATION
// --------------------------------


const style=document.createElement("style");


style.innerHTML=`

@keyframes fall{

to{

transform:
translateY(110vh)
rotate(720deg);

}

}

`;


document.head.appendChild(style);



// --------------------------------
// PHOTO LIGHTBOX
// --------------------------------


const photos=document.querySelectorAll(".gallery img");


photos.forEach(photo=>{


photo.addEventListener("click",()=>{


lightbox.style.display="flex";


lightboxImg.src=
photo.src;


});


});



close.onclick=()=>{


lightbox.style.display="none";


};



// --------------------------------
// ANSWER BUTTONS
// --------------------------------


document.querySelectorAll(".answer")
.forEach(button=>{


button.addEventListener("click",()=>{


button.innerHTML=
"❤️ Correct Answer ❤️";


createHearts();


});


});



// --------------------------------
// COUNTDOWN
// --------------------------------


let count=3;


const countdown=
document.getElementById("countdown");



const observer=
new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


let timer=setInterval(()=>{


count--;


countdown.innerHTML=count;



if(count===0){


countdown.innerHTML=
"🎉 HAPPY BIRTHDAY 🎉";


createConfetti();


clearInterval(timer);


}



},1000);



}


});


});



observer.observe(countdown);
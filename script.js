
console.log("JS Loaded");
document.addEventListener("DOMContentLoaded", () => {

    const enterBtn =
        document.getElementById("enterBtn");

    const secretBtn =
        document.getElementById("secretBtn");

    const factsBtn =
        document.getElementById("factsBtn");
    const awardBtn =
        document.getElementById("awardBtn");
    const dontBtn =
        document.getElementById("dontBtn");
    const meterBtn =
        document.getElementById("meterBtn");
    const messageModal =
        document.getElementById("messageModal");

    const messageContent =
        document.getElementById("messageContent");

    const closeMessage =
        document.getElementById("closeMessage");

    let dontClickCount = 0;
    setTimeout(()=>{

const gift =
document.getElementById("giftBox");

if(gift){

gift.addEventListener("click",()=>{

gift.classList.add("shakeGift");

setTimeout(()=>{

gift.classList.remove("shakeGift");

messageModal.style.display="flex";

document.getElementById("messageTitle").innerHTML =
"🎁 Surprise For Tigress";

messageContent.innerHTML =

`Happy Birthday the SIVANGI ❤️

<br><br>

The Roaring AadaPuli 🐯🔥❤️.

<br><br>

— Irfan`;

},1000);

});

}

},500);
    let visitors = 12847;

setInterval(()=>{

visitors +=
Math.floor(Math.random()*5)+1;

document.getElementById("visitorCount")
.innerHTML = visitors.toLocaleString();

},3000);
    const wishes = [

"❤️ Best Friend Forever",

"🐯 Tigress Mode Activated",

"🎂 Happy Birthday",

"✨ Stay Unapologetic",

"🌍 Favorite Human",

"💖 Unlimited Memories",

"😂 Unlimited Drama",

"🎉 Birthday Queen"

];

setInterval(()=>{

const wish =
document.createElement("div");

wish.className =
"floatingWish";

wish.innerHTML =

wishes[
Math.floor(
Math.random()*wishes.length
)
];

wish.style.left =
Math.random()*90 + "%";

wish.style.top =
"100%";

document
.getElementById("floatingWishes")
.appendChild(wish);

setTimeout(()=>{

wish.remove();

},8000);

},2000);
    const typingText =
document.getElementById("typingText");

const text =
"Bold • Confident • Unapologetic";

let index = 0;

function typeWriter(){

if(index < text.length){

typingText.innerHTML +=
text.charAt(index);

index++;

setTimeout(typeWriter,80);

}

}

typeWriter();

    const messages = [

        "Some friends become family ❤️",

        "You are impossible to replace 🥹",

        "Thank you for every memory 💖",

        "You are one of my favorite humans 🌍",

        "Life is better with you in it ✨",

        "Happy Birthday Tigress 🐯",

        "You are drama, chaos and happiness together 😂",

        "I am lucky our paths crossed ❤️"

    ];

    const facts = [

        "Areyy Nak Akalaithundii Ra 🍔",

        "Nak Nidrosthundii 😴",

        "Chiraaaak Ostundii Raa 😒",

        "Na Istam 😌",

        "Dobbey 😑",

        "Pehh 😏",

        "Nak Oopika Ledra 🥲",

        "Hair Oodipotundi Ra 💇‍♀️",

        "Pichaa Nik Emina? 🤦‍♀️",

        "Eheyy Ellehhh 😤",

        "Moothi Pagulthadhiii 😂",

        "Kopam Theppiyaku Cheptunaa 😡",

        "Headache Ostundii Raaa 🤕"

    ];

    enterBtn.addEventListener("click", () => {
        confetti({

            particleCount: 250,

            spread: 180,

            origin: {
                y: 0.6
            }

        });
        document.getElementById("birthdayIntro")
            .style.display = "flex";

    });

    secretBtn.addEventListener("click", () => {

        const randomMessage =

            messages[
            Math.floor(
                Math.random() * messages.length
            )
            ];

        messageModal.style.display = "flex";

        messageContent.innerHTML =
            randomMessage;

    });

    factsBtn.addEventListener("click", () => {

        const randomFact =

            facts[
            Math.floor(
                Math.random() * facts.length
            )
            ];

        messageModal.style.display = "flex";

        document.getElementById("messageTitle").innerHTML =
            "🐯 Tigress Facts";

        messageContent.innerHTML =
            randomFact;

    });


    awardBtn.addEventListener("click", () => {

        confetti({
            particleCount: 150,
            angle: 60,
            spread: 80,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 150,
            angle: 120,
            spread: 80,
            origin: { x: 1 }
        });

        messageModal.style.display = "flex";

        document.getElementById("messageTitle").innerHTML =
            "🎉 CONGRATULATIONS 🎉";

        messageContent.innerHTML =
            "🏆 Preparing Best Friend Award...";

        setTimeout(() => {

            document.getElementById("messageTitle").innerHTML =
                "🏆 Best Friend Award";

            messageContent.innerHTML =

                `Awarded To<br><br>

🐯 Ravalika 🐯<br><br>

✔ Unlimited Drama<br>
✔ Unlimited Memories<br>
✔ Unlimited Headaches<br>
✔ Unlimited Care<br>
✔ Being Irreplaceable<br><br>

❤️ Certified By Irfan ❤️`;

        }, 2000);


    });
    dontBtn.addEventListener("click", () => {

        dontClickCount++;

        if (dontClickCount === 1) {

            messageModal.style.display = "flex";

            document.getElementById("messageTitle").innerHTML =
                "🚨 Don't Click";

            messageContent.innerHTML =
                "⚠️ Warning! Maine bola tha mat click karo.";

        }

        else if (dontClickCount === 2) {

            messageModal.style.display = "flex";

            document.getElementById("messageTitle").innerHTML =
                "🚨 Don't Click";

            messageContent.innerHTML =
                "😒 Tigress already judging you.";

        }

        else if (dontClickCount === 3) {

            messageModal.style.display = "flex";

            document.getElementById("messageTitle").innerHTML =
                "🚨 Don't Click";

            messageContent.innerHTML =
                "🐯 Ravalika is preparing her anger mode...";

        }

        else if (dontClickCount === 4) {

            messageModal.style.display = "flex";

            document.getElementById("messageTitle").innerHTML =
                "🚨 Don't Click";

            messageContent.innerHTML =
                "💀 Too late. Headache Ostundii Raaa!";

        }

        else {

            messageModal.style.display = "flex";

            document.getElementById("messageTitle").innerHTML =
                "🚨 Don't Click";

            messageContent.innerHTML =
                "😂 Friendship Contract Activated Forever!";

        }

    });
    const friendshipModal =
        document.getElementById("friendshipModal");

    const meterFill =
        document.getElementById("meterFill");

    const meterText =
        document.getElementById("meterText");

    const meterMessage =
        document.getElementById("meterMessage");

    const closeMeter =
        document.getElementById("closeMeter");

    meterBtn.addEventListener("click", () => {

        friendshipModal.style.display = "flex";

        let values =
            [10, 25, 40, 65, 85, 100];

        let i = 0;

        meterFill.style.width = "0%";

        meterText.innerHTML = "0%";

        meterMessage.innerHTML = "";

        let interval = setInterval(() => {

            meterFill.style.width =
                values[i] + "%";

            meterText.innerHTML =
                values[i] + "%";

            i++;

            if (i === values.length) {

                clearInterval(interval);

                setTimeout(() => {

                    meterText.innerHTML =
                        "⚠ ERROR";

                    meterMessage.innerHTML =

                        "Friendship exceeds measurable limits ❤️";

                }, 1000);

            }

        }, 700);

    });

    closeMeter.addEventListener("click", () => {

        friendshipModal.style.display = "none";

    });
    const galleryImages =
        document.querySelectorAll(".gallery-grid img");

    const lightbox =
        document.getElementById("lightbox");

    const lightboxImg =
        document.getElementById("lightboxImg");

    const closeLightbox =
        document.getElementById("closeLightbox");

    galleryImages.forEach(img => {

        img.addEventListener("click", () => {

            lightbox.style.display = "flex";

            lightboxImg.src = img.src;

        });

    });

    closeLightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            lightbox.style.display = "none";

        }

    });
    closeMessage.addEventListener("click", () => {

        messageModal.style.display = "none";

    });
    const musicToggle =
document.getElementById("musicToggle");

const music =
document.getElementById("birthdayMusic");

musicToggle.addEventListener("click",()=>{

if(music.paused){

music.play();

musicToggle.innerHTML="🎵";

}else{

music.pause();

musicToggle.innerHTML="🔇";

}

});
    const startParty =
    document.getElementById("startParty");

if (startParty) {

    startParty.addEventListener("click", () => {

        document.getElementById("birthdayIntro")
            .style.display = "none";
            const music =
document.getElementById("birthdayMusic");

music.play();
const canvas =
document.getElementById("fireworks");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

for(let i=0;i<20;i++){

setTimeout(()=>{

confetti({

particleCount:300,

spread:360,

startVelocity:50,

origin:{
x:Math.random(),
y:Math.random()*0.5
}

});

},i*500);

}
for(let i=0;i<8;i++){

setTimeout(()=>{

confetti({

particleCount:200,

spread:180,

origin:{y:0.6}

});

},i*400);

}

    });

}

});


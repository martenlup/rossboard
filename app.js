const buttonsLeft = document.getElementById("buttonsLeft");
const buttonsRight = document.getElementById("buttonsRight");
const stopButton = document.getElementById("stopButton");
// const sounds1 = ["blyat", "holy christ", "defos", "fuck man", "fuck", "haha fuck", "huw_1", "huw_2", "huw_3", "kidding_1"];
// const sounds2 = ["kidding_2", "knife", "laugh", "lullaby_1", "lullaby_2", "sick", "skibidi", "what", "woah_1", "wtf"];


let soundsArray = undefined;
let leftArr = undefined;
let rightArr = undefined;


getSounds();

async function getSounds() {
    const resp = await fetch("./sounds.json");
    const soundsJSON = await resp.json();
    soundsArray = soundsJSON.sounds

    spliceSounds();
    createSoundElement(soundsArray);
    createButtons(leftArr, buttonsLeft);
    createButtons(rightArr, buttonsRight);
}

function spliceSounds() {
    const half = Math.ceil(soundsArray.length / 2);
    leftArr = soundsArray.slice(0, half);
    rightArr = soundsArray.slice(half, soundsArray.length);
}


function createSoundElement(arr) {
    arr.forEach((object) => {
        const AudioHTML = document.createElement("audio");
        AudioHTML.id = object.name;
        AudioHTML.setAttribute("src", `sounds/${object.name}.wav`);
        document.body.appendChild(AudioHTML);
    })
}


function createButtons(arr, div) {
    arr.forEach((object) => {
        const btn = document.createElement("button");
        btn.classList.add("btn");
        btn.innerText = object.name;
        btn.addEventListener('click', () => {
            console.log(object.speed);
            stopSongs(soundsArray);
            let track = document.getElementById(object.name)
            track.play();
            document.getElementById("mouth").style.animation = "none";
            document.body.style.animation = "none";
            // document.getElementById("middle").style.animation = "none";
            setTimeout(() => {
                document.getElementById("mouth").style.animation = `talk ${object.speed}s ${object.modes}`;
                document.getElementById("middle").style.animation = `circle 2s infinite linear`;
                document.getElementById("middle").style.opacity = "1";
                document.body.style.animation = `colorPulse 0.2s forwards linear`;
            }, 5);
            endedSongs(arr);
        })
        div.appendChild(btn);
    })
}

function endedSongs(arr) {
    arr.forEach((object) => {
        let sound = document.getElementById(object.name);
        sound.addEventListener("ended", () => {
            document.getElementById("middle").style.opacity = "0";
            document.getElementById("gif").style.animation = "none";
            document.getElementById("middle").style.animation = "none";
            document.body.style.animation = `colorPulse 0.2s reverse none linear`;

        })
    })
}

function stopSongs(arr) {
    for (var i = 0; i < arr.length; i++) {
        let sound = document.getElementById(arr[i].name);
        sound.pause();
        sound.currentTime = 0;
    }
}

function randomNumber(number) {
    return Math.random() * number

}

stopButton.addEventListener("click", () => {
    stopSongs(soundsArray);
    document.getElementById("middle").style.opacity = "0";
    document.body.style.animation = `colorPulse 0.2s reverse none linear`;
})
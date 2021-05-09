const sounds1 = ["blyat", "holy christ", "defos", "fuck man", "fuck", "haha fuck", "huw_1", "huw_2", "huw_3", "kidding_1"];
const sounds2 = ["kidding_2", "knife", "laugh", "lullaby_1", "lullaby_2", "sick", "skibidi", "what", "woah_1", "wtf"];

const soundsArr = [{
    name: "blyat",
    speed: 1,
}, {
    name: "skibidi",
    speed: 2,
}]


const buttonsLeft = document.getElementById("buttonsLeft");
const buttonsRight = document.getElementById("buttonsRight");
const stopButton = document.getElementById("stopButton");

function createSoundElement(arr) {
    arr.forEach((sound) => {
        const AudioHTML = document.createElement("audio");
        AudioHTML.id = sound;
        AudioHTML.setAttribute("src", `sounds/${sound}.wav`);
        document.body.appendChild(AudioHTML);
    })
}

function createButtons(arr, div) {
    arr.forEach((sound) => {
        const btn = document.createElement("button");
        btn.classList.add("btn");
        btn.innerText = sound;
        btn.addEventListener('click', () => {
            stopSongs(sounds1);
            stopSongs(sounds2);
            let track = document.getElementById(sound)
            track.play();
            document.getElementById("gif").style.animation = "none";
            setTimeout(() => {
                document.getElementById("gif").style.animation = `circle 5s infinite linear`;
                document.getElementById("gif").style.opacity = "1";
            }, 2);
            endedSongs(arr);

        })
        div.appendChild(btn);

    })
}

function endedSongs(arr) {
    arr.forEach((sounds) => {
        let sound = document.getElementById(sounds);
        sound.addEventListener("ended", () => {
            document.getElementById("gif").style.opacity = "0";
            document.getElementById("gif").style.animation = "none";

        })
    })
}

function stopSongs(arr) {
    for (var i = 0; i < arr.length; i++) {
        let sound = document.getElementById(arr[i]);
        sound.pause();
        sound.currentTime = 0;
    }
}

function randomNumber(number) {
    return Math.random() * number

}

stopButton.addEventListener("click", () => {
    stopSongs(sounds1);
    stopSongs(sounds2);
    document.getElementById("gif").style.opacity = "0";

})

createSoundElement(sounds1);
createSoundElement(sounds2);
createButtons(sounds1, buttonsLeft);
createButtons(sounds2, buttonsRight);



function test(arr) {
    for (i = 0; i < arr.length; i++) {
        const index = arr[i].name;
        console.log(index);
    }
}

test(sounds);
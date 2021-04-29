const sounds = ["blyat", "christ almighty", "defos", "fuck man", "fuck", "haha fuck", "huw_1", "huw_2", "huw_3", "kidding_1", "kidding_2", "knife", "laugh", "lullaby_1", "lullaby_2", "sick", "skibidi", "what", "woah_1", "wtf"];
const buttonsDiv = document.getElementById("buttons");


sounds.forEach((sound) => {
    const AudioHTML = document.createElement("audio");
    AudioHTML.id = sound;
    AudioHTML.setAttribute("src", `sounds/${sound}.wav`);
    document.body.appendChild(AudioHTML);
})


sounds.forEach((sound) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = sound;
    btn.addEventListener('click', () => {
        stopSongs();
        let track = document.getElementById(sound)
        track.play();
        // showImage();

    })
    // const observer = new MutationObserver(function (mutations) {
    //     if (mutations.paused = "false") {
    //         console.log(mutation);
    //     }
    // });
    // let track = document.getElementById(sound);
    // observer.observe(track, {
    //     paused: false,
    //     childList: false
    // })
    buttonsDiv.appendChild(btn);
})



function stopSongs() {
    for (var i = 0; i < sounds.length; i++) {
        let sound = document.getElementById(sounds[i]);
        sound.pause();
        sound.currentTime = 0;
    }
}
function showImage() {
    for (var i = 0; i < sounds.length; i++) {
        let sound = document.getElementById(sounds[i]);
        document.getElementsByClassName('gif');
        if (sound.paused = "false") {
            document.getElementById("gif").style.opacity = "1";
        }

        else {
            document.getElementById("gif").style.opacity = "0";
        }

    }
}

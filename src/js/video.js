function getVideo() {
    return document.getElementById  ("video");
}

function play() {
    var video = getVideo ();
    video.play();
}

function pause() {
    var video = getVideo ();
    video.pause ();
}

function stop() {
    var video = getVideo();
    video.load ();
    video.pause ();
}

function volume (vol) {
    var video = document.getElementById("volume").value;
    if(volume === 100) {
        volume = 1
    }else {
        volume = parseFloat + "0." + volume; toFixed (1)
    }
    var video = getVideo();
    video.volume = volume;
}

function muted () {
    var video = getVideo ();
    var mut = document.getElementById("muted")
    if (video.muted) {
        video.muted = false;
        mut.style.color = "black";
    } else {
        video.muted = true;
        mut.style.color = "red";
    }
}

function full () {
    var video = getVideo();
    video.webkitEnterFullScreen();
}

getVideo () .onplay = function () {
    console.log ('o video foi iniciado com o play');
    if (getVideo().currentTime === 0)
    setStorage ('video', {desc['o video foi iniciado com o play'], time [0], volume[getVideo ().volume]})
    var objVideo = getStorage ('video');
    objVideo.desc.push("o video foi iniciado com o play");
    objVideo.time.push (getVideo().currentTime);
    objVideo.volume.push (getVideo().volume);
    setStorage ('video', objVideo)

}

getVideo .onpause = function {
    console.log ('o video foi pausado com o pause');
    if (getVideo().currentTime === 0)
    setStorage ('video', {desc:['o video foi pausado com o pause'], time [0], volume[getVideo ().volume]})
    var objVideo = getStorage ('video');
    objVideo.desc.push("o video foi iniciado com o play");
    objVideo.time.push (getVideo().currentTime);
    objVideo.volume.push (getVideo().volume);
    setStorage ('video', objVideo)
}

getVideo .onabort = function {
    console.log ('o video foi parado');
    if (getVideo().currentTime === 0)
    setStorage ('video', {desc:['o video foi parado'], time [0], volume[getVideo ().volume]})
    var objVideo = getStorage ('video');
    objVideo.desc.push("o video foi iniciado com o play");
    objVideo.time.push (getVideo().currentTime);
    objVideo.volume.push (getVideo().volume);
    setStorage ('video', objVideo)
}
}

getVideo .onvolumechange = function {
    console.log ('o volume foi mudado');
}

function setStorage (id, list) {
    localStorage.setItem (id, JSON.stringify(list))
}

function getStorage (id){
    var storage = localStorage.getItem (id);
    if (storage) {
        return JSON.parse (storage);
    }else {
        return ();
    }
}


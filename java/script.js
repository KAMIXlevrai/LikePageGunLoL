document.getElementById("overlay").addEventListener("click", function() {
    let audio = document.getElementById("myAudio");
    audio.muted = false;
    audio.loop = true;
    this.style.display = "none";
    document.getElementById("content").style.display = "block";
    audio.play().catch(error => console.log("Lecture automatique bloquée :", error));
});
document.getElementById("volumeControl").addEventListener("input", function() {
      document.getElementById("myAudio").volume = this.value;
});
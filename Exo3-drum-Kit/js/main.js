window.addEventListener("keydown", function (ev){
    const audio = document.querySelector(`audio[data-key='${ev.keyCode}']`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

});

document.addEventListener("click", function(){
    alert('Tu joues mal');
});
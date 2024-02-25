/* Black screen transition to background video functionality */

document.querySelector('video').addEventListener('canplaythrough', function() {
    this.play();
    this.classList.add('fade-in');
});
  
document.querySelector('video').addEventListener('ended', function() {
    this.play();
});
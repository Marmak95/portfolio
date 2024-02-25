/* Black screen transition to background video functionality */

document.querySelector('video').addEventListener('canplaythrough', function() {
    this.play();
    this.classList.add('fade-in');
});
  
document.querySelector('video').addEventListener('ended', function() {
    this.play();
});

/* Error handling the background video */

const video = document.querySelector('video');

// Listen for the error event on the video element
video.addEventListener('error', function() {
    console.error('Error loading or playing video');
    
    // Reset the video element by setting its currentTime to 0
    video.currentTime = 0;
    
    // Play the video again
    video.play();
});

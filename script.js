// Video sources array - add your video URLs here
const videos = [
  'video.mp4',
  'video2.mp4',
  'video3.mp4',  // Add more video URLs as needed
];

let currentVideoIndex = 0;

// Get all elements
const videoContainer = document.querySelector('.video-container');
const prevButton = document.getElementById('prevVideo');
const nextButton = document.getElementById('nextVideo');
const button = document.getElementById('countButton');
const countDisplay = document.getElementById('count');

// Initialize the count value
let count = 0;

// Create video elements
function createVideoElements() {
  videos.forEach((src, index) => {
    const video = document.createElement('video');
    video.className = `video ${index === 0 ? 'active' : ''}`;
    video.autoplay = true;
    video.loop = true;
    const source = document.createElement('source');
    source.src = src;
    source.type = 'video/mp4';
    video.appendChild(source);
    videoContainer.appendChild(video);
  });
}

// Switch video function
function switchVideo(direction) {
  const allVideos = document.querySelectorAll('.video');
  allVideos[currentVideoIndex].classList.remove('active');

  if (direction === 'next') {
    currentVideoIndex = (currentVideoIndex + 1) % allVideos.length;
  } else {
    currentVideoIndex = (currentVideoIndex - 1 + allVideos.length) % allVideos.length;
  }

  allVideos[currentVideoIndex].classList.add('active');
}

// Event listeners
prevButton.addEventListener('click', () => switchVideo('prev'));
nextButton.addEventListener('click', () => switchVideo('next'));
button.addEventListener('click', function() {
  count++;
  countDisplay.textContent = count;
});

// Initialize videos
createVideoElements();

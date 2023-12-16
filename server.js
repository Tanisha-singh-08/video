
const API_KEY = 'AIzaSyBYVYgc3rs2T7YJBT96wrDZOcDl6lkxNg0';


const VIDEO_ID = 'DCkRJ8BDRQU';

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player-container', {
        height: '360',
        width: '640',
        videoId: VIDEO_ID,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    // Optional: Do something when the player is ready
}

function onPlayerStateChange(event) {
    // Optional: Do something when the player state changes
}

// Load the YouTube IFrame API
function loadYouTubeAPI() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// Load YouTube API and initialize the player
loadYouTubeAPI();
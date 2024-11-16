function changeBroadcast(name, url) {
    const broadcastNameElement = document.getElementById('broadcast-name');
    const videoPlayer = document.getElementById('video-player');

    // Update Broadcast Name
    broadcastNameElement.textContent = name;

    // Check if URL is valid
    if (url) {
        videoPlayer.src = url;
    } else {
        videoPlayer.src = ""; // Clear iframe if no URL is provided
    }
}

// Yayın linki
const elif = "https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?group.id=7e2d3390-6f28-4266-b492-439c9b7e5f7f&options.adaption.rule=deviationOfMean2&startIndex=0&playback.latencyControlMode=balancedadaptive";

// Sayfa yüklendiğinde butona event listener ekleyelim
document.addEventListener("DOMContentLoaded", () => {
    const startStreamButton = document.getElementById("startStreamButton");
    startStreamButton.addEventListener("click", startStream);
});

function startStream() {
    const videoPlayerElement = document.getElementById("video-player");
    const warningTextElement = document.getElementById("warning-text");
    const startStreamButton = document.getElementById("startStreamButton");
    const broadcastNameElement = document.getElementById("broadcast-name");

    // Yayını yükle ve görünür yap
    videoPlayerElement.src = elif;
    videoPlayerElement.style.display = "block";

    // Uyarı mesajını göster
    warningTextElement.style.display = "block";

    // Yayını Başlat butonunu gizle
    startStreamButton.style.display = "none";

    // 0.4 saniye bekleyip sayfanın aşağı kaymasını sağla
    setTimeout(() => {
        broadcastNameElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 400);
}

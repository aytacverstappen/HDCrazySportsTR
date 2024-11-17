// Yayın bilgileri
const broadcasts = {
    turkishMotoGP: {
        iframeSrc: 'https://steamcommunity.com/broadcast/watch/76561198860535410',
    },
    englishMotoGP: {
        iframeSrc: 'https://mazespin.live/channel/stream?id=tnt2&server=patis',
    },
    spanishMotoGP: {
        iframeSrc: 'https://mazespin.live/channel/stream?id=dazn1es&server=patis',
    },
};

// Yayın değiştir ve sayfayı kaydır
function changeBroadcast(broadcastName, broadcastKey) {
    const broadcastNameElement = document.getElementById('broadcast-name');
    const videoPlayerElement = document.getElementById('video-player');

    broadcastNameElement.textContent = broadcastName;
    videoPlayerElement.style.display = 'block';
    videoPlayerElement.src = broadcasts[broadcastKey].iframeSrc;

    // İngilizce yayın için unmute işlemi
    if (broadcastKey === 'englishMotoGP') {
        setTimeout(() => handleEnglishStream(), 3000); // 3 saniye bekleme
    }

    // İframe alanına kaydır
    videoPlayerElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// İngilizce yayın için unmute işlemi
function handleEnglishStream() {
    const iframe = document.getElementById('video-player');
    const iframeWindow = iframe.contentWindow;

    try {
        const unmuteButton = iframeWindow.document.querySelector('.unmute-button-class'); // Unmute butonu class'ı
        if (unmuteButton) {
            unmuteButton.click();

            // Pop-up sekmesini kapat
            const popup = iframeWindow.open('', '_blank');
            if (popup) {
                popup.close();
            }
        }
    } catch (error) {
        console.error("Unmute işlemi başarısız:", error);
    }
}

// Cihaz saatini güncelle
function updateDeviceTime() {
    const deviceTimeElement = document.getElementById('device-time');
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };

    deviceTimeElement.textContent = now.toLocaleTimeString(undefined, options);
}

// Sayfa yüklendiğinde ayarları başlat
document.addEventListener('DOMContentLoaded', () => {
    updateDeviceTime();
    setInterval(updateDeviceTime, 1000);
    changeBroadcast('Türkçe MotoGP', 'turkishMotoGP'); // Varsayılan olarak Türkçe MotoGP yayını başlat
});

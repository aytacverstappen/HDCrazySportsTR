// Yayın bilgileri
const broadcasts = {
    turkishFormula1: {
        iframeSrc: 'https://mastercanlitv17.com/channel?id=yayinb4',
    },
    englishFormula1: {
        iframeSrc: 'https://steamcommunity.com/broadcast/watch/76561198860535410',
    },
    spanishFormula1: {
        iframeSrc: 'https://mazespin.live/channel/stream?id=f1esp&server=patis',
    },
};

// Yayın değiştir ve sayfayı kaydır
function changeBroadcast(broadcastName, broadcastKey, warningMessage) {
    const broadcastNameElement = document.getElementById('broadcast-name');
    const videoPlayerElement = document.getElementById('video-player');
    const warningTextElement = document.getElementById('warning-text');

    broadcastNameElement.textContent = broadcastName;
    videoPlayerElement.style.display = 'block';
    videoPlayerElement.src = broadcasts[broadcastKey].iframeSrc;

    // Uyarı metnini güncelle
    warningTextElement.textContent = warningMessage;

    // İngilizce yayın için unmute işlemi
    if (broadcastKey === 'englishFormula1') {
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
    // İngilizce Formula 1 yayını ilk açıldığında gösterilecek
    changeBroadcast('English Formula 1', 'englishFormula1', 'If the stream doesn’t change, please refresh the page and try again.');


    
        
});

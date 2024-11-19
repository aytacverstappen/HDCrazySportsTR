// Yayın bilgileri
const broadcasts = {
    turkishFormula1: {
        iframeSrc: 'https://mastercanlitv17.com/channel?id=yayinb4',
    },
    englishFormula1: {
        iframeSrc: 'https://steamcommunity.com/broadcast/watch/76561198860535410',
    },
    spanishFormula1: {
        iframeSrc: 'https://thedaddy.to/embed/stream-537.php',
    },
};

// Yayın değiştir ve kaydırmayı sınırlama işlemini uygula
function changeBroadcast(broadcastName, broadcastKey, warningMessage) {
    const broadcastNameElement = document.getElementById('broadcast-name');
    const videoPlayerElement = document.getElementById('video-player');
    const warningTextElement = document.getElementById('warning-text');

    broadcastNameElement.textContent = broadcastName;
    videoPlayerElement.style.display = 'block';
    videoPlayerElement.src = broadcasts[broadcastKey].iframeSrc;

    // Uyarı metnini güncelle
    warningTextElement.textContent = warningMessage;

    // İngilizce yayın için kaydırmayı sınırla
    if (broadcastKey === 'englishFormula1') {
        limitIframeScrolling(videoPlayerElement);
    }

    // İframe alanına kaydır
    videoPlayerElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// İngilizce iframe'de kaydırmayı sınırla
function limitIframeScrolling(iframe) {
    iframe.addEventListener("load", () => {
        try {
            const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            iframeDocument.body.style.overflow = "hidden"; // Scroll'u tamamen devre dışı bırak
        } catch (error) {
            console.error("Scroll'u devre dışı bırakma işlemi başarısız:", error);
        }
    });
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
    changeBroadcast('Türkçe Formula 1', 'turkishFormula1', 'Eğer yayın değişmiyorsa, siteyi yenileyip tekrar deneyin.');
});

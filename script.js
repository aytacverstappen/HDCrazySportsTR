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
    ufc310: {
        iframeSrc: 'https://steamcommunity.com/broadcast/watch/76561198860535410',
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

    // İframe alanına kaydır
    videoPlayerElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Cihaz saatini güncelle
function updateDeviceTime() {
    const deviceTimeElement = document.getElementById('device-time');
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };

    deviceTimeElement.textContent = now.toLocaleTimeString(undefined, options);
}

// Yerel etkinlik saati göster
function updateEventTime() {
    const eventTimeTR = new Date('2023-12-08T03:00:00Z'); // Türkiye saati: 08 Aralık 06:00
    const localEventTime = eventTimeTR.toLocaleString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    });

    const eventTimeElement = document.getElementById('local-event-time');
    eventTimeElement.textContent = localEventTime;
}

// Sayfa yüklendiğinde ayarları başlat
document.addEventListener('DOMContentLoaded', () => {
    updateDeviceTime();
    updateEventTime();
    setInterval(updateDeviceTime, 1000);
});

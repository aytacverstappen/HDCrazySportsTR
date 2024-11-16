// Başlama saatlerini UTC olarak tanımla
const broadcasts = {
    turkishUFC: {
        startTimeUTC: new Date('2024-11-17T03:00:00Z'), // Türkçe UFC 309
        iframeSrc: 'https://steamcommunity.com/broadcast/watch/76561198860535410',
    },
    englishUFC: {
        startTimeUTC: new Date('2024-11-16T23:00:00Z'), // English UFC 309
        iframeSrc: 'https://thedaddy.to/embed/stream-76.php',
    },
};

// Global interval değişkeni, geri sayımı temizlemek için
let countdownInterval = null;

// Cihazın yerel saatine dönüştürülmüş saatleri güncelleme fonksiyonu
function updateButtonTimes() {
    const buttons = document.querySelectorAll('.sidebar ul li button');

    buttons.forEach(button => {
        const startTimeKey = button.id;
        if (startTimeKey) {
            const { startTimeUTC } = broadcasts[startTimeKey];
            const localTime = new Date(startTimeUTC).toLocaleString('en-US', { 
                timeZoneName: 'short', 
                hour: '2-digit', 
                minute: '2-digit', 
                hour12: true 
            });

            button.querySelector('.start-time').textContent = `(${localTime})`;
        }
    });
}

// Geri sayım fonksiyonu
function startCountdown(broadcastKey) {
    const { startTimeUTC, iframeSrc } = broadcasts[broadcastKey];
    const countdownTimer = document.getElementById('timer');
    const countdownText = document.getElementById('countdown-text');
    const videoPlayerElement = document.getElementById('video-player');

    // Eğer önceki geri sayımı temizlemediysek, onu temizleyelim
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    // Geri sayımı güncelle
    function updateCountdown() {
        const now = new Date();
        const timeDifference = startTimeUTC - now;

        if (timeDifference > 0) {
            const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
            const seconds = Math.floor((timeDifference / 1000) % 60);

            countdownTimer.textContent = `${hours.toString().padStart(2, '0')}:${minutes
                .toString()
                .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        } else {
            clearInterval(countdownInterval);
            countdownText.style.display = 'none';
            videoPlayerElement.style.display = 'block'; // Videoyu göster
            videoPlayerElement.src = iframeSrc;
        }
    }

    updateCountdown(); // İlk güncelleme
    countdownInterval = setInterval(updateCountdown, 1000); // Yeni geri sayım başlat
}

// Yayın seçildiğinde geri sayım başlat
function changeBroadcast(broadcastName, broadcastKey) {
    const broadcastNameElement = document.getElementById('broadcast-name');
    broadcastNameElement.textContent = broadcastName;

    startCountdown(broadcastKey); // Seçilen yayının geri sayımını başlat
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
    setInterval(updateDeviceTime, 1000); // Cihaz saatini her saniye güncelle
    startCountdown('turkishUFC'); // Varsayılan olarak Türkçe UFC başlama saati
    updateButtonTimes(); // Butonlardaki saatleri yerel saatte göster
});

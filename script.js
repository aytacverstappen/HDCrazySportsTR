// GitHub'dan player_code.txt dosyasını al
fetch('https://raw.githubusercontent.com/aytacverstappen/HDCrazySportsTR/refs/heads/main/player_code.txt')
    .then(response => response.text())  // Dosya içeriğini al
    .then(data => {
        // İçeriği player-wrapper div'ine yerleştir
        document.getElementById('player-wrapper').innerHTML = data;
    })
    .catch(error => {
        // Hata durumunda konsola mesaj yazdır
        console.error('Bir hata oluştu:', error);
    });

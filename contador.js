document.addEventListener("DOMContentLoaded", function() {
    // Fecha objetivo (año, mes-1, día, hora, minuto, segundo)
    const targetDate = new Date(2025, 6, 12, 18, 0, 0); // 31 diciembre 2024, 23:59:59
    
    function updateCountdown() {
        const now = new Date();
        let diff = targetDate - now;
        
        if (diff <= 0) {
            // Redireccionar cuando llegue el momento
            window.location.href = './main.html';
            return;
        }
        
        // Cálculo corregido
        const totalSeconds = Math.floor(diff / 1000);
        const days = Math.floor(totalSeconds / (3600 * 24));
        const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = Math.floor(totalSeconds % 60);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    // Actualizar cada segundo
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
    
    // Click en el countdown también redirecciona
    document.getElementById('countdown').addEventListener('click', function() {
        clearInterval(countdownInterval);
        window.location.href = './main.html';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Elementos
    const video = document.getElementById("video-bg");
    const skipButton = document.getElementById("skip-button");
    
    // Verificamos que los elementos existen
    if (!video || !skipButton) {
        console.error("No se encontró el video o el botón");
        return;
    }

    // Variable para controlar si ya se hizo clic
    let clicked = false;

    // Loop controlado (0s - 27s)
    function loopControlado() {
        if (video.currentTime >= 27.0) {
            video.currentTime = 0;
            video.play();
        }
    }

    // Configuración inicial
    video.addEventListener('timeupdate', loopControlado);
    
    // Evento click
    skipButton.addEventListener('click', function() {
        if (clicked) return;
        clicked = true;
        
        skipButton.disabled = true;
        console.log("Click registrado");
        
        // Quitamos el loop controlado
        video.removeEventListener('timeupdate', loopControlado);
        
        // Saltamos al segundo 28.2 y habilitamos audio
        video.currentTime = 28.2;
        video.play().catch(e => console.error("Error al reproducir:", e));

        // Verificación constante del tiempo para redirección en 36s
        const checkTime = setInterval(() => {
            if (video.currentTime >= 37.0) {
                clearInterval(checkTime); // Detener la verificación
                console.log('Redireccionando en segundo 36...');
                window.location.href = './pregunta.html';
            }
        }, 100); // Revisa cada 100ms
    });

    console.log("Script cargado correctamente");
    console.log("Duración del video:", video.duration);
});
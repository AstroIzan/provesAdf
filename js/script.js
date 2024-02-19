function notificar() {
    if (!("Notification" in window)) {
        alert("Este navegador no soporta notificaciones de escritorio");
        return;
    }

    if (Notification.permission === "granted") {
        var notification = new Notification("Hola Mundo!");
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function(permission) {
            if (permission === "granted") {
                var notification = new Notification("Hola Mundo!");
            }
        });
    }

}
function notificar() {
    Push.Permission.request();
    Push.create('ADF Convocatories', {
        body: 'Sabadell Notifica',
        icon: 'src/icon.png',
        timeout: 4000,
        vibrate: [200, 100, 200, 100, 200, 100, 200],
        style: 'border-bottom: 5px solid #FFD700;',
        onClick: function () {
            console.log(this);
        }
    });    
}
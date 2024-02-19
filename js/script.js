function notificar() {
    Push.Permission.request();
    Push.create('ADF Convocatories', {
        body: 'Sabadell Notifica',
        icon: 'src/icon.png',
        timeout: 4000,
        vibrate: [200, 100, 200, 100, 200, 100, 200],
        onClick: function () {
            console.log(this);
        }
    });    
}
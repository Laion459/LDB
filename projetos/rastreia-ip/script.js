const { IPinfoWrapper } = require("node-ipinfo");

function trackIP() {
  var ipInput = document.getElementById('ipInput');
  var ip = ipInput.value;

  var ipinfoWrapper = new IPinfoWrapper("c4c34d0696007d");

  ipinfoWrapper.lookupIp(ip)
    .then(response => {
      var coordinates = [0, 0];

      if (response.loc) {
        coordinates = response.loc.split(',').map(Number);
      } else {
        console.warn('Coordenadas de localização indisponíveis. Usando informações da cidade.');
      }

      updateMap(coordinates);
      updateInfo(response);
    })
    .catch(error => {
      console.error('Erro ao rastrear o IP:', error);
    });
}

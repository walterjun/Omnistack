const tunnel = require('tunnel');

const proxy = {
    host: '172.19.100.252',
    port: 8080,
    proxyAuth: ''
  };
const tunnelProxy = tunnel.httpsOverHttp({
    proxy: proxy
});

module.exports = tunnelProxy;

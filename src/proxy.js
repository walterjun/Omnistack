const tunnel = require('tunnel');

const proxy = {
    host: '172.19.100.252',
    port: 8080,
    proxyAuth: 'wjunior:$N!per5303480'
  };
const tunnelProxy = tunnel.httpsOverHttp({
    proxy: proxy
});

module.exports = tunnelProxy;
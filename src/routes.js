const { Router } = require('express');
const axios = require('axios-https-proxy-fix');
const tunnelProxy = require('./proxy');
const Dev = require('./models/Dev');

const routes = Router();

routes.post('/devs', async (request, response) => 
{ 
    const { github_username, techs, latitude, longitude } = request.body;
    
    const axInstance = await axios.create({
        baseURL: `https://api.github.com`,
        httpsAgent: tunnelProxy,
        proxy: false
    });

    var name = '';
    var avatar_url = '';
    var bio = '';
    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }
    await axInstance.get(`/users/${github_username}`)
    .then((resposta) => { 
        name = resposta.data.login; 
        avatar_url = resposta.data.avatar_url;
        bio = resposta.data.bio;
    })
    .catch((erro) => { console.log(erro)});

    const techsArray = techs.split(',').map(tech => tech.trim());

    var retorno = Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
    }).then((resp) => { 
        return response.json(resp);
     }).catch(err => { return err; });

    return retorno;
});

module.exports = routes;
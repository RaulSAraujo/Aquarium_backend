const business = require('../business/chart')
const moment = require('moment-timezone');

/**
 * @description Busca dados para montar os graficos.
 * @param {*} request 
 * @param {*} h 
 * @property {string} aquarium_id - Id do aquário.
 * @property {object} query - Parâmetros de busca.
 * @property {object} logger - Parâmetros do log exe: info, warn, error.
 * @returns {void}
 */
const findAll = async (request, h) => {
    const { params: { aquarium_id }, query, logger } = request;
    const { code, result } = await business.findAll(aquarium_id, query, logger);

    const map = {
        'Nível de água': 'nivel_agua',
        'Nível oxigênio': 'nivel_oxigenio',
        'Saturação': 'saturacao',
        'pH': 'ph',
        'Luminosidade': 'luminosidade',
        'Temperatura': 'temperatura'
    }

    let initialName
    let body = {
        "nivel_agua": '',
        "nivel_oxigenio": '',
        "saturacao": '',
        'ph': '',
        'luminosidade': '',
        'temperatura': ''
    }
    const chart = result.map((item) => {
        if (item.name !== initialName) {
            body[map[item.name]] = item.value
        }

        if (item.name === initialName) {
            const send = { ...body, created_at: moment(item.created_at).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss') }
            body = {
                "nivel_agua": '',
                "nivel_oxigenio": '',
                "saturacao": '',
                'ph': '',
                'luminosidade': '',
                'temperatura': ''
            }
            initialName = undefined

            return send
        }

        if (!initialName) {
            initialName = item.name
        }
    }).filter((item) => item !== undefined)

    return h.response(chart).code(code);
}

module.exports = {
    findAll
}
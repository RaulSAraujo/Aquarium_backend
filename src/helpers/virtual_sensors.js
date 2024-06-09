const { findAll } = require('../repository/user')
const { update } = require('../repository/sensor')

async function randomizer(server) {
    // Obter usuario aleatorio
    const listUsers = await findAll()

    for (const user of listUsers) {
        for (const aquarium of user.aquariums) {
            const aqua_temp_min = 24
            const aqua_temp_max = 28
            const ph_min = 6.5
            const ph_max = 7.5
            const aqua_ox_min = 5
            const aqua_ox_max = 8
            const light_min = 0
            const light_max = 100

            const now = new Date();
            const hours = now.getHours();
            const random_coef = (Math.sin((hours * 15 * (Math.PI / 180)) - 90)) * (0.4 + Math.random() * 0.8);
            const aqua_temp = ((((aqua_temp_min + aqua_temp_max) / 2) + random_coef * (aqua_temp_max - aqua_temp_min) / 2)).toFixed(2);
            const ph = ((((ph_min + ph_max) / 2) + random_coef * 0.5 * (ph_max - ph_min) / 2)).toFixed(2);
            const aqua_ox = ((((aqua_ox_min + aqua_ox_max) / 2) + random_coef * (aqua_ox_max - aqua_ox_min) / 2)).toFixed(2);
            const light = (Math.random() * (light_max - light_min) + light_min).toFixed(2);

            for (const sensor of aquarium.sensors) {
                try {
                    if (sensor.name === 'Nível de água') {
                        // Ajustar o nível da água
                        let water_level = parseFloat(sensor.current) // valor atual do nivel de agua
                        let aquario_altura = parseFloat(aquarium.height) // Nivel maximo de agua

                        water_level = Math.max(0.9 * aquario_altura, water_level - (Math.random() * aquario_altura * 0.005)).toFixed(2);
                        if (Math.random() < 0.05) { // 5% de chance de resetar o nível da água ao valor normal
                            water_level = aquario_altura.toFixed(2); // Obter o valor anterior de nivel de agua
                        }

                        await update(aquarium.id, sensor.id, { current: water_level }, sensor, server.logger)
                        continue
                    }

                    const map = {
                        'Nível oxigênio': aqua_ox,
                        'Saturação': aqua_ox,
                        'pH': ph,
                        'Luminosidade': light,
                        'Temperatura': aqua_temp
                    }

                    if (map[sensor.name]) {
                        await update(aquarium.id, sensor.id, { current: map[sensor.name] }, sensor, server.logger)
                    }
                } catch (error) {
                    server.logger.error(`failed to create name data ${sensor.name}`)
                }
            }
        }
    }

    server.logger.info(`Data created successfully`)
}

module.exports = {
    randomizer
}
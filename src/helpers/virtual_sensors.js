const { findAll } = require('../repository/user')

async function randomizer() {
    // Obter usuario aleatorio
    const listUsers = await findAll()

    let aquario_altura = 35.2 // Altura do aquario
    let water_level = 32 // valor atual do nivel de agua
    const aqua_temp_min = 24
    const aqua_temp_max = 28
    const ph_min = 6.5
    const ph_max = 7.5
    const aqua_ox_min = 5
    const aqua_ox_max = 8
    const temp_min = 17.5
    const temp_max = 27.5
    const light_min = 0
    const light_max = 100

    // date1.hour obter hora atual
    const now = new Date();
    const hours = now.getHours();
    const random_coef = (Math.sin((hours * 15 * (Math.PI / 180)) - 90)) * (0.4 + Math.random() * 0.8);
    const env_temp = ((((temp_min + temp_max) / 2) + random_coef * (temp_max - temp_min) / 2)).toFixed(4);
    const aqua_temp = ((((aqua_temp_min + aqua_temp_max) / 2) + random_coef * (aqua_temp_max - aqua_temp_min) / 2)).toFixed(4);
    const ph = ((((ph_min + ph_max) / 2) + random_coef * 0.5 * (ph_max - ph_min) / 2)).toFixed(4);
    const aqua_ox = ((((aqua_ox_min + aqua_ox_max) / 2) + random_coef * (aqua_ox_max - aqua_ox_min) / 2)).toFixed(4);
    const light = (Math.random() * (light_max - light_min) + light_min).toFixed(4);
    water_level = water_level.toFixed(4);

    console.log(`DATA_HORA: ${now.toISOString()} ---- COEFI.: ${parseFloat(random_coef).toFixed(4)} --- TEMP: ${env_temp} --- AQUA_TEMP: ${aqua_temp} --- PH: ${ph} --- OX: ${aqua_ox} --- LIGHT: ${light} --- WATER: ${water_level}`);

    // Ajustar o nível da água
    if (Math.random() < 0.03) { // 5% de chance de zerar o nível da água por uma hora ou uma hora e meia
        // Verificar os dois ultimos valores

    } else {
        water_level = Math.max(0.9 * aquario_altura, water_level - (Math.random() * aquario_altura * 0.005).toFixed(4));
        if (Math.random() < 0.05) { // 5% de chance de resetar o nível da água ao valor normal
            water_level = aquario_altura; // Obter o valor anterior de nivel de agua
        }
    }
}

module.exports = {
    randomizer
}
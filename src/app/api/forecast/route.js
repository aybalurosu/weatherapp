

export async function POST (request) {
    const url = new URL(request.url);
    const latitude = url.searchParams.get('latitude');
    const longitude = url.searchParams.get('longitude');

    if (!latitude && !longitude) {
        return Response.json({
            error: 'Parameters required',
        });
    }

    try {
        const forecastData = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${encodeURIComponent(latitude)}&longitude=${encodeURIComponent(longitude)}&daily=apparent_temperature_max,apparent_temperature_min,precipitation_probability_max&timezone=auto&forecast_days=7`);
        const data = await forecastData.json();

        const time = data.daily.time;
        const apparentTemperatureMax = data.daily.apparent_temperature_max;
        const apparentTemperatureMin = data.daily.apparent_temperature_min;
        const precipitationProbabilityMax = data.daily.precipitation_probability_max;

        const forecastDetails = {
            time: time,
            maxTemperature: apparentTemperatureMax,
            minTemperature: apparentTemperatureMin,
            precipitationProbability: precipitationProbabilityMax,
        }

        return new Response(JSON.stringify({ forecastDetails }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });

    } catch (error) {
        console.error(error);
    }
}
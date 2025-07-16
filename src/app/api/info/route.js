
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
        const forecastData = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${encodeURIComponent(latitude)}&longitude=${encodeURIComponent(longitude)}&daily=uv_index_max&hourly=temperature_2m&current=relative_humidity_2m,wind_speed_10m&current=temperature_2m,is_day,precipitation,rain,showers,snowfall,cloud_cover&timezone=auto&forecast_days=1`);
        const data = await forecastData.json();

        // weather forecast
        const current = data.current;
        const temperature_2m = data.hourly.temperature_2m;
        const time = data.hourly.time;
        // weather details
        const wind = data.current.wind_speed_10m;
        const humidity = data.current.relative_humidity_2m;
        const uvindex = data.daily.uv_index_max;

        if (!current || !temperature_2m || !time || !wind || !humidity || !uvindex) {
            return new Response(JSON.stringify([]), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }

        const currentWeather = {
            currentTemperature: current.temperature_2m,
        };

        return new Response(JSON.stringify({ currentWeather, temperature_2m, time, wind, humidity, uvindex}), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });

    } catch (error) {
        console.error(error);
    }
}
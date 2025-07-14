
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
        const forecastData = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${encodeURIComponent(latitude)}&longitude=${encodeURIComponent(longitude)}&hourly=temperature_2m&current=temperature_2m,is_day,precipitation,rain,showers,snowfall,cloud_cover&timezone=auto&forecast_days=1`);
        const data = await forecastData.json();

        let current = data.current;
        let temperature_2m = data.hourly.temperature_2m;

        if (!current && !temperature_2m) {
            return new Response(JSON.stringify([]), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }

        const currentWeather = {
            currentTemperature: current.temperature_2m,
            cloud_cover: current.cloud_cover,
            rain: current.rain,
            precipitation: current.precipitation,
            showers: current.showers,
            snowfall: current.snowfall,
            is_day: current.is_day,
        };

        return new Response(JSON.stringify({ currentWeather, temperature_2m}), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });

    } catch (error) {
        console.error(error);
    }
}
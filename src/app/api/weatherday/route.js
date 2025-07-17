

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
        const forecastData = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${encodeURIComponent(latitude)}&longitude=${encodeURIComponent(longitude)}&hourly=rain,cloud_cover_high,cloud_cover_mid,cloud_cover_low,cloud_cover,snowfall,showers,is_day&timezone=auto&forecast_days=1`);
        const data = await forecastData.json();

        const rain = data.hourly.rain;
        const cloudCover = data.hourly.cloud_cover;
        const snowfall = data.hourly.snowfall;
        const showers = data.hourly.showers;
        const isDay = data.hourly.is_day;

        const weatherDay = {
            rain: rain,
            cloudCover: cloudCover,
            snowfall: snowfall,
            showers: showers,
            isDay: isDay
        }

        return new Response(JSON.stringify({ weatherDay }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });

    } catch (error) {
        console.error(error);
    }
}
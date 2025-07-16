

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
        const forecastData = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${encodeURIComponent(latitude)}&longitude=${encodeURIComponent(longitude)}&hourly=,rain,cloud_cover_high,cloud_cover_mid,cloud_cover_low,cloud_cover,snowfall,showers&timezone=auto&forecast_days=1`);
        const data = await forecastData.json();

        const rain = data.hourly.rain;
        const cloudMid = data.hourly.cloud_cover_mid;
        const cloudCover = data.hourly.cloud_cover;
        const cloudLow = data.hourly.cloud_cover_low;
        const snowfall = data.hourly.snowfall;
        const showers = data.hourly.showers;

        const weatherDay = {
            rain: rain,
            cloudMid: cloudMid,
            cloudCover: cloudCover,
            cloudLow: cloudLow,
            snowfall: snowfall,
            showers: showers,
        }

        console.log(weatherDay);

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
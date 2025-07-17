

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
        const forecastData = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${encodeURIComponent(latitude)}&longitude=${encodeURIComponent(longitude)}&current=is_day,weather_code&timezone=auto&forecast_days=1`);
        const data = await forecastData.json();

        const weatherCode = data.current.weather_code;
        const isDay = data.current.is_day;

        const currentDetails = {
            weatherCode: weatherCode,
            isDay: isDay,
        }

        console.log(currentDetails)

        return new Response(JSON.stringify({ currentDetails }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });

    } catch (error) {
        console.error(error);
    }
}
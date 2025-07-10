import { get } from "http";

export async function POST (request) {

    const url = new URL(request.url);
    const city = url.searchParams.get('name');

    if (!city) {
        return Response.json({ error: 'City is required' }, { status: 400 });
    }

    try {
        const geoCoding = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&language=es&format=json`);
        const geoData = await geoCoding.json();

        if (!geoData.results) {
            return new Response(JSON.stringify([]), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }

        const locations = geoData.results.map((res) => ({
            name: res.name,
            country: res.country,
            region: res.admin1,
            province: res.admin2,
            municipality: res.admin3,
        }));


        return new Response(JSON.stringify(locations), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });

    } catch (error) {
        console.log(error);
    }
    
}
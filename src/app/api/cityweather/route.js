import { CityInformation, POST } from "../search/route";

export async function GET (request) {

    const url = new URL(request.url);
    const city = url.searchParams.get('name');

    if (!city) {
        return Response.json({ error: 'City is required' }, { status: 400 });
    }

    try {
        const geoCoding = await POST(city);
        const geoData = await geoCoding.json();

        if (!geoData.results) {
            return new Response(JSON.stringify([]), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }

        forecastData = geoData.results.map((res) => ({
            latitude: res.latitude,
            longitude: res.longitude,
        }));

        return new Response(JSON.stringify(forecastData), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });

    } catch (error) {
        console.log(error);
    }
}

// export default async function POST () {

//     try {

//         const forecastData = await GetForecastData();
//         const data = await forecastData.json();

//     } catch {

//     }
// }

export async function GET (req, res) {

    if (req.method != 'GET') {
        return res.status(405).json({
            error: 'Only GET allowed'
        })
    }

    const city = req.body[0];
    console.log(city)

    if (!city) {
        return res.status(404).json({
            error: 'Required'
        })
    }

    try {
        const geoCode = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=10&language=en&format=json`);
    
        const geoCodeData = await geoCode.json();
        console.log(geoCodeData[0]);
    
    
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Internal Server Error'
        })
    }
}
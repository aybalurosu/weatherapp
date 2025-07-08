

export default async function SearchCity(city) {

    const res = await fetch('/api/search');
    if (!res.ok) {
        const text = await res.text(); // helpful for debugging
        console.error('Unexpected response:', text);
        throw new Error('API error');
    }
    const data = await res.json();

}   
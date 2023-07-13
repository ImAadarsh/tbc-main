export default async function handler(req, res) {
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

    const data = await fetch(
        `https://maps.googleapis.com/maps/api/place/queryautocomplete/json?input=${req.query.text}&key=${API_KEY}`,
    ).then(response => response.json());
    
    res.json(data);
}
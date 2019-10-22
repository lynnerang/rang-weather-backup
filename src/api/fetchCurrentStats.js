export const fetchCurrentStats = async () => {
  const res = await fetch(`https://api.ambientweather.net/v1/devices?applicationKey=${process.env.REACT_APP_ANBI_APP_KEY}&apiKey=${process.env.REACT_APP_ANBI_API_KEY}`)
  if (!res.ok) {
    throw new Error('Failed to fetch current stats data.');
  }
  return await res.json();
};
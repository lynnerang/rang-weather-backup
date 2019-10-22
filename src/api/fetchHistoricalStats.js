export const fetchHistoricalStats = async () => {
  const res = await fetch(`https://api.ambientweather.net/v1/devices/${process.env.REACT_APP_MAC_ADDRESS}?applicationKey=${process.env.REACT_APP_ANBI_APP_KEY}&apiKey=${process.env.REACT_APP_ANBI_API_KEY}`)
  if (!res.ok) {
    throw new Error('Failed to fetch historical stats data.');
  }
  return await res.json();
};
import { baseUrl, apiKey, appKey, macAddress } from '../api/utilities';

export const fetchHistoricalStats = async () => {
  const res = await fetch(`${baseUrl}/${macAddress}?applicationKey=${appKey}&apiKey=${apiKey}`)
  if (!res.ok) {
    throw new Error('Failed to fetch historical stats data.');
  }
  return await res.json();
};
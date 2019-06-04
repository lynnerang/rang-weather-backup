import { baseUrl, apiKey, appKey } from '../api/utilities';

export const fetchCurrentStats = async () => {
  const res = await fetch(`${baseUrl}?applicationKey=${appKey}&apiKey=${apiKey}`)
  if (!res.ok) {
    throw new Error('Failed to fetch current stats data.');
  }
  return await res.json();
};
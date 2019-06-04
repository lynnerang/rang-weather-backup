import { baseUrl, apiKey, appKey, macAddress, darkskyApi } from '../api/utilities';

export const fetchCurrentStats = async () => {
  const res = await fetch(`${baseUrl}?applicationKey=${appKey}&apiKey=${apiKey}`)
  if (!res.ok) {
    throw new Error('Failed to fetch current stats data.');
  }
  return await res.json();
};

export const fetchHistoricalStats = async () => {
  const res = await fetch(`${baseUrl}/${macAddress}?applicationKey=${appKey}&apiKey=${apiKey}`)
  if (!res.ok) {
    throw new Error('Failed to fetch historical stats data.');
  }
  return await res.json();
};

export const fetchForecastData = async () => {
  const res = await fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${darkskyApi}/40.0114669,-105.0940768?exclude=minutely,alerts,flags`)
  if (!res.ok) {
    throw new Error('Failed to fetch forecast data.');
  }
  return await res.json();
};


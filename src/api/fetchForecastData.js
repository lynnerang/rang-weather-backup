export const fetchForecastData = async () => {
  const res = await fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${process.env.REACT_APP_DARKSKY_API_KEY}/40.0114669,-105.0940768?exclude=minutely,alerts,flags`)
  if (!res.ok) {
    throw new Error('Failed to fetch forecast data.');
  }
  return await res.json();
};
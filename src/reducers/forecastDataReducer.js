export const forecastDataReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_FORECAST_DATA':
			return action.payload.forecastData;
		default:
			return state;
	}
};

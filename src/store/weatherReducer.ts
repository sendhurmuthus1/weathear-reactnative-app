import {createSlice} from '@reduxjs/toolkit';
import {getForecastDetails, getWeatherDetails} from './weatherAction';
import moment from 'moment';

interface Weather {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  weather: Array<{description: string}>;
  wind: {
    speed: number;
  };
  clouds: {
    all: number;
  };
}

interface Forecast {
  main: {
    temp: number;
  };
}

interface WeatherState {
  weather: Weather | null;
  foreCastList: Forecast[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  weather: null,
  foreCastList: null,
  loading: false,
  error: null,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getWeatherDetails.fulfilled, (state, action) => {
        state.weather = action.payload;
      })
      .addCase(getForecastDetails.fulfilled, (state, action) => {
        const forecastData = action.payload.list;
        const now = new Date();

        const filterNextWeekForeCastData = forecastData.filter((entry: any) => {
          const entryDate = new Date(entry.dt * 1000);
          return (
            entryDate.getDate() > now.getDate() &&
            entryDate.getDate() <= now.getDate() + 5
          );
        });

        const dailyData: any[] = [];
        const groupedByDay = filterNextWeekForeCastData.reduce((acc, forecast) => {
          const date = moment(forecast.dt_txt).format('YYYY-MM-DD');
          if (!acc[date]) {
            acc[date] = [];
          }
          acc[date].push(forecast);
          return acc;
        }, {});

        Object.values(groupedByDay).forEach((dayForecast: any) => {
          const middayForecast =
            dayForecast.find(
              (f: any) => moment(f.dt_txt).format('HH:mm') === '12:00',
            ) || dayForecast[Math.floor(dayForecast.length / 2)];
          dailyData.push(middayForecast);
        });

        const filterNextWeeksData = dailyData.slice(0, 5);

        state.foreCastList = filterNextWeeksData;
      });
  },
});
export default weatherSlice.reducer;

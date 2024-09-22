import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '69682812839d0776d2b93222f23df7a9';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeatherDetails = createAsyncThunk(
  'getWeatherDetails',
  async (selectedCity: string) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/weather?q=${selectedCity}&appid=${API_KEY}&units=metric`,
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);
export const getForecastDetails = createAsyncThunk(
  'getForecastDetails',
  async (selectedCity: string) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/forecast?q=${selectedCity}&appid=${API_KEY}&units=metric`,
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

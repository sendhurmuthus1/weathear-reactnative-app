import {
  Button,
  FlatList,
  ListRenderItem,
  Text,
  TextInput,
  View,
  ScrollView, 
  Keyboard
} from 'react-native';
import React, {useState} from 'react';
import List from '../components/List';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {getForecastDetails, getWeatherDetails} from '../store/weatherAction';
import styles from '../styles/styles';

const HomeScreen = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const {weather, foreCastList} = useSelector(
    (state: RootState) => state.weather,
  );
  const dispatch = useDispatch();

  const handleCitySearch = () => {
    if (!selectedCity) return;

    Keyboard.dismiss();

    dispatch(getWeatherDetails(selectedCity)).catch(error =>
      console.error('Error fetching weather:', error),
    );
    dispatch(getForecastDetails(selectedCity)).catch(error =>
      console.error('Error fetching forecast:', error),
    );
  };
  const renderItem: ListRenderItem<{main: {temp: string}}> = ({item}) => (
    <List data={item} />
  ); 
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter city"
          value={selectedCity}
          onChangeText={setSelectedCity}
          placeholderTextColor={'#aaa'}
        />
        <Button
          title="Weather Details"
          color="#3f79"
          onPress={handleCitySearch}
          disabled={!selectedCity}
        />
      </View> 
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {weather && (
          <View>
            <View style={styles.weatherContainer}>
              <Text style={styles.heading}>{weather?.name}</Text>
              <Text style={styles.cityTemp}>{weather?.main?.temp}°C</Text>
              <Text style={styles.bodyText}>
                {weather?.weather[0].description}
              </Text>
            </View>
            <View>
              <View style={styles.containers}>
                <View style={styles.box}>
                  <View style={styles.boxHeader}>
                    <Text style={styles.boxTitle}>Air Conditions</Text>
                  </View>

                  <View style={styles.row}>
                    <View style={styles.column}>
                      <View style={styles.innerContainer}>
                        <Text style={styles.innerLabel}>Feel</Text>
                        <Text style={styles.innerTemp}>
                          {weather?.main?.feels_like}°C
                        </Text>
                      </View>
                    </View>
                    <View style={styles.column}>
                      <View style={styles.innerContainer}>
                        <Text style={styles.innerLabel}>Low</Text>
                        <Text style={styles.innerTemp}>
                          {weather?.main?.temp_min}°C
                        </Text>
                      </View>
                    </View>
                    <View style={styles.column}>
                      <View style={styles.innerContainer}>
                        <Text style={styles.innerLabel}>High</Text>
                        <Text style={styles.innerTemp}>
                          {weather?.main?.temp_max}m/s
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.column}>
                      <View style={styles.innerContainer}>
                        <Text style={styles.innerLabel}>Wind</Text>
                        <Text style={styles.innerTemp}>
                          {weather?.wind?.speed} m/s
                        </Text>
                      </View>
                    </View>
                    <View style={styles.column}>
                      <View style={styles.innerContainer}>
                        <Text style={styles.innerLabel}>Humidity</Text>
                        <Text style={styles.innerTemp}>
                          {weather?.main?.humidity} %
                        </Text>
                      </View>
                    </View>
                    <View style={styles.column}>
                      <View style={styles.innerContainer}>
                        <Text style={styles.innerLabel}>Clouds</Text>
                        <Text style={styles.innerTemp}>
                          {weather?.clouds?.all} %
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
        <View style={styles.weatherContainer}>
          <Text style={styles.heading}>Weekly Forecast</Text>
        </View>
        <FlatList
          data={foreCastList}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={styles.flatListContainer}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

 
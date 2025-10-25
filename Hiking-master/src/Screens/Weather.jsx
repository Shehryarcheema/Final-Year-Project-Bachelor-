import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

const WeatherInformationScreen = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchWeatherData = async loc => {
    if (loc.trim() === '') {
      setErrorMessage('Please enter a location to get the weather details.');
      return;
    }

    setIsLoading(true);
    setWeatherData(null);
    setErrorMessage('');
    try {
      const response = await axios.post(
        'http://192.168.100.8:5000/api/v1/getWeatherDetails',
        {place: loc},
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      setIsLoading(false);

      if (response.data && response.status === 200) {
        setWeatherData(response.data);
      } else {
        setErrorMessage('No weather data found for the specified location.');
      }
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error.message || 'Failed to fetch weather data.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather Information</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor={'white'}
        placeholder="Enter Trail Location"
        value={location}
        onChangeText={setLocation}
      />
      <Button title="Get Weather" onPress={() => fetchWeatherData(location)} />
      {isLoading && <ActivityIndicator size="large" color="#00ff00" />}
      {weatherData && !isLoading && (
        <View style={styles.weatherDataContainer}>
          <Text style={styles.weatherDataText}>
            Location: {weatherData.location.name}
          </Text>
          <Text style={styles.weatherDataText}>
            Temperature: {weatherData.current.temp_c}°C /{' '}
            {weatherData.current.temp_f}°F
          </Text>
          <Text style={styles.weatherDataText}>
            Condition: {weatherData.current.condition.text}
          </Text>
          <Text style={styles.weatherDataText}>
            Wind Speed: {weatherData.current.wind_kph} kph (
            {weatherData.current.wind_mph} mph)
          </Text>
          <Text style={styles.weatherDataText}>
            Wind Direction: {weatherData.current.wind_dir}
          </Text>
          <Text style={styles.weatherDataText}>
            Pressure: {weatherData.current.pressure_mb} mb (
            {weatherData.current.pressure_in} in)
          </Text>
          <Text style={styles.weatherDataText}>
            Precipitation: {weatherData.current.precip_mm} mm (
            {weatherData.current.precip_in} in)
          </Text>
          <Text style={styles.weatherDataText}>
            Humidity: {weatherData.current.humidity}%
          </Text>
          <Text style={styles.weatherDataText}>
            Cloud Cover: {weatherData.current.cloud}%
          </Text>
        </View>
      )}
      {!isLoading && errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    color: 'white',
  },
  weatherDataContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  weatherDataText: {
    fontSize: 18,
    marginBottom: 5,
    color: 'white',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    marginTop: 20,
  },
});

export default WeatherInformationScreen;

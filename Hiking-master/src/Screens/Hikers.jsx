import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const HikersScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Welcome, Outdoor Enthusiast!</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('trial')}>
            <Text style={styles.buttonText}>Discover Trails</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('plan')}>
            <Text style={styles.buttonText}>Plan Your Hike</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('progress')}>
            <Text style={styles.buttonText}>Scheduled Hikes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Assuming you want a black theme for professional look
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white', // A pleasant blue that stands out but is not overly bright
    padding: 15,
    width: '80%',
    borderRadius: 25,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default HikersScreen;

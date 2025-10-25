import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

const ProgressTrackerScreen = () => {
  const [plannedHikes, setPlannedHikes] = useState([]);
  const [totals, setTotals] = useState({totalDistance: 0, totalElevation: 0});

  useEffect(() => {
    const fetchPlannedHikes = async () => {
      try {
        const response = await axios.get(
          'http://192.168.100.8:5000/api/v1/getHikePlanning',
        );
        setPlannedHikes(response.data);

        const totalDistance = response.data.reduce(
          (acc, hike) => acc + hike.length,
          0,
        );
        const totalElevation = response.data.reduce(
          (acc, hike) => acc + hike.elevation_gain,
          0,
        );
        setTotals({
          totalDistance: totalDistance / 1000,
          totalElevation,
        });
      } catch (error) {
        console.error('Error fetching planned hikes:', error);
      }
    };

    fetchPlannedHikes();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Your Hiking Progress</Text>

      <View style={styles.totalsContainer}>
        <Text style={styles.totalText}>
          Total Distance: {totals.totalDistance.toFixed(2)} km
        </Text>
        <Text style={styles.totalText}>
          Total Elevation Gain: {totals.totalElevation.toFixed(2)} m
        </Text>
      </View>

      <View style={styles.hikesList}>
        {plannedHikes.map(hike => (
          <TouchableOpacity
            key={hike._id}
            style={styles.hikeItem}
            onPress={() => {
              // Handle navigation to detail screen
            }}>
            <Text style={styles.hikeTrail}>{hike.name}</Text>
            <Text style={styles.hikeDetail}>
              Date: {hike.date} - Length: {hike.length} meters - Elevation Gain:{' '}
              {hike.elevation_gain} meters
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
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
    textDecorationLine: 'underline',
  },
  totalsContainer: {
    marginBottom: 30,
  },
  totalText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
    color: 'white',
  },
  hikesList: {
    marginBottom: 30,
  },
  hikeItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  hikeTrail: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  hikeDetail: {
    fontSize: 14,
    color: 'white',
  },
});

export default ProgressTrackerScreen;

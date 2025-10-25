import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

const TrailDiscoveryScreen = ({navigation}) => {
  const [trails, setTrails] = useState([]);

  // Import images from your assets
  const images = [
    require('../Assets/01.jpg'),
    require('../Assets/02.jpg'),
    require('../Assets/03.jpg'),
    // Add more images as required
  ];

  const getRandomImage = () => {
    // Get a random index
    const index = Math.floor(Math.random() * images.length);
    // Return an image from the images array
    return images[index];
  };

  useEffect(() => {
    const fetchTrails = async () => {
      try {
        const response = await axios.get(
          'http://192.168.100.8:5000/api/v1/getAllTrails',
        );
        setTrails(response.data); // Update to match the structure of your actual response
      } catch (error) {
        console.error('Error fetching trails:', error);
      }
    };

    fetchTrails();
  }, []);
  const renderTrailItem = ({item}) => {
    // Call the function to get a random image for each trail item
    const image = getRandomImage();

    return (
      <TouchableOpacity style={styles.trailItem} onPress={() => {}}>
        <Image
          source={image} // Set the source to the random image
          style={styles.trailImage}
        />
        <View style={styles.trailDetails}>
          <Text style={styles.trailName}>{item.name}</Text>
          <Text>{item.area_name}</Text>
          <Text>{`City: ${item.city_name}, ${item.state_name}`}</Text>
          <Text>{`Country: ${item.country_name}`}</Text>
          <Text>{`Difficulty: ${item.difficulty_rating} / 5`}</Text>
          <Text>{`Length: ${item.length} meters`}</Text>
          {/* Add more details as needed */}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={trails}
      renderItem={renderTrailItem}
      keyExtractor={item => item.trail_id.toString()}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 10,
  },
  trailItem: {
    margin: 20,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 10,
    elevation: 2, // for Android
    shadowColor: '#000000', // for iOS
    shadowOffset: {width: 0, height: 2}, // for iOS
    shadowOpacity: 0.1, // for iOS
    shadowRadius: 2, // for iOS
  },
  trailImage: {
    width: 100,
    height: 120,
    marginRight: 10,
  },
  trailDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  trailName: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
});

export default TrailDiscoveryScreen;

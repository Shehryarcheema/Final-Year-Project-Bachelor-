import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Text
        style={{color: 'white', fontSize: 30, padding: 25, fontWeight: '700'}}>
        Welcome User!
      </Text>
      <TextInput style={styles.searchInput} placeholder="Search trails..." />
      <View style={styles.imagecontainer}>
        <Image source={require('../Assets/01.jpg')} style={styles.image} />
        <Image source={require('../Assets/02.jpg')} style={styles.image} />
        <Image source={require('../Assets/03.jpg')} style={styles.image} />
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('hiker')}>
          <Text style={styles.menuText}>Hikers</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('filter')}>
          <Text style={styles.menuText}>Filter & Search</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('weather')}>
          <Text style={styles.menuText}>Weather Information</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('safety')}>
          <Text style={styles.menuText}>Safety Tips & Alerts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('emergency')}>
          <Text style={styles.menuText}>Emergency Services</Text>
        </TouchableOpacity>
      </View>
      {/* Add additional components like featured trails or profile access */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  searchInput: {
    marginBottom: 20,
    marginTop: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#FFF',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  menuContainer: {
    padding: 30,
  },
  menuItem: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 30,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  menuText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginLeft: 10,
  },
  imagecontainer: {
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10, // Adjust as needed for spacing from screen edges
  },
  image: {
    width: 100, // Set your desired width
    height: 100, // Ensure the height is the same as the width for square images
  },
});

export default HomeScreen;

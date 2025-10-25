import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Modal,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import axios from 'axios'; // Make sure axios is installed and imported

const difficulties = ['Easy', 'Medium', 'Hard']; // Assuming these map to difficulty ratings 1, 2, 3, etc.

const FilterSearchScreen = () => {
  const [location, setLocation] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [length, setLength] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleSelectDifficulty = difficulty => {
    setSelectedDifficulty(difficulty);
    setModalVisible(false);
  };

  const searchTrails = async () => {
    // Convert selected difficulty to a difficulty rating if needed
    const difficultyRating = difficulties.indexOf(selectedDifficulty) + 1;
    // Construct the search query
    const query = {
      name: location,
      difficulty_rating: difficultyRating,
      length,
    };
    try {
      const response = await axios.get(
        'http://192.168.100.8:5000/api/v1/getUniqueTrailInfo',
        {params: query},
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter and Search</Text>
      <TextInput
        style={styles.input}
        placeholder="Location"
        placeholderTextColor={'white'}
        value={location}
        onChangeText={setLocation}
      />
      <TouchableOpacity
        style={styles.input}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.text}>
          {selectedDifficulty || 'Select Difficulty'}
        </Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView>
              {difficulties.map((difficulty, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.optionItem}
                  onPress={() => handleSelectDifficulty(difficulty)}>
                  <Text style={styles.optionText}>{difficulty}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <Button
              title="Close"
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
        </View>
      </Modal>
      <TextInput
        style={styles.input}
        placeholder="Length"
        value={length}
        onChangeText={setLength}
        keyboardType="numeric"
        placeholderTextColor={'white'}
      />
      <Button title="Search Trails" onPress={searchTrails} />
      <FlatList
        data={searchResults}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text>Length: {item.length} meters</Text>
            <Text>Difficulty: {item.difficulty_rating}</Text>
            {/* Add more details as needed */}
          </View>
        )}
      />
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
  text: {
    fontSize: 18,
    color: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: 250,
    height: 300,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  optionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionText: {
    fontSize: 18,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Add more styles for your card as needed
});

export default FilterSearchScreen;

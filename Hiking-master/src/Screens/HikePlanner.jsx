import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import axios from 'axios'; // Make sure axios is installed

const HikePlannerScreen = ({navigation, route}) => {
  const [hikeName, setHikeName] = useState('');
  const [hikeDate, setHikeDate] = useState('');
  const [hikeDuration, setHikeDuration] = useState('');
  const [hikeNotes, setHikeNotes] = useState('');
  const [lang, setLang] = useState(route.params?.latitude.toString() || '');
  const [long, setLong] = useState(route.params?.longitude.toString() || '');

  const submitHikePlan = async () => {
    const hikePlan = {
      lang: parseFloat(lang),
      long: parseFloat(long),
      name: hikeName,
      date: hikeDate,
      duration: parseFloat(hikeDuration),
      description: hikeNotes,
    };

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };

    try {
      const response = await axios.post(
        'http://192.168.100.8:5000/api/v1/hikePlanning',
        hikePlan,
        config,
      );
      Alert.alert('Success', 'Hiking details saved successfully');
    } catch (error) {
      Alert.alert(
        'Error',
        error.response ? error.response.data.message : error.message,
      );
    }
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Plan Your Hike</Text>

      <TextInput
        style={styles.input}
        placeholder="Hike Name"
        value={hikeName}
        onChangeText={setHikeName}
        placeholderTextColor={'white'}
      />

      <TextInput
        style={styles.input}
        placeholder="Date (e.g., 2024-04-15)"
        value={hikeDate}
        onChangeText={setHikeDate}
        placeholderTextColor={'white'}
      />

      <TextInput
        style={styles.input}
        placeholder="Duration (e.g., 5 hours)"
        value={hikeDuration}
        onChangeText={setHikeDuration}
        placeholderTextColor={'white'}
      />

      <TextInput
        style={styles.input}
        placeholder="Latitude"
        value={lang} // Bind to lang state
        onChangeText={setLang} // Update state on change
        placeholderTextColor={'white'}
      />
      <TextInput
        style={styles.input}
        placeholder="Longitude"
        value={long} // Bind to long state
        onChangeText={setLong} // Update state on change
        placeholderTextColor={'white'}
      />

      <TextInput
        style={styles.inputLarge}
        placeholder="Notes (e.g., items to bring, goals, etc.)"
        value={hikeNotes}
        onChangeText={setHikeNotes}
        multiline={true}
        placeholderTextColor={'white'}
        numberOfLines={4}
      />

      <TouchableOpacity style={styles.button} onPress={submitHikePlan}>
        <Text style={styles.buttonText}>Submit Plan</Text>
      </TouchableOpacity>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  input: {
    fontSize: 18,
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    color: 'white',
  },
  inputLarge: {
    fontSize: 18,
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    textAlignVertical: 'top',
    color: 'white',
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default HikePlannerScreen;

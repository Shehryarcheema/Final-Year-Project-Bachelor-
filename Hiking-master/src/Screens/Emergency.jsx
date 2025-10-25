import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';

const emergencyNumbers = [
  {name: 'Ambulance', number: '1122'},
  {name: 'Police', number: '15'},
  {name: 'Fire Brigade', number: '16'},
  {name: 'Motorway Police', number: '130'},
];

const EmergencyServicesScreen = () => {
  const handleEmergencyCall = number => {
    Alert.alert(
      'Emergency Call',
      `Are you sure you want to call ${number}?`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Call canceled.'),
          style: 'cancel',
        },
        {
          text: 'Call',
          onPress: () => Linking.openURL(`tel:${number}`),
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>Select an emergency service to call:</Text>
      {emergencyNumbers.map(service => (
        <TouchableOpacity
          key={service.name}
          style={styles.callButton}
          onPress={() => handleEmergencyCall(service.number)}>
          <Text style={styles.callButtonText}>{`Call ${service.name}`}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'black',
  },
  infoText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  callButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '80%', // Set a fixed width for buttons
    justifyContent: 'center', // Center text horizontally
    alignItems: 'center', // Center text vertically
  },
  callButtonText: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default EmergencyServicesScreen;

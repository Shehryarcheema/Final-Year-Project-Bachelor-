import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Modal} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native'; // Ensure that you have @react-navigation/native installed and imported

const PlanHike = () => {
  const navigation = useNavigation();
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleMapPress = e => {
    const {latitude, longitude} = e.nativeEvent.coordinate;
    setSelectedLocation({
      id: 'custom',
      name: 'Custom Location',
      coordinates: {latitude, longitude},
    });
    setModalVisible(true);
  };

  const handlePlanNow = () => {
    if (selectedLocation) {
      navigation.navigate('planner', {
        latitude: selectedLocation.coordinates.latitude,
        longitude: selectedLocation.coordinates.longitude,
      });
    }
    setModalVisible(false);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.8651,
          longitude: -119.5383,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}
        showsUserLocation
        onPress={handleMapPress}>
        {selectedLocation && (
          <Marker
            key={selectedLocation.id}
            coordinate={selectedLocation.coordinates}
            title={selectedLocation.name}
          />
        )}
      </MapView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {selectedLocation && (
              <>
                <Text style={styles.modalTitle}>{selectedLocation.name}</Text>
                <Text style={styles.modalDetail}>
                  Latitude: {selectedLocation.coordinates.latitude.toFixed(6)}
                </Text>
                <Text style={styles.modalDetail}>
                  Longitude: {selectedLocation.coordinates.longitude.toFixed(6)}
                </Text>
                <TouchableOpacity
                  style={styles.planButton}
                  onPress={handlePlanNow}>
                  <Text style={styles.planButtonText}>Plan Now</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={closeModal}>
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 24,
  },
  modalDetail: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
  planButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    elevation: 2,
    borderRadius: 20,
  },
  planButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#f44336',
    padding: 10,
    elevation: 2,
    borderRadius: 20,
    marginTop: 10,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // Add other styles that you might need
});

export default PlanHike;

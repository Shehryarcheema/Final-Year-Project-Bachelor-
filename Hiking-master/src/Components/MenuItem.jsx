import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Ensure you install this package
export default MenuItem = ({ title, iconName, navigateTo }) => {
    const navigation= useNavigation();
    
    return (
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => useNavigation.navigate(navigateTo)}>
        <Icon name={iconName} size={24} color="#4169E1" />
        <Text style={styles.menuText}>{title}</Text>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({


 
    menuContainer: {
      padding: 20,
    },
    menuItem: {
      flexDirection: 'row',
      backgroundColor: '#FFF',
      padding: 15,
      borderRadius: 10,
      marginBottom: 10,
      alignItems: 'center',
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
    },
    menuText: {
      fontSize: 18,
      fontWeight: '600',
      color: '#333',
      marginLeft: 10,
    },
  });
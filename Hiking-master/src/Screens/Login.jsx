import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import axios from 'axios';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Basic validation
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    try {
      const response = await axios.post(
        'http://192.168.100.8:5000/api/v1/signin',
        {
          email,
          password,
        },
      );

      if (response.status === 200) {
        // Assuming the response will have a token or similar to navigate to 'home'
        Alert.alert('Login Success', `Welcome, ${email}`);
        navigation.navigate('home');
      } else {
        // Handle other statuses or errors
        Alert.alert(
          'Login Failed',
          'Please check your credentials and try again',
        );
      }
    } catch (error) {
      // Handle network or other errors
      Alert.alert('Login Error', error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Welcome to HikingApp</Text>
        <Text style={{color: 'white', fontSize: 22, marginBottom: 20}}>
          Please Login
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#A9A9A9"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#A9A9A9"
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('signup')}>
          <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

// Styles remain unchanged
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: 'white',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#FFF',
  },
  button: {
    width: '100%',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
  },
  signupText: {
    marginTop: 20,
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default LoginScreen;

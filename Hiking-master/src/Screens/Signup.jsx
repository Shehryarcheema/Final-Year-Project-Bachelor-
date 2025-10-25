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

const SignupScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    if (
      name.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      confirmPassword.trim() === ''
    ) {
      Alert.alert('Error', 'Please fill all the fields');
      return;
    }

    try {
      const response = await axios.post(
        'http://192.168.100.8:5000/api/v1/register',
        {
          name,
          email,
          password,
          confirmPassword,
        },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );

      // Assuming the API sends back a status code of 200 or 201 for success
      if (response.status === 200 || response.status === 201) {
        Alert.alert('Success', 'Account created successfully');
        navigation.navigate('login');
      } else {
        // If the API response includes a message, display it; otherwise, display a generic error
        const errorMessage =
          response.data.message || 'Failed to create account';
        Alert.alert('Error', errorMessage);
      }
    } catch (error) {
      // Displaying error message from the server if available, otherwise show error.toString()
      const errorMessage = error.response?.data?.message || error.toString();
      Alert.alert('Error', errorMessage);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.signupContainer}>
        <Text style={styles.title}>Create your account!</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
          autoCapitalize="none"
          placeholderTextColor="#A9A9A9"
        />
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
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          placeholderTextColor="#A9A9A9"
        />
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text style={styles.loginText}>Already have an account? Log In</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  signupContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: 'white',
    marginBottom: 40,
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
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
  },
  loginText: {
    marginTop: 20,
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default SignupScreen;

import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Pressable,
  ImageSourcePropType,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/logo.png') as ImageSourcePropType}
          style={styles.logo}
        />
      </View>

      <Image
        source={require('../../assets/eng.jpg') as ImageSourcePropType}
        style={styles.backgroundImage}
        resizeMode="contain"
      />

      <View style={styles.contentContainer}>
        <Text style={styles.heading}>
          <Text style={styles.headingBlack}>Hey</Text>
          <Text style={styles.headingComma}>, </Text>
          <Text style={styles.headingGreen}>Login</Text>
          <Text style={styles.headingBlack}> Now.</Text>
        </Text>

        <TextInput
          placeholder="Email"
          style={styles.input}
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#999"
        />

    
        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.separatorContainer}>
          <View style={styles.separatorLine} />
          <Text style={styles.separatorText}>OR</Text>
          <View style={styles.separatorLine} />
        </View>

        
        <TouchableOpacity style={styles.googleButton}>
          <Icon name="google" size={20} color="#4285F4" style={styles.googleIcon} />
          <Text style={styles.googleText}>Continue with Google</Text>
        </TouchableOpacity>

  
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don’t have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.signupLink}>Sign up</Text>
          </TouchableOpacity>
        </View>


        <Pressable>
          <Text style={styles.termsText}>Terms & Conditions</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      position: 'relative',
    },
    logoContainer: {
      position: 'absolute',
      top: 40,
      left: 20,
      zIndex: 10,
    },
    logo: {
      width: 40,
      height: 40,
    },
    backgroundImage: {
      position: 'absolute',
      width: '100%',
      top: 0,
      height: 300,
      opacity: 0.1,
    },
    contentContainer: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 30,
      paddingTop: 120,
    },
    heading: {
      fontSize: 28,
      marginBottom: 30,
    },
    headingBlack: {
      color: '#000',
      fontWeight: 'bold',
    },
    headingComma: {
      color: '#000',
      fontWeight: 'normal',
    },
    headingGreen: {
      color: '#00b386',
      fontWeight: 'bold',
    },
    input: {
      backgroundColor: '#f0f0f0',
      borderRadius: 10,
      padding: 14,
      marginBottom: 15,
      borderColor: '#ddd',
      borderWidth: 1,
    },
    forgotText: {
      alignSelf: 'flex-end',
      color: '#888',
      fontSize: 12,
      marginBottom: 25,
    },
    loginButton: {
      backgroundColor: '#00b386',
      borderRadius: 10,
      paddingVertical: 14,
      alignItems: 'center',
    },
    loginButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    separatorContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 25,
    },
    separatorLine: {
      flex: 1,
      height: 1,
      backgroundColor: '#ccc',
    },
    separatorText: {
      marginHorizontal: 10,
      color: '#666',
      fontWeight: 'bold',
    },
    googleButton: {
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 10,
      padding: 12,
      alignItems: 'center',
      justifyContent: 'center',
    },
    googleIcon: {
      marginRight: 10,
    },
    googleText: {
      color: '#333',
      fontWeight: '500',
    },
    signupContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 30,
    },
    signupText: {
      color: '#888',
    },
    signupLink: {
      color: '#00b386',
      fontWeight: '500',
    },
    termsText: {
      textAlign: 'center',
      color: '#bbb',
      fontSize: 12,
      marginTop: 30,
    },
  });
  

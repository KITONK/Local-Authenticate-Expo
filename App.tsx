import React, { useEffect, useState } from "react";
import { StyleSheet, View } from 'react-native';
import * as LocalAuthentication from "expo-local-authentication";

import HomeScreen from "./src/module/HomeScreen/HomeScreen";
import AuthScreen from './src/module/AuthScreen/AuthScreen';

export default function App() {

  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isAuthentificated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  });

  const onAuthenticate = () => {
    const auth = LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate",
      fallbackLabel: "Enter Password",
    });
    auth.then(result => {
      setIsAuthenticated(result.success);
      console.log(result);
    });
  }

  return (
    <View style={styles.container}>
      {isAuthentificated 
        ? <HomeScreen setIsAuthenticated={setIsAuthenticated} />
        : <AuthScreen onAuthenticate={onAuthenticate} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

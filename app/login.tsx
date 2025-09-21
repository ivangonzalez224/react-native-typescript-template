import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";

import { useAppDispatch } from "../redux/hooks";
import { login } from "../redux/store";

const LoginScreen: React.FC = () => {
  // Estados de login
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // Estados para registro
  const [isRegistering, setIsRegistering] = useState<boolean>(false);
  const [registerUsername, setRegisterUsername] = useState<string>("");
  const [registerEmail, setRegisterEmail] = useState<string>("");
  const [registerPassword, setRegisterPassword] = useState<string>("");
  const [registerLoading, setRegisterLoading] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const router = useRouter();

  // Login
  const handleLogin = async () => {
    
  };

  // Registro
  const handleRegister = async () => {
    
  };

  

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require("../assets/icon.png")} style={styles.logo} />
      </View>

      {/* Vista de Login */}
      {!isRegistering && (
        <View style={styles.form}>
          <TextInput
            placeholder="Nombre de usuario"
            placeholderTextColor="#ccc"
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Contraseña"
            placeholderTextColor="#ccc"
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#000" />
            ) : (
              <Text style={styles.buttonText}>Iniciar sesión</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.switchButton}
            onPress={() => setIsRegistering(true)}
          >
            <Text style={styles.switchButtonText}>
              ¿No tienes cuenta? Regístrate
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Vista de Registro */}
      {isRegistering && (
        <View style={styles.form}>
          <TextInput
            placeholder="Nombre de usuario"
            placeholderTextColor="#ccc"
            style={styles.input}
            value={registerUsername}
            onChangeText={setRegisterUsername}
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Correo electrónico"
            placeholderTextColor="#ccc"
            style={styles.input}
            value={registerEmail}
            onChangeText={setRegisterEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Contraseña"
            placeholderTextColor="#ccc"
            style={styles.input}
            secureTextEntry
            value={registerPassword}
            onChangeText={setRegisterPassword}
            autoCapitalize="none"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleRegister}
            disabled={registerLoading}
          >
            {registerLoading ? (
              <ActivityIndicator color="#000" />
            ) : (
              <Text style={styles.buttonText}>Registrarme</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.switchButton}
            onPress={() => setIsRegistering(false)}
          >
            <Text style={styles.switchButtonText}>
              ¿Ya tienes cuenta? Inicia sesión
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {},
  logo: {},
  form: {},
  input: {},
  button: {},
  buttonText: {},
  switchButton: {},
  switchButtonText: {},
});
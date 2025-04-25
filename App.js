import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, Linking } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [servico, setServico] = useState('');

  const enviarWhatsApp = () => {
    const numeroDestino = '5584998326746';
    const texto = `Olá, meu nome é ${nome}. Quero agendar o serviço: ${servico}. Meu telefone: ${telefone}`;
    const url = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(texto)}`;
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Lava Jato do Pedro</Text>
      <Text style={styles.subtitle}>Agende sua lavagem com praticidade e pague via Pix!</Text>
      <TextInput placeholder="Seu nome" value={nome} onChangeText={setNome} style={styles.input} />
      <TextInput placeholder="Seu telefone" value={telefone} onChangeText={setTelefone} style={styles.input} keyboardType="phone-pad" />
      <TextInput placeholder="Serviço desejado" value={servico} onChangeText={setServico} style={styles.input} multiline />
      <TouchableOpacity onPress={enviarWhatsApp} style={styles.button}>
        <Text style={styles.buttonText}>Agendar pelo WhatsApp</Text>
      </TouchableOpacity>
      <Text style={styles.sectionTitle}>Serviços e Valores</Text>
      <Image source={require('./assets/tabela_servicos_lavajato.png')} style={styles.image} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#2b5876',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 10,
    textAlign: 'center'
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10
  },
  button: {
    backgroundColor: '#25D366',
    padding: 14,
    borderRadius: 8,
    width: '100%',
    marginBottom: 30
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
  },
  sectionTitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center'
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 8
  }
});
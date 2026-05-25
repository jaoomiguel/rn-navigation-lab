// Componente reutilizavel: BotaoAcao
// Exemplo de componente extraido para a pasta components/
// Tema gamer neon/cyberpunk

import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function BotaoAcao({ texto, onPress, ativo }) {
  return (
    <TouchableOpacity
      style={[styles.botao, ativo && styles.botaoAtivo]}
      onPress={onPress}
    >
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#6C3BFF',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 16,

    shadowColor: '#6C3BFF',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,

    elevation: 6,
  },

  botaoAtivo: {
    backgroundColor: '#00E5FF',
  },

  texto: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
});
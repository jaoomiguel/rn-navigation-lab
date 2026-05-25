// HomeScreen gamer neon

import { useEffect, useState } from 'react';

import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const jogos = [
  {
    id: '1',
    titulo: 'Cyberpunk 2077',
    genero: 'RPG / Mundo Aberto',
    plataforma: 'PS5 / Xbox / PC',
    nota: '9/10',
    sinopse:
      'Explore Night City em um RPG futurista cheio de escolhas e tecnologia.',
  },
  {
    id: '2',
    titulo: 'Elden Ring',
    genero: 'Soulslike / Fantasia',
    plataforma: 'PS5 / Xbox / PC',
    nota: '10/10',
    sinopse:
      'Explore um mundo sombrio criado em parceria com George R. R. Martin.',
  },
  {
    id: '3',
    titulo: 'God of War Ragnarok',
    genero: 'Acao / Aventura',
    plataforma: 'PS5',
    nota: '10/10',
    sinopse:
      'Kratos e Atreus enfrentam o Ragnarok nos reinos nordicos.',
  },
  {
    id: '4',
    titulo: 'Hades',
    genero: 'Roguelike / Indie',
    plataforma: 'PC / Switch',
    nota: '9/10',
    sinopse:
      'Fuja do submundo em batalhas frenéticas inspiradas na mitologia grega.',
  },
];

export default function HomeScreen({ navigation }) {
  const [busca, setBusca] = useState('');

  const [jogosFiltrados, setJogosFiltrados] =
    useState(jogos);

  useEffect(() => {
    const resultado = jogos.filter((jogo) =>
      jogo.titulo
        .toLowerCase()
        .includes(busca.toLowerCase())
    );

    setJogosFiltrados(resultado);
  }, [busca]);

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate('Detalhe', {
            ...item,
          })
        }
      >
        <View style={styles.cardIcone}>
          <Text style={styles.cardIconeTexto}>
            {item.titulo[0]}
          </Text>
        </View>

        <View style={styles.cardInfo}>
          <Text style={styles.cardTitulo}>
            {item.titulo}
          </Text>

          <Text style={styles.cardSubtitulo}>
            {item.genero}
          </Text>

          <Text style={styles.cardPlataforma}>
            {item.plataforma}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>
          Game Vault
        </Text>

        <Text style={styles.headerSubtitulo}>
          Explore os melhores jogos da geração
        </Text>
      </View>

      <View style={styles.buscaContainer}>
        <TextInput
          style={styles.buscaInput}
          placeholder="Buscar jogo..."
          placeholderTextColor="#888"
          value={busca}
          onChangeText={setBusca}
        />
      </View>

      <FlatList
        data={jogosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F1A',
  },

  header: {
    backgroundColor: '#6C3BFF',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,

    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  headerTitulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  headerSubtitulo: {
    fontSize: 14,
    color: '#D8D8D8',
    marginTop: 4,
  },

  buscaContainer: {
    paddingHorizontal: 16,
    paddingVertical: 14,
  },

  buscaInput: {
    backgroundColor: '#1E1E2E',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 15,
    color: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#6C3BFF',
  },

  lista: {
    padding: 16,
    gap: 14,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#1E1E2E',

    borderRadius: 18,
    padding: 16,

    borderWidth: 1,
    borderColor: '#6C3BFF',

    shadowColor: '#6C3BFF',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,

    elevation: 5,
  },

  cardIcone: {
    width: 56,
    height: 56,
    borderRadius: 28,

    backgroundColor: '#6C3BFF',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 16,
  },

  cardIconeTexto: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  cardInfo: {
    flex: 1,
  },

  cardTitulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 6,
  },

  cardSubtitulo: {
    fontSize: 13,
    color: '#CFCFCF',
    marginBottom: 4,
  },

  cardPlataforma: {
    fontSize: 12,
    color: '#00E5FF',
    fontWeight: '600',
  },
});
// Tela de lista de jogos salvos

import { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

// Importando o componente reutilizavel
import { CardJogo } from "../components";

const jogosMock = [
  {
    id: "1",
    titulo: "The Legend of Zelda: Breath of the Wild",
    genero: "Aventura / Mundo Aberto",
    plataforma: "Nintendo Switch",
    nota: "10/10",
  },
  {
    id: "2",
    titulo: "Cyberpunk 2077",
    genero: "RPG / Mundo Aberto",
    plataforma: "PS5 / PC / Xbox",
    nota: "9/10",
  },
  {
    id: "3",
    titulo: "God of War",
    genero: "Acao / Aventura",
    plataforma: "PS4 / PC",
    nota: "10/10",
  },
];

export default function ListaScreen({ route }) {
  const [itensSalvos, setItensSalvos] = useState(jogosMock);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>
          Game Vault
        </Text>
      </View>

      <FlatList
        data={itensSalvos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardJogo
            titulo={item.titulo}
            genero={item.genero}
            plataforma={item.plataforma}
            nota={item.nota}
          />
        )}
        ListEmptyComponent={
          <View style={styles.conteudo}>
            <View style={styles.iconeContainer}>
              <Text style={styles.icone}>🎮</Text>
            </View>

            <Text style={styles.titulo}>
              Nenhum jogo salvo
            </Text>

            <Text style={styles.descricao}>
              Sua biblioteca gamer esta vazia
            </Text>

            <Text style={styles.dica}>
              Acesse um jogo e toque em
              "Adicionar a Lista" para salvar.
            </Text>
          </View>
        }
        contentContainerStyle={
          itensSalvos.length === 0 &&
          styles.listaVazia
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F1A",
  },

  header: {
    backgroundColor: "#6C3BFF",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,

    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  headerTitulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  listaVazia: {
    flex: 1,
  },

  conteudo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
  },

  iconeContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#1E1E2E",

    alignItems: "center",
    justifyContent: "center",

    marginBottom: 20,

    borderWidth: 2,
    borderColor: "#6C3BFF",
  },

  icone: {
    fontSize: 42,
  },

  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
    textAlign: "center",
  },

  descricao: {
    fontSize: 16,
    color: "#CFCFCF",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 12,
  },

  dica: {
    fontSize: 14,
    color: "#9E9E9E",
    textAlign: "center",
    lineHeight: 22,
  },
});
// DetalheScreen gamer neon

import { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const jogoMock = {
  titulo: "Cyberpunk 2077",
  genero: "RPG / Mundo Aberto",
  plataforma: "PS5 / Xbox / PC",
  nota: "9/10",
  sinopse:
    "Explore Night City em um RPG futurista cheio de escolhas, implantes ciberneticos e combates intensos.",
};

export default function DetalheScreen({
  route,
  navigation,
}) {
  const {
    titulo,
    genero,
    plataforma,
    nota,
    sinopse,
  } = route?.params ?? jogoMock;

  const [isSalvo, setIsSalvo] =
    useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <View style={styles.heroIcone}>
            <Text style={styles.heroIconeTexto}>
              {titulo[0]}
            </Text>
          </View>

          <Text style={styles.heroTitulo}>
            {titulo}
          </Text>

          <Text style={styles.heroSubtitulo}>
            {genero}
          </Text>

          <View style={styles.heroMeta}>
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>
                Plataforma
              </Text>

              <Text style={styles.metaValor}>
                {plataforma}
              </Text>
            </View>

            <View style={styles.metaSeparador} />

            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>
                Nota
              </Text>

              <Text style={styles.metaValor}>
                {nota}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.secao}>
          <Text style={styles.secaoTitulo}>
            Sobre o jogo
          </Text>

          <Text style={styles.detalheTexto}>
            {sinopse}
          </Text>
        </View>

        <TouchableOpacity
          style={[
            styles.botao,
            isSalvo && styles.botaoAtivo,
          ]}
          onPress={() =>
            setIsSalvo((prev) => !prev)
          }
        >
          <Text style={styles.botaoTexto}>
            {isSalvo
              ? "Remover da Lista"
              : "Adicionar a Lista"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F1A",
  },

  hero: {
    backgroundColor: "#6C3BFF",
    alignItems: "center",
    paddingVertical: 32,
    paddingHorizontal: 20,

    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },

  heroIcone: {
    width: 90,
    height: 90,
    borderRadius: 45,

    backgroundColor: "#00E5FF",

    alignItems: "center",
    justifyContent: "center",

    marginBottom: 16,
  },

  heroIconeTexto: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#0F0F1A",
  },

  heroTitulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 8,
  },

  heroSubtitulo: {
    fontSize: 15,
    color: "#E0E0E0",
    marginBottom: 18,
  },

  heroMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,

    backgroundColor:
      "rgba(255,255,255,0.12)",

    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 26,
  },

  metaItem: {
    alignItems: "center",
  },

  metaLabel: {
    fontSize: 11,
    color: "#D8D8D8",
    marginBottom: 4,
  },

  metaValor: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  metaSeparador: {
    width: 1,
    height: 30,
    backgroundColor:
      "rgba(255,255,255,0.3)",
  },

  secao: {
    margin: 16,

    backgroundColor: "#1E1E2E",

    borderRadius: 18,
    padding: 18,

    borderWidth: 1,
    borderColor: "#6C3BFF",

    shadowColor: "#6C3BFF",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,

    elevation: 5,
  },

  secaoTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 12,
  },

  detalheTexto: {
    fontSize: 15,
    color: "#D0D0D0",
    lineHeight: 24,
  },

  botao: {
    margin: 16,
    marginTop: 4,

    backgroundColor: "#6C3BFF",

    borderRadius: 14,
    paddingVertical: 16,

    alignItems: "center",

    marginBottom: 32,

    shadowColor: "#6C3BFF",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,

    elevation: 6,
  },

  botaoAtivo: {
    backgroundColor: "#00E5FF",
  },

  botaoTexto: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFFFFF",
    letterSpacing: 1,
  },
});
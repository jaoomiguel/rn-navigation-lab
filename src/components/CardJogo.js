import { StyleSheet, Text, View } from "react-native";

// Recebendo props corretamente
export default function CardJogo({
  titulo,
  genero,
  plataforma,
  nota,
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>{titulo}</Text>

      <Text style={styles.info}>
        🎮 Gênero: {genero}
      </Text>

      <Text style={styles.info}>
        🕹️ Plataforma: {plataforma}
      </Text>

      <Text style={styles.nota}>
        ⭐ Nota: {nota}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1E1E2E",
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 18,
    borderRadius: 16,

    borderWidth: 1,
    borderColor: "#6C3BFF",

    shadowColor: "#6C3BFF",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,

    elevation: 6,
  },

  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },

  info: {
    fontSize: 15,
    color: "#CFCFCF",
    marginBottom: 6,
  },

  nota: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00E5FF",
    marginTop: 8,
  },
});
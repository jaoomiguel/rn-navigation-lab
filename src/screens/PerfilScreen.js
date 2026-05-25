// Tela de perfil gamer

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function PerfilScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>
          Gamer Profile
        </Text>
      </View>

      <View style={styles.cartao}>
        <View style={styles.avatar}>
          <Text style={styles.avatarTexto}>J</Text>
        </View>

        <Text style={styles.nome}>
          João Miguel
        </Text>

        <Text style={styles.email}>
          player@gamemail.com
        </Text>

        <View style={styles.separador} />

        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>
            Jogos salvos
          </Text>

          <Text style={styles.infoValor}>
            12
          </Text>
        </View>

        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>
            Jogos favoritos
          </Text>

          <Text style={styles.infoValor}>
            5
          </Text>
        </View>

        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>
            Player desde
          </Text>

          <Text style={styles.infoValor}>
            Maio 2026
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>
          Editar Gamer Tag
        </Text>
      </TouchableOpacity>
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

  cartao: {
    margin: 16,
    backgroundColor: "#1E1E2E",
    borderRadius: 20,
    padding: 24,
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#6C3BFF",

    shadowColor: "#6C3BFF",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,

    elevation: 6,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#6C3BFF",

    alignItems: "center",
    justifyContent: "center",

    borderWidth: 3,
    borderColor: "#00E5FF",

    marginBottom: 16,
  },

  avatarTexto: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  nome: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 4,
  },

  email: {
    fontSize: 14,
    color: "#B0B0B0",
    marginBottom: 20,
  },

  separador: {
    width: "100%",
    height: 1,
    backgroundColor: "#2D2D44",
    marginBottom: 16,
  },

  infoLinha: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 10,
  },

  infoLabel: {
    fontSize: 15,
    color: "#CFCFCF",
  },

  infoValor: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#00E5FF",
  },

  botao: {
    marginHorizontal: 16,
    backgroundColor: "#6C3BFF",
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",

    shadowColor: "#6C3BFF",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,

    elevation: 6,
  },

  botaoTexto: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFFFFF",
    letterSpacing: 1,
  },
});
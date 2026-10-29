import { Image, StyleSheet, Text, View } from "react-native";

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.brand}>
        <Image source={require("../../assets/scania_logomark.png")} style={styles.logo} resizeMode='contain' />

        <Text style={styles.wordmark}>SCANIA</Text>
      </View>

      <Text style={styles.date}>28.10.2026</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 72,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  brand: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  logo: {
    width: 34,
    height: 34,
  },

  wordmark: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
    letterSpacing: 1,
  },

  date: {
    color: "#777777",
    fontSize: 12,
  },
});

import { Image, StyleSheet, Text, View } from "react-native";

export function Hero() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/hero.jpg")} style={styles.image} resizeMode='cover' />

      <View style={styles.overlay} />

      <View style={styles.content}>
        <Text style={styles.eyebrow}>OPEN HOUSE TI 1</Text>

        <Text style={styles.title}>Minha jornada{"\n"}na Scania</Text>

        <Text style={styles.subtitle}>Uma experiência de imersão em indústria, carreira e tecnologia.</Text>

        <Text style={styles.location}>São Bernardo do Campo · 28.10.2026</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 500,
    marginHorizontal: 12,
    borderRadius: 28,
    overflow: "hidden",
    position: "relative",
  },

  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.42)",
  },

  content: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 28,
  },

  eyebrow: {
    color: "#FFCC00",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 2,
    marginBottom: 12,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 42,
    lineHeight: 44,
    fontWeight: "800",
  },

  subtitle: {
    color: "#D0D0D0",
    fontSize: 15,
    lineHeight: 22,
    marginTop: 16,
    maxWidth: 330,
  },

  location: {
    color: "#FFFFFF",
    fontSize: 12,
    marginTop: 24,
  },
});

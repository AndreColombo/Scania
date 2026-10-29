import { Image, StyleSheet, Text, View } from "react-native";
import { SectionTitle } from "./SectionTitle";

const gallery = [
  {
    image: require("../../assets/cabinas.jpg"),
    title: "Cabinas",
    size: "large",
  },
  {
    image: require("../../assets/chassis.jpg"),
    title: "Chassis",
    size: "small",
  },
  {
    image: require("../../assets/motores.jpg"),
    title: "Motores",
    size: "small",
  },
  {
    image: require("../../assets/transmissoes.jpg"),
    title: "Transmissões",
    size: "large",
  },
];

export function BentoGallery() {
  return (
    <View>
      <SectionTitle eyebrow='A PRODUÇÃO' title='Por trás dos caminhões' description='Durante a visita, conheci diferentes etapas da produção dos veículos Scania.' />

      <View style={styles.grid}>
        <View style={styles.leftColumn}>
          <View style={styles.largeCard}>
            <Image source={gallery[0].image} style={styles.image} resizeMode='cover' />

            <View style={styles.gradient} />

            <Text style={styles.cardTitle}>{gallery[0].title}</Text>
          </View>
        </View>

        <View style={styles.rightColumn}>
          <View style={styles.smallCard}>
            <Image source={gallery[1].image} style={styles.image} resizeMode='cover' />

            <View style={styles.gradient} />

            <Text style={styles.cardTitle}>{gallery[1].title}</Text>
          </View>

          <View style={styles.smallCard}>
            <Image source={gallery[2].image} style={styles.image} resizeMode='cover' />

            <View style={styles.gradient} />

            <Text style={styles.cardTitle}>{gallery[2].title}</Text>
          </View>
        </View>
      </View>

      <View style={styles.bottomCard}>
        <Image source={gallery[3].image} style={styles.image} resizeMode='cover' />

        <View style={styles.gradient} />

        <Text style={styles.cardTitle}>{gallery[3].title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    gap: 8,
  },

  leftColumn: {
    flex: 1,
  },

  rightColumn: {
    flex: 1,
    gap: 8,
  },

  largeCard: {
    height: 310,
    borderRadius: 20,
    overflow: "hidden",
    position: "relative",
  },

  smallCard: {
    height: 151,
    borderRadius: 20,
    overflow: "hidden",
    position: "relative",
  },

  bottomCard: {
    height: 190,
    borderRadius: 20,
    overflow: "hidden",
    position: "relative",
    marginTop: 8,
  },

  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },

  gradient: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(0, 0, 0, 0.28)",
  },

  cardTitle: {
    position: "absolute",
    left: 16,
    bottom: 14,
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});

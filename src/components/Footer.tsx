import { StyleSheet, Text, View } from "react-native";

export function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.line} />

      <Text style={styles.logo}>SCANIA</Text>

      <Text style={styles.title}>O que eu levo{"\n"}da visita</Text>

      <Text style={styles.description}>
        A visita mostrou uma dimensão da Scania que vai muito além da produção de caminhões. Ao longo do dia, pude conhecer processos industriais, conversar com
        profissionais de diferentes áreas e entender como tecnologia, engenharia e pessoas trabalham em conjunto.
      </Text>

      <Text style={styles.personal}>
        A imersão em TI foi especialmente interessante por apresentar diferentes possibilidades de atuação, passando por desenvolvimento, dados, infraestrutura, segurança
        e Digital Workplace. Mais do que conhecer uma fábrica, a experiência permitiu enxergar de forma mais concreta o ambiente profissional que estou me preparando para
        fazer parte.
      </Text>

      <View style={styles.highlights}>
        <View style={styles.highlight}>
          <Text style={styles.highlightNumber}>01</Text>

          <Text style={styles.highlightTitle}>PRODUÇÃO</Text>

          <Text style={styles.highlightText}>Engenharia, automação e processos industriais.</Text>
        </View>

        <View style={styles.highlight}>
          <Text style={styles.highlightNumber}>02</Text>

          <Text style={styles.highlightTitle}>TECNOLOGIA</Text>

          <Text style={styles.highlightText}>Desenvolvimento, dados, infraestrutura e segurança.</Text>
        </View>

        <View style={styles.highlight}>
          <Text style={styles.highlightNumber}>03</Text>

          <Text style={styles.highlightTitle}>CARREIRA</Text>

          <Text style={styles.highlightText}>Diferentes possibilidades de atuação dentro da Scania.</Text>
        </View>
      </View>

      <Text style={styles.date}>OPEN HOUSE TI 1 · 28.10.2026</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 70,
    paddingBottom: 20,
  },

  line: {
    height: 1,
    backgroundColor: "#222222",
    marginBottom: 40,
  },

  logo: {
    color: "#FFCC00",
    fontSize: 14,
    fontWeight: "800",
    letterSpacing: 2,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 30,
    lineHeight: 34,
    fontWeight: "800",
    marginTop: 14,
  },

  description: {
    color: "#999999",
    fontSize: 14,
    lineHeight: 22,
    marginTop: 20,
  },

  personal: {
    color: "#CCCCCC",
    fontSize: 14,
    lineHeight: 22,
    marginTop: 18,
  },

  highlights: {
    marginTop: 32,
    gap: 10,
  },

  highlight: {
    backgroundColor: "#111111",
    borderRadius: 16,
    padding: 18,
  },

  highlightNumber: {
    color: "#FFCC00",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1,
  },

  highlightTitle: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
    marginTop: 8,
  },

  highlightText: {
    color: "#777777",
    fontSize: 13,
    lineHeight: 19,
    marginTop: 5,
  },

  date: {
    color: "#555555",
    fontSize: 11,
    letterSpacing: 1,
    marginTop: 40,
  },
});

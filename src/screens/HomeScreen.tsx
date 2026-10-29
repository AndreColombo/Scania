import { ScrollView, StyleSheet, View } from "react-native";

import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Timeline } from "../components/Timeline";
import { BentoGallery } from "../components/BentoGallery";
import { Footer } from "../components/Footer";

export function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <Header />

      <Hero />

      <View style={styles.section}>
        <Timeline />
      </View>

      <View style={styles.section}>
        <BentoGallery />
      </View>

      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050505",
  },

  content: {
    paddingBottom: 40,
  },

  section: {
    paddingHorizontal: 20,
    marginTop: 48,
  },
});

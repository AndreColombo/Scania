import { StyleSheet, Text, View } from "react-native";
import { SectionTitle } from "./SectionTitle";
import { timeline } from "../data/visit";
import { TimelineItem } from "./TimelineItem";

export function Timeline() {
  return (
    <View>
      <SectionTitle
        eyebrow='A EXPERIÊNCIA'
        title='Minha jornada'
        description='Um dia dividido entre produção, carreira, tecnologia e contato com diferentes áreas da Scania.'
      />

      <View>
        {timeline.map((item, index) => (
          <TimelineItem key={item.time} time={item.time} title={item.title} description={item.description} isLast={index === timeline.length - 1} />
        ))}
      </View>
    </View>
  );
}

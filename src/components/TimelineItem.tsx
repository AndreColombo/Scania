import { StyleSheet, Text, View } from "react-native";

type TimelineItemProps = {
  time: string;
  title: string;
  description: string;
  isLast?: boolean;
};

export function TimelineItem({ time, title, description, isLast = false }: TimelineItemProps) {
  return (
    <View style={styles.item}>
      <View style={styles.lineContainer}>
        <View style={styles.dot} />

        {!isLast && <View style={styles.line} />}
      </View>

      <View style={styles.content}>
        <Text style={styles.time}>{time}</Text>

        <Text style={styles.title}>{title}</Text>

        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    minHeight: 110,
  },

  lineContainer: {
    width: 28,
    alignItems: "center",
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#FFCC00",
    marginTop: 5,
  },

  line: {
    width: 1,
    flex: 1,
    backgroundColor: "#333333",
    marginTop: 6,
  },

  content: {
    flex: 1,
    paddingLeft: 16,
    paddingBottom: 30,
  },

  time: {
    color: "#777777",
    fontSize: 11,
    fontWeight: "600",
  },

  title: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "700",
    marginTop: 5,
  },

  description: {
    color: "#888888",
    fontSize: 13,
    lineHeight: 20,
    marginTop: 7,
  },
});

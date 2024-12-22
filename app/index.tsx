import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Card, Title, Paragraph } from "react-native-paper";
import { useRouter } from "expo-router";

export default function HomePage(): JSX.Element {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>
            Welcome to Personal Task Manager App
          </Title>
          <Paragraph>
            Organize your tasks efficiently and effectively!
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button
            mode="contained"
            style={styles.button}
            onPress={() => router.push("/taskList")}
          >
            Get Started
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  card: {
    width: "90%",
    padding: 16,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  button: {
    marginTop: 16,
    width: "100%",
  },
});

import React from "react";
import { View, StyleSheet, FlatList, ListRenderItem } from "react-native";
import { Card, Title, Paragraph, Badge } from "react-native-paper";
import { Task, mockTasks } from "../types/Task";

export default function TasksPage(): JSX.Element {
  const getStatusColor = (status: Task["status"]): string => {
    return status === "completed" ? "#4CAF50" : "#FFA000";
  };

  const renderTaskItem: ListRenderItem<Task> = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.headerContainer}>
          <Title>{item.title}</Title>
          <Badge
            style={[
              styles.statusBadge,
              { backgroundColor: getStatusColor(item.status) },
            ]}
          >
            {item.status}
          </Badge>
        </View>
        <Paragraph style={styles.description}>{item.description}</Paragraph>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList<Task>
        data={mockTasks}
        keyExtractor={(item) => item.id}
        renderItem={renderTaskItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  listContainer: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  description: {
    marginTop: 8,
    color: "#666",
  },
  statusBadge: {
    alignSelf: "center",
  },
});

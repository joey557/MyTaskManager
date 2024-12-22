import React from "react";
import { View, StyleSheet } from "react-native";
import { Modal, Portal, Text, Button } from "react-native-paper";
import { Task } from "../types/Task";

interface TaskDetailsModalProps {
  visible: boolean;
  task: Task | null;
  onDismiss: () => void;
}

export default function TaskDetailsModal({
  visible,
  task,
  onDismiss,
}: TaskDetailsModalProps): JSX.Element | null {
  if (!task) return null;

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={styles.modalContainer}
      >
        <Text style={styles.title}>{task.title}</Text>
        <Text style={styles.description}>{task.description}</Text>
        <Text style={styles.status}>Status: {task.status}</Text>
        <Button onPress={onDismiss} style={styles.closeButton}>
          Close
        </Button>
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    margin: 20,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  status: {
    fontSize: 14,
    color: "gray",
    marginBottom: 20,
  },
  closeButton: {
    alignSelf: "center",
  },
});

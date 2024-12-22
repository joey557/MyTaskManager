import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Modal, Button, Text, Portal } from "react-native-paper";
import { TaskFormData } from "../types/Task";

interface AddTaskModalProps {
  visible: boolean;
  onDismiss: () => void;
  onSave: (data: TaskFormData) => void;
}

export default function AddTaskModal({
  visible,
  onDismiss,
  onSave,
}: AddTaskModalProps): JSX.Element {
  const [taskData, setTaskData] = React.useState<TaskFormData>({
    title: "",
    description: "",
    status: "pending", // 默认值为 "pending"
  });

  const handleSave = (): void => {
    // 调用保存方法，并重置输入框
    onSave(taskData);
    setTaskData({ title: "", description: "", status: "pending" });
  };

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={styles.modalContainer}
      >
        <Text style={styles.modalTitle}>Add New Task</Text>
        <TextInput
          placeholder="Title"
          style={styles.input}
          value={taskData.title}
          onChangeText={(text) => setTaskData({ ...taskData, title: text })}
        />
        <TextInput
          placeholder="Description"
          style={styles.input}
          value={taskData.description}
          onChangeText={(text) =>
            setTaskData({ ...taskData, description: text })
          }
        />
        <Button mode="contained" style={styles.button} onPress={handleSave}>
          Save Task
        </Button>
        <Button onPress={onDismiss}>Cancel</Button>
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "white",
    margin: 20,
    borderRadius: 8,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginBottom: 10,
  },
  button: {
    marginBottom: 10,
  },
});

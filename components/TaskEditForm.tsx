// components/TaskEditForm.tsx
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { Task, TaskFormData } from "../types/Task";

interface TaskEditFormProps {
  task: Task;
  onSave: (id: string, data: TaskFormData) => void;
  onCancel: () => void;
}

export default function TaskEditForm({
  task,
  onSave,
  onCancel,
}: TaskEditFormProps): JSX.Element {
  const [title, setTitle] = useState<string>(task.title);
  const [description, setDescription] = useState<string>(task.description);
  const [status, setStatus] = useState<"pending" | "completed">(task.status);

  const handleSave = (): void => {
    onSave(task.id, { title, description, status });
  };

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        label="Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        mode="outlined"
        label="Description"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={3}
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <Button mode="outlined" onPress={onCancel} style={styles.button}>
          Cancel
        </Button>
        <Button mode="contained" onPress={handleSave} style={styles.button}>
          Save
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 8,
  },
  button: {
    minWidth: 100,
  },
});

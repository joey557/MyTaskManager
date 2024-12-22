import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
} from "react-native";
import {
  Card,
  Title,
  Badge,
  IconButton,
  Button,
  Portal,
  Modal,
} from "react-native-paper";
import { Task, TaskFormData, mockTasks } from "../types/Task";
import TaskEditForm from "../components/TaskEditForm";
import AddTaskModal from "../components/AddTaskModal";
import TaskDetailsModal from "../components/TaskDetailsModal";

export default function TasksPage(): JSX.Element {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const getStatusColor = (status: Task["status"]): string => {
    return status === "completed" ? "#4CAF50" : "#FFA000";
  };

  const handleEdit = (task: Task): void => {
    setEditingTask(task);
  };

  const handleSave = (id: string, data: TaskFormData): void => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, ...data } : task))
    );
    setEditingTask(null);
  };

  const handleCancel = (): void => {
    setEditingTask(null);
  };

  const handleDelete = (id: string): void => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleAddTask = (data: TaskFormData): void => {
    const newTask: Task = {
      id: Date.now().toString(),
      ...data,
      status: data.status || "pending",
    };

    setTasks([...tasks, newTask]);
    setIsAddModalVisible(false);
  };

  const toggleStatus = (id: string): void => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "pending" ? "completed" : "pending",
            }
          : task
      )
    );
  };

  const renderTaskItem: ListRenderItem<Task> = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedTask(item)}>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.headerContainer}>
            <Title>{item.title}</Title>
            <View style={styles.actionContainer}>
              <TouchableOpacity onPress={() => toggleStatus(item.id)}>
                <Badge
                  style={[
                    styles.statusBadge,
                    { backgroundColor: getStatusColor(item.status) },
                  ]}
                >
                  {item.status}
                </Badge>
              </TouchableOpacity>
              <IconButton
                icon="pencil"
                size={20}
                onPress={() => handleEdit(item)}
              />
              <IconButton
                icon="delete"
                size={20}
                onPress={() => handleDelete(item.id)}
              />
            </View>
          </View>
          {/* Truncated description */}
          <Title style={styles.description}>
            {item.description.split(" ").slice(0, 5).join(" ")}...
          </Title>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList<Task>
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderTaskItem}
        contentContainerStyle={styles.listContainer}
      />
      <Button
        mode="contained"
        style={styles.addButton}
        onPress={() => setIsAddModalVisible(true)}
      >
        Add Task
      </Button>

      <AddTaskModal
        visible={isAddModalVisible}
        onDismiss={() => setIsAddModalVisible(false)}
        onSave={handleAddTask}
      />

      <TaskDetailsModal
        visible={!!selectedTask}
        task={selectedTask}
        onDismiss={() => setSelectedTask(null)}
      />

      <Portal>
        <Modal
          visible={editingTask !== null}
          onDismiss={handleCancel}
          contentContainerStyle={styles.modalContainer}
        >
          {editingTask && (
            <TaskEditForm
              task={editingTask}
              onSave={handleSave}
              onCancel={handleCancel}
            />
          )}
        </Modal>
      </Portal>
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
  actionContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  description: {
    marginTop: 8,
    color: "#666",
    fontSize: 17,
  },
  statusBadge: {
    alignSelf: "center",
  },
  modalContainer: {
    backgroundColor: "white",
    margin: 20,
    borderRadius: 8,
  },
  addButton: {
    margin: 16,
    alignSelf: "center",
  },
});

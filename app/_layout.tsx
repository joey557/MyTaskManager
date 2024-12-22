import { Stack } from "expo-router";

export default function Layout(): JSX.Element {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="taskList"
        options={{
          title: "Tasks",
          headerStyle: {
            backgroundColor: "#f5f5f5",
          },
          headerTintColor: "#000",
        }}
      />
    </Stack>
  );
}

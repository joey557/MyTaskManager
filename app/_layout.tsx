import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";

export default function Layout(): JSX.Element {
  return (
    <PaperProvider>
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
    </PaperProvider>
  );
}

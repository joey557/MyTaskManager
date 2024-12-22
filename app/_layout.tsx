import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";

// Root layout component that wraps the entire app
// Handles navigation structure and theme provider
export default function Layout(): JSX.Element {
  return (
    <PaperProvider>
      <Stack>
        {/* Home screen - hidden header for clean look */}
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
            title: "back",
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

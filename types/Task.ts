export interface Task {
  id: string;
  title: string;
  description: string;
  status: "pending" | "completed";
}

export const mockTasks: Task[] = [
  {
    id: "1",
    title: "Complete Assignment",
    description: "Finish the React Native task manager app",
    status: "pending",
  },
  {
    id: "2",
    title: "Study TypeScript",
    description: "Learn TypeScript basics and advanced concepts",
    status: "completed",
  },
  {
    id: "3",
    title: "Review Code",
    description: "Review and refactor existing codebase",
    status: "pending",
  },
];

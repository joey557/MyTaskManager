// Basic Task interface - represents a single task in our app
export interface Task {
  id: string;
  title: string;
  description: string;
  status: "pending" | "completed"; // Current task status
}

// Form data interface for creating/editing tasks
// Doesn't include id since it's generated when saving
export interface TaskFormData {
  title: string;
  description: string;
  status: "pending" | "completed";
}

// Sample tasks for testing and development
export const mockTasks: Task[] = [
  {
    id: "1",
    title: "Read Harry Potter",
    description:
      "Need to finish reading Harry Potter and the Sorcerer's Stone by next week. It's about 300 pages long, so I should read about 50 pages each day to stay on track. This will help me prepare for the book club discussion.",
    status: "pending",
  },
  {
    id: "2",
    title: "Clean My Room",
    description:
      "My room is getting really messy. I need to organize my desk, do laundry, vacuum the floor, change bed sheets, and clean the windows. Should also throw away or donate things I don't use anymore. Maybe reorganize my closet while I'm at it.",
    status: "completed",
  },
  {
    id: "3",
    title: "Learn Guitar",
    description:
      "Started learning guitar last week. Need to practice basic chords (A, D, G) for at least 30 minutes every day. Also want to learn my favorite song 'Wonderwall'. Should watch some YouTube tutorials and maybe find a good beginner's songbook.",
    status: "pending",
  },
];

// Props interface for the Add Task Modal component
export interface AddTaskModalProps {
  visible: boolean; // Controls modal visibility
  onDismiss: () => void; // Called when modal is closed
  onSave: (data: TaskFormData) => void; // Called when new task is saved
}

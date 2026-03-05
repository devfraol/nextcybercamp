export interface Course {
  id: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  lessons: number;
  labs: number;
  duration: string;
  progress?: number;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  courseIds: string[];
}

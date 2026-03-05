import { Course, LearningPath } from "@/types/academy";

export const featuredCourses: Course[] = [
  {
    id: "c1",
    title: "SOC Analyst Foundations",
    level: "Beginner",
    lessons: 14,
    labs: 5,
    duration: "6h 30m",
    progress: 45,
  },
  {
    id: "c2",
    title: "Threat Hunting Playbooks",
    level: "Intermediate",
    lessons: 18,
    labs: 8,
    duration: "9h 10m",
    progress: 20,
  },
  {
    id: "c3",
    title: "Cloud Incident Response",
    level: "Advanced",
    lessons: 22,
    labs: 11,
    duration: "12h 05m",
    progress: 0,
  },
];

export const learningPaths: LearningPath[] = [
  {
    id: "p1",
    title: "Blue Team Operator",
    description: "Master triage, SIEM workflows, and containment strategies.",
    courseIds: ["c1", "c2"],
  },
  {
    id: "p2",
    title: "Cloud Defender",
    description: "Secure cloud workloads and handle modern cloud-native incidents.",
    courseIds: ["c1", "c3"],
  },
];

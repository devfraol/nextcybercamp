import { learningPaths } from "@/features/academy/data";

export default function PathsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Learning Paths</h1>
      <p className="mt-2 text-muted-foreground">Choose a curated path to build your cybersecurity career.</p>
      <ul className="mt-6 space-y-3">
        {learningPaths.map((path) => (
          <li key={path.id} className="rounded-lg border border-border p-4">
            <p className="font-medium">{path.title}</p>
            <p className="text-sm text-muted-foreground">{path.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

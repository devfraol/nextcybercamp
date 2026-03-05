import { featuredCourses } from "@/features/academy/data";

export default function DashboardPage() {
  const completed = featuredCourses.filter((course) => (course.progress ?? 0) === 100).length;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome back, Operator</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-border p-4">
          <p className="text-sm text-muted-foreground">Courses Active</p>
          <p className="mt-2 text-2xl font-semibold">{featuredCourses.length}</p>
        </div>
        <div className="rounded-lg border border-border p-4">
          <p className="text-sm text-muted-foreground">Courses Completed</p>
          <p className="mt-2 text-2xl font-semibold">{completed}</p>
        </div>
        <div className="rounded-lg border border-border p-4">
          <p className="text-sm text-muted-foreground">Leaderboard Rank</p>
          <p className="mt-2 text-2xl font-semibold">#24</p>
        </div>
      </div>
    </div>
  );
}
